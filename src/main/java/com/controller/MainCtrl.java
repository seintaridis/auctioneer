package com.controller;


import com.dao.UserRepository;
import com.dto.UserLogInRequestDto;
import com.dto.UserLogInResponseDto;
import com.dto.UserSignUpRequestDto;
import com.dto.UserSignUpResponseDto;
import com.entity.Users;

import com.exceptions.BadRequestException;
import com.mappers.UserMapper;
import com.user.UserAuthorizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
@RestController
public class MainCtrl {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserAuthorizer userAuthorizer;


    @RequestMapping(path = "/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ExceptionHandler({BadRequestException.class})
    public UserLogInResponseDto login(@RequestBody UserLogInRequestDto userLogInRequestDto) throws Exception {

        //search for user
        Users user = userRepository.findUserByUsernameAndPassword(userLogInRequestDto.getUsername(), userLogInRequestDto.getPassword());
        if (user == null)
            throw new BadRequestException("User not found");
        //generate session token
        UUID genetatedToken = UUID.randomUUID();


        //prepare response
        UserLogInResponseDto userLogInResponseDto = new UserLogInResponseDto();
        userLogInResponseDto.setUserId((long) user.getUserId());
        userLogInResponseDto.setRole((String) user.getRole());
        userLogInResponseDto.setGeneratedToken(genetatedToken);

        //put session token to hashmap
        userAuthorizer.setUserSession(genetatedToken, (long) user.getUserId());

        return userLogInResponseDto;
    }

    @RequestMapping(path = "/signup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public UserSignUpResponseDto register(@RequestBody UserSignUpRequestDto userSignUpRequestDto) throws Exception {

        Users user = userRepository.findUserByUsernameAndPassword(userSignUpRequestDto.getUsername(), userSignUpRequestDto.getPassword());

        if (user != null) {
        } // TODO: Throw exception if user exists, to inform angular.

        // Create User
        Users new_user = UserMapper.registerRequestToUser(userSignUpRequestDto);
        userRepository.save(new_user);

        // Create dummy response
        long i = 1;
        UserSignUpResponseDto userSignUpResponseDto = new UserSignUpResponseDto();
        userSignUpResponseDto.setUserId(i);

        return userSignUpResponseDto; // TODO: Return something meaningfull.

    }

    @ExceptionHandler(Exception.class)
    public void notFound(HttpServletResponse e) throws Exception {
        e.sendError(HttpStatus.NOT_FOUND.value());
    }

}
