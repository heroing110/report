package com.example.controller;

import com.example.entity.StaTotal;
import com.example.entity.StaTotal;
import com.example.entity.User;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
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
 * 汇总
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/total")
public class StaToalController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaTotalService staTotalService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaTotal staTotal) {
        logger.info("/total/listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;
        if (staTotal.getPageNo() == null || staTotal.getPageSize() == null) {
            staTotal.setPageNo(1);
            staTotal.setPageSize(10);
        }
        try {
            list = this.staTotalService.selectAllWithPage(staTotal);
            PagingResult<List<StaTotal>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staTotal.getPageNo());
            pagingResult.setPageSize(staTotal.getPageSize());
            int count = this.staTotalService.selectPageCount(staTotal);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/listview,查询异常");
            logger.error("/total/listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> list(@RequestBody StaTotal staTotal) {
        logger.info("/total/list");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> list = this.staTotalService.selectList(staTotal);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/list,查询异常");
            logger.error("/total/list,查询异常");
        }
        return result;
    }
}
