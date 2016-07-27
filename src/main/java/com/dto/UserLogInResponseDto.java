package com.dto;

/**
 * Created by dimitris on 7/24/16.
 */
public class UserLogInResponseDto {

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

    @Override
    public String toString() {
        return "UserLogInResponseDto{" +
                "userId=" + userId +
                ", role='" + role + '\'' +
                '}';
    }
}
