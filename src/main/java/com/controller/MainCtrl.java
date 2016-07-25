package com.controller;


import com.dao.UserRepository;
import com.dto.UserLogInRequestDto;
import com.dto.UserLogInResponseDto;
import com.dto.UserSignUpRequestDto;
import com.dto.UserSignUpResponseDto;
import com.entity.Users;
import com.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Component
@RestController
public class MainCtrl {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(path="/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public UserLogInResponseDto login(@RequestBody UserLogInRequestDto userLogInRequestDto) throws Exception {


        List<Users> user = userRepository.findUserByUsernameAndPassword(userLogInRequestDto.getUsername(), userLogInRequestDto.getPassword());

        System.out.println(userLogInRequestDto);

        if (user.isEmpty())
            throw new Exception("UserNotFound");

        UserLogInResponseDto userLogInResponseDto = new UserLogInResponseDto();
        userLogInResponseDto.setUserId((long) user.get(0).getUserId());

        return userLogInResponseDto;
    }

    @RequestMapping(path="/signup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public UserSignUpResponseDto register(@RequestBody UserSignUpRequestDto userSignUpRequestDto) throws Exception {
        // TODO: Decide: Why List<Users> and not User?
        List<Users>  user = userRepository.findUserByUsernameAndPassword(userSignUpRequestDto.getUsername(), userSignUpRequestDto.getPassword());
        if (user != null) { } // TODO: Throw exception if user exists.

        // Create User

        userRepository.save(user);
        long i =1;

        UserSignUpResponseDto userSignUpResponseDto = new UserSignUpResponseDto();
        userSignUpResponseDto.setUserId(i);

        return userSignUpResponseDto; // TODO: Return something miningfull.

    }

    @ExceptionHandler(Exception.class)
    public void notFound(HttpServletResponse e) throws Exception {
        e.sendError(HttpStatus.NOT_FOUND.value());
    }

}
