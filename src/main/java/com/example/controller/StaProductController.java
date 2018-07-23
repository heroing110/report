package com.example.controller;

import com.example.entity.StaProduct;
import com.example.entity.StaProduct;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaProductService;
import com.example.service.StaProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 产品
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
    public Result<PagingResult> listview(@RequestBody StaProduct staProduct) {
        logger.info("/product/listview");
        Result<PagingResult> result = new Result<>();
        List<StaProduct> list = null;
        if (staProduct.getPageNo() == null || staProduct.getPageSize() == null) {
            staProduct.setPageNo(1);
            staProduct.setPageSize(10);
        }
        try {
            list = this.staProductService.selectAllWithPage(staProduct);
            PagingResult<List<StaProduct>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staProduct.getPageNo());
            pagingResult.setPageSize(staProduct.getPageSize());
            int count = this.staProductService.selectPageCount(staProduct);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/product/listview,查询异常");
            logger.error("/product/listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaProduct>> list(@RequestBody StaProduct staProduct) {
        logger.info("/product/list");
        Result<List<StaProduct>> result = new Result<>();
        try {
            List<StaProduct> list = this.staProductService.selectList(staProduct);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/product/list,查询异常");
            logger.error("/product/list,查询异常");
        }
        return result;
    }
}
