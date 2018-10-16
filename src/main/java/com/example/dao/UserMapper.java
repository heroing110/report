package com.example.dao;

import com.example.entity.User;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    List<User> selectUserSelective(User user);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}