package com.example.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;

@Component
public class UserConfig implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(UserConfig.class);
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        log.info("---------------------开始进入请求地址拦截----------------------------");
        HttpSession session = request.getSession();
        if(session.getAttribute("user")!=null){
            log.info("user:"+session.getAttribute("user"));
            return true;
        }else{
            PrintWriter printWriter = response.getWriter();
            printWriter.write("{\"code\":2}");
            log.info("---------------------session已失效----------------------------");
            return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
