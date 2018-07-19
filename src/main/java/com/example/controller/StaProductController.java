package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaProduct;
import com.example.service.StaCatService;
import com.example.service.StaProductService;
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
@RequestMapping("/product")
public class StaProductController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaProductService staProductService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public List<StaProduct> listview(@RequestBody StaProduct staProduct) {
        logger.info("/product/listview");
        if (staProduct.getPageNo() == null || staProduct.getPageSize() == null) {
            staProduct.setPageNo(1);
            staProduct.setPageSize(10);
        }
        List<StaProduct> list = this.staProductService.selectAllWithPage(staProduct);
        return list;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public List<StaProduct> list(@RequestBody StaProduct staProduct) {
        logger.info("/product/list");
        List<StaProduct> list = this.staProductService.selectList(staProduct);
        return list;
    }
}
