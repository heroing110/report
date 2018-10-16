package com.example.service.impl;

import com.example.dao.UserDao;
import com.example.dao.UserMapper;
import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public User login(User user) {
        if (user!=null && user.getLoginName()!=null && user.getMd5Password()!=null) {
            List<User> users = userMapper.selectUserSelective(user);
            if (users!=null && users.size()>0) {
                return users.get(0);
            }
        }
        return null;
    }

}