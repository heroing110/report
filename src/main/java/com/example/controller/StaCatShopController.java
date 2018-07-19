package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaCatShop;
import com.example.service.StaCatService;
import com.example.service.StaCatShopService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/catShop")
public class StaCatShopController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaCatShopService staCatShopService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public List<StaCatShop> listview(@RequestBody StaCatShop staCatShop) {
        logger.info("/catShop/listview");
        if (staCatShop.getPageNo() == null || staCatShop.getPageSize() == null) {
            staCatShop.setPageNo(1);
            staCatShop.setPageSize(10);
        }
        List<StaCatShop> list = this.staCatShopService.selectAllWithPage(staCatShop);
        return list;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public List<StaCatShop> list(@RequestBody StaCatShop staCatShop) {
        logger.info("/catShop/list");
        List<StaCatShop> list = this.staCatShopService.selectList(staCatShop);
        return list;
    }
}
