package com.example.service;

import com.example.entity.User;

/**
 * Created by heying on 2018/3/30.
 */
public interface UserService {
    public User getUserById(int userId);

    boolean addUser(User record);
}
