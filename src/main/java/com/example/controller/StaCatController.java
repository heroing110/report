package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;
import com.example.service.StaCatService;
import com.example.service.StaTotalService;
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
@RequestMapping("/cat")
public class StaCatController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaCatService staCatService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public List<StaCat> listview(@RequestBody StaCat staCat) {
        logger.info("/cat/listview");
        if (staCat.getPageNo() == null || staCat.getPageSize() == null) {
            staCat.setPageNo(1);
            staCat.setPageSize(10);
        }
        List<StaCat> list = this.staCatService.selectAllWithPage(staCat);
        return list;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public List<StaCat> list(@RequestBody StaCat staCat) {
        logger.info("/cat/list");
        List<StaCat> list = this.staCatService.selectList(staCat);
        return list;
    }
}
