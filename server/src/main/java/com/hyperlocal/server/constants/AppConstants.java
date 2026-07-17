package com.hyperlocal.server.constants;

public class AppConstants {
      private AppConstants() {
        // Prevent instantiation
    }

    // Success Messages
    public static final String REGISTER_SUCCESS = "User Registered Successfully";
    public static final String LOGIN_SUCCESS = "Login Successful";

    // Error Messages
    public static final String EMAIL_ALREADY_EXISTS = "Email already registered";
    public static final String PHONE_ALREADY_EXISTS = "Phone number already registered";
    public static final String INVALID_CREDENTIALS = "Invalid email or password"; 
}
