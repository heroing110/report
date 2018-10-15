package com.example.controller;

import com.example.entity.IPager;
import com.example.entity.User;

import javax.servlet.http.HttpServletRequest;

public class CommonController {
    /**
     * 设置权限，分页参数
     * @param pager
     * @param request
     */
    public void autoSetParamByPager(IPager pager, HttpServletRequest request) {

        if (pager.getPageNo() == null || pager.getPageSize() == null) {
            pager.setPageNo(1);
            pager.setPageSize(10);
        }

        pager.setPageRow((pager.getPageNo()-1)*pager.getPageSize());
        autoSetParam(pager , request);
    }

    /**
     * 分页参数
     * @param pager
     * @param request
     */
    public void setParamByPager(IPager pager, HttpServletRequest request) {

        if (pager.getPageNo() == null || pager.getPageSize() == null) {
            pager.setPageNo(1);
            pager.setPageSize(10);
        }

        pager.setPageRow((pager.getPageNo()-1)*pager.getPageSize());
    }

    /**
     * 设置权限，分页参数
     * @param pager
     * @param request
     */
    public void autoSetParamByPagerParallelWay(IPager pager, HttpServletRequest request) {

        if (pager.getPageNo() == null || pager.getPageSize() == null) {
            pager.setPageNo(1);
            pager.setPageSize(10);
        }

        pager.setPageRow((pager.getPageNo()-1)*pager.getPageSize());
        autoSetParamParallelWay(pager , request);
    }

    /**
     * 设置权限参数
     * @param pager
     * @param request
     */
    public void autoSetParam(IPager pager, HttpServletRequest request) {

        User user = (User) request.getSession().getAttribute("user");
        if (user!=null) {
            if (new Integer(1).equals(user.getLevel())) {//省级用户，只显示市级汇总数据
                pager.setProvince(user.getProvince());
                pager.setRemark1("市级汇总数据");
            }else if(new Integer(2).equals(user.getLevel())) {//市级用户，只显示区县级汇总数据
                pager.setRemark1("区县级汇总数据");
                pager.setCity(user.getCity());
            }
        }
    }

    /**
     * 设置权限参数,省级过滤省级，市级过滤市级
     * @param pager
     * @param request
     */
    public void autoSetParamParallelWay(IPager pager, HttpServletRequest request) {

        User user = (User) request.getSession().getAttribute("user");
        if (user!=null) {
            if (new Integer(1).equals(user.getLevel())) {//省级用户，只显示省级汇总数据
                pager.setProvince(user.getProvince());
                pager.setRemark1("省级汇总数据");
            }else if(new Integer(2).equals(user.getLevel())) {//市级用户，只显示市级汇总数据
                pager.setRemark1("市级汇总数据");
                pager.setCity(user.getCity());
            }
        }
    }

    public void onlySetProvinceOrCity(IPager pager, HttpServletRequest request) {

        User user = (User) request.getSession().getAttribute("user");
        if (user!=null) {
            if (new Integer(1).equals(user.getLevel())) {//省级用户，只显示市级汇总数据
                pager.setProvince(user.getProvince());
            }else if(new Integer(2).equals(user.getLevel())) {//市级用户，只显示区县级汇总数据
                pager.setCity(user.getCity());
            }
        }
    }

    public void autoSetProvinceOrCityParamByPager(IPager pager, HttpServletRequest request) {

        if (pager.getPageNo() == null || pager.getPageSize() == null) {
            pager.setPageNo(1);
            pager.setPageSize(10);
        }

        pager.setPageRow((pager.getPageNo()-1)*pager.getPageSize());
        onlySetProvinceOrCity(pager , request);
    }
}
