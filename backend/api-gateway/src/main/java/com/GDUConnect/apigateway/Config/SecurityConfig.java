package com.GDUConnect.apigateway.Config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthFilter;

  @Bean
  public SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http) {
    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration.setAllowedHeaders(List.of("*"));
    corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000"));
    corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT","OPTIONS","PATCH", "DELETE"));
    corsConfiguration.setAllowCredentials(true);
    http
      .cors().configurationSource(request -> corsConfiguration).and()
      .csrf().disable()
      .authorizeExchange(auth -> {
          auth.pathMatchers("/api/v1/auth/**").permitAll();
          auth.pathMatchers(HttpMethod.GET, "/api/v1/post/**").permitAll();
          auth.pathMatchers(HttpMethod.GET, "/api/v1/group/**").permitAll();
          auth.pathMatchers("/api/v1/user/**").permitAll();
          auth.anyExchange().authenticated();
        }
      )
      .addFilterBefore(jwtAuthFilter, SecurityWebFiltersOrder.AUTHENTICATION);
    return http.build();
  }

}
