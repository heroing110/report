package com.example.controller;

import com.example.entity.StaProduct;
import com.example.entity.User;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaProductService;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 用户
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/user")
public class UserController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Result<Boolean> listview(HttpServletRequest request, @RequestBody User user) {
        logger.info("/user/login");
        Result<Boolean> result = new Result<>();
        try {
            result.setData(false);
            result.setCode(Constants.RESULT_TYPE_SUCCESS);
            User login = userService.login(user);
            if (login != null && login.getIsValid()<0){
                result.setData(true);
                request.getSession().setAttribute("user", login);
            }else{
                result.setMsg("用户名或密码错误，登陆失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/user/login,查询异常");
            logger.error("/user/login,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/get_user", method = RequestMethod.GET)
    @ResponseBody
    public Result<User> getUser(HttpServletRequest request) {
        logger.info("/user/get_user");
        Result<User> result = new Result<>();
        try {
            User user = (User) request.getSession().getAttribute("user");
            result.setData(user);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/user/get_user,查询异常");
            logger.error("/user/get_user,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/login_out", method = RequestMethod.GET)
    @ResponseStatus(code = HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public Result<Boolean> loginOut(HttpServletRequest request) {
        logger.info("/user/login_out");
        Result<Boolean> result = new Result<>();
        result.setData(false);
        try {
            request.getSession().setAttribute("user", null);
            result.setCode(Constants.RESULT_TYPE_SUCCESS);
            result.setData(true);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/user/login_out,查询异常");
            logger.error("/user/login_out,查询异常");
        }
        return result;
    }
}
