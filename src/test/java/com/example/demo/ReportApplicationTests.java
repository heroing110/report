package com.example.demo;

import com.example.dao.UserDao;
import com.example.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReportApplicationTests {

	@Resource
	UserDao userDao;

	@Test
	public void contextLoads() {
		User user = new User();
		user.setUserName("小明");
		userDao.insertSelective(user);
		System.out.println("ID:"+user.getId());
	}

}
