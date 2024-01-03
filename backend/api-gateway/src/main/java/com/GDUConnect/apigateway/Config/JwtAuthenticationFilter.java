package com.GDUConnect.apigateway.Config;

import com.GDUConnect.apigateway.Service.JwtService;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Configuration
public class JwtAuthenticationFilter implements org.springframework.web.server.WebFilter {

  private final JwtService jwtService;
  private final UserDetailsService userDetailsService;

  public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
    this.jwtService = jwtService;
    this.userDetailsService = userDetailsService;
  }

  /**
   * This method filters the incoming request by checking if it has a valid JWT token in the Authorization header.
   * If the token is valid and the user is not already authenticated, it authenticates the user and adds the authentication
   * context to the request before passing it to the next filter in the chain.
   * If the token is not present or invalid, it simply passes the request to the next filter.
   *
   * @param exchange The server web exchange object representing the incoming request and response.
   * @param chain The web filter chain to delegate the request to.
   * @return A Mono that represents the completion of the request processing.
   */
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    // Get the Authorization header from the request
    final String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");

    // Check if the Authorization header is present and starts with "Bearer "
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      // If the Authorization header is not present or does not start with "Bearer ", pass the request to the next filter
      return chain.filter(exchange);
    }

    // Extract the JWT token from the Authorization header
    final String jwt = authHeader.substring(7);

    // Extract the student code from the JWT token
    final String studentCode = jwtService.extractStudentCode(jwt);

    // Check if the student code is not null and the user is not already authenticated
    if (studentCode != null && SecurityContextHolder.getContext().getAuthentication() == null) {
      // Load the UserDetails for the student code
      UserDetails userDetails = this.userDetailsService.loadUserByUsername(studentCode);

      // Check if the JWT token is valid for the UserDetails
      if (jwtService.isTokenValid(jwt, userDetails)) {
        // Create an authentication token for the UserDetails
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
          userDetails,
          null,
          userDetails.getAuthorities()
        );

        // Pass the request to the next filter in the chain and add the authentication context to the request
        return chain.filter(exchange).contextWrite(ReactiveSecurityContextHolder.withAuthentication(authenticationToken));
      }
    }

    // If the student code is null or the JWT token is not valid, pass the request to the next filter
    return chain.filter(exchange);
  }
}

