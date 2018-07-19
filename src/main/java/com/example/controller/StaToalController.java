package com.example.controller;

import com.example.entity.StaTotal;
import com.example.entity.User;
import com.example.service.StaTotalService;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/total")
public class StaToalController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaTotalService staTotalService;

    @RequestMapping(value = "/list",method = RequestMethod.POST)
    @ResponseBody
    public List<StaTotal> list(@RequestBody StaTotal staTotal){
        logger.info("/total/list");
        List<StaTotal> list = this.staTotalService.selectList(staTotal);
        return list;
    }

    @RequestMapping(value = "/listview",method = RequestMethod.POST)
    @ResponseBody
    public List<StaTotal> listview(@RequestBody StaTotal staTotal){
        logger.info("/total/listview");
        if (staTotal.getPageNo()==null || staTotal.getPageSize()==null) {
            staTotal.setPageNo(1);
            staTotal.setPageSize(10);
        }
        List<StaTotal> list = this.staTotalService.selectAllWithPage(staTotal);
        return list;
    }
}
