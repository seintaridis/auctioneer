package com.controller;


import com.dao.UserRepository;
import com.dto.UserDto;
import com.dto.UserLoginRequestDto;
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
import static java.util.stream.Collectors.toList;


@Component
@RestController
public class MainCtrl {

    @Autowired
    private UserRepository userRepository;


    private UserDto convertToDTO(Users user) {
        UserDto dto = new UserDto();

        dto.setUserId(user.getUserId());
        dto.setUsername(user.getUsername());
        dto.setPassword(user.getPassword());
        dto.setFirst_name(user.getFirstName());
        dto.setLast_name(user.getLastName());
        dto.setMail(user.getEmail());
        dto.setPhone_number(user.getPhone());
        dto.setLatitude(user.getLatitude());
        dto.setLongtitude(user.getLongitude());
        dto.setAfm(user.getAfm());
        dto.setAddress(user.getAddress());
        dto.setRole(user.getRole());
        dto.setGender(user.getGender());
        dto.setVerified(user.getVerified());

        return dto;
    }

    private List<UserDto> convertToDTOs(List<Users> users) {
        return users.stream()
                .map(this::convertToDTO)
                .collect(toList());
    }

    @RequestMapping(path="/get_user_list", method = RequestMethod.GET, produces = "application/json")
    public List<UserDto> get_users_list() throws Exception {
        // TODO: Need to authenticate with token if the user is admin!!!!!
        List<Users> users = userRepository.findAll();
        return convertToDTOs(users);
    }

    @RequestMapping(path="/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public UserLogInResponseDto login(@RequestBody UserLoginRequestDto userLoginRequestDto) throws Exception {

        List<Users> user = userRepository.findUserByUsernameAndPassword(userLoginRequestDto.getUsername(), userLoginRequestDto.getPassword());


        if (user.isEmpty())
            throw new Exception("UserNotFound");


        UserLogInResponseDto userLogInResponseDto = new UserLogInResponseDto();
        userLogInResponseDto.setUserId((long) user.get(0).getUserId());
        userLogInResponseDto.setRole((String) user.get(0).getRole());

        return userLogInResponseDto;
    }

    @RequestMapping(path="/signup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public UserSignUpResponseDto register(@RequestBody UserSignUpRequestDto userSignUpRequestDto) throws Exception {

        // TODO: Decide: Why List<Users> and not User?
        List<Users>  user = userRepository.findUserByUsernameAndPassword(userSignUpRequestDto.getUsername(), userSignUpRequestDto.getPassword());

        if (user != null) { } // TODO: Throw exception if user exists, to inform angular.

        // Create User
        Users new_user = UserMapper.registerRequestToUser(userSignUpRequestDto);
        userRepository.save(new_user);

        // Create dummy response
        long i =1;
        UserSignUpResponseDto userSignUpResponseDto = new UserSignUpResponseDto();
        userSignUpResponseDto.setUserId(i);

        return userSignUpResponseDto; // TODO: Return something meaningfull.

    }

    @ExceptionHandler(Exception.class)
    public void notFound(HttpServletResponse e) throws Exception {
        e.sendError(HttpStatus.NOT_FOUND.value());
    }

}
