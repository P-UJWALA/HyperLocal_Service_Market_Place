package com.hyperlocal.server.security;

import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.hyperlocal.server.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
  private static final String SECRET_KEY =
        "VGhpc0lzQVN1cGVyU2VjcmV0S2V5Rm9ySldUQXV0aGVudGljYXRpb24xMjM0NTY3ODkw";
    public String generateToken(User user){
      HashMap<String, Object> claims = new HashMap<>();
    claims.put("role", user.getRole().name()); 
    return Jwts.builder()
               .claims(claims)
               .subject(user.getEmail())
               .issuedAt(new Date(System.currentTimeMillis()))
               .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
               .signWith(getSignInKey())
               .compact(); 
   }
   private SecretKey getSignInKey()
{
    byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keyBytes);
}
private Claims extractAllClaims(String token){

  return Jwts.parser()
             .verifyWith(getSignInKey())
             .build()
             .parseSignedClaims(token)
             .getPayload();
}

public String extractUsername(String token){
  
  return extractClaim(token, Claims::getSubject);
}
public Date extractExpiration(String token){
  return extractClaim(token, Claims::getExpiration);
}
public <T> T extractClaim(String token, Function<Claims, T> Resolver){
  
  final Claims claims = extractAllClaims(token);
  return Resolver.apply(claims);

}

private boolean isTokenExpired(String token){
  return extractExpiration(token).before(new Date());
}
public boolean isTokenValid(String token,UserDetails userDetails){
  final String username = extractUsername(token);
  return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
}
}

