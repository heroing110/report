package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaShop;
import com.example.service.StaCatService;
import com.example.service.StaShopService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 店铺
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/shop")
public class StaShopController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaShopService staShopService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public List<StaShop> listview(@RequestBody StaShop staShop) {
        logger.info("/shop/listview");
        if (staShop.getPageNo() == null || staShop.getPageSize() == null) {
            staShop.setPageNo(1);
            staShop.setPageSize(10);
        }
        List<StaShop> list = this.staShopService.selectAllWithPage(staShop);
        return list;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public List<StaShop> list(@RequestBody StaShop staShop) {
        logger.info("/shop/list");
        List<StaShop> list = this.staShopService.selectList(staShop);
        return list;
    }
}
