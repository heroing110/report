package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
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
 * 品类
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
    public Result<PagingResult> listview(@RequestBody StaCat staCat) {
        logger.info("/cat/listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        if (staCat.getPageNo() == null || staCat.getPageSize() == null) {
            staCat.setPageNo(1);
            staCat.setPageSize(10);
        }
        try {
            list = this.staCatService.selectAllWithPage(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/listview,查询异常");
            logger.error("/cat/listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> list(@RequestBody StaCat staCat) {
        logger.info("/cat/list");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectList(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/list,查询异常");
            logger.error("/cat/list,查询异常");
        }
        return result;
    }
}
