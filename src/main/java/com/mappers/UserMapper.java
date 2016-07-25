/**
 * Created by Panos on 25/7/16.
 */
package com.mappers;


import com.dto.UserSignUpRequestDto;

import com.entity.Users;


public class UserMapper {

    public static Users registerRequestToUser(UserSignUpRequestDto userSignUpDto) {

        if (userSignUpDto == null)
            return null;

        Users user = new Users();
        user.setUsername(userSignUpDto.getUsername());
        user.setEmail(userSignUpDto.getMail());
        user.setPassword(userSignUpDto.getPassword());
        user.setFirstName(userSignUpDto.getFirst_name());
        user.setLastName(userSignUpDto.getLast_name());
        user.setPhone(userSignUpDto.getPhone_number());
        user.setAfm(userSignUpDto.getAfm());
        user.setLatitude(userSignUpDto.getLatitude());
        user.setLongitude(userSignUpDto.getLongtitude());
        user.setAddress(userSignUpDto.getAddress());
        return user;
    }
}
