package com.GDUConnect.apigateway.Config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;

  @Bean
  public SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http) {
    log.info(http.toString());
    http
      .csrf().disable()
      .authorizeExchange(auth -> {
          auth.pathMatchers("/api/v1/auth/**").permitAll();
          auth.pathMatchers("/api/v1/user/**").permitAll();
          auth.anyExchange().authenticated();
        }
      )
      .addFilterBefore(jwtAuthFilter, SecurityWebFiltersOrder.AUTHENTICATION);
    return http.build();
  }

}
