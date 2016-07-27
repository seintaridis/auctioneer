package com.dto;

/**
 * Created by Panos on 25/7/16.
 */
public class UserSignUpResponseDto {

    public Long userId;

    public String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
