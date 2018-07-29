package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaShop;
import com.example.entity.StaShop;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
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
    public Result<PagingResult> listview(@RequestBody StaShop staShop) {
        logger.info("/shop/listview");
        Result<PagingResult> result = new Result<>();
        List<StaShop> list = null;
        if (staShop.getPageNo() == null || staShop.getPageSize() == null) {
            staShop.setPageNo(1);
            staShop.setPageSize(10);
        }
        try {
            list = this.staShopService.selectAllWithPage(staShop);
            PagingResult<List<StaShop>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staShop.getPageNo());
            pagingResult.setPageSize(staShop.getPageSize());
            int count = this.staShopService.selectPageCount(staShop);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/shop/listview,查询异常");
            logger.error("/shop/listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaShop>> list(@RequestBody StaShop staShop) {
        logger.info("/shop/list");
        Result<List<StaShop>> result = new Result<>();
        try {
            List<StaShop> list = this.staShopService.selectList(staShop);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/shop/list,查询异常");
            logger.error("/shop/list,查询异常");
        }
        return result;
    }

    /**
     * 区域店铺交易额分布,分页
     * @param staShop
     * @return
     */
    @RequestMapping(value = "/area_shop_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_shop_listview(@RequestBody StaShop staShop) {
        logger.info("/shop/area_shop_listview");
        Result<PagingResult> result = new Result<>();
        List<StaShop> list = null;
        if (staShop.getPageNo() == null || staShop.getPageSize() == null) {
            staShop.setPageNo(1);
            staShop.setPageSize(10);
        }
        try {
            list = this.staShopService.selectAreaShopWithPage(staShop);
            PagingResult<List<StaShop>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staShop.getPageNo());
            pagingResult.setPageSize(staShop.getPageSize());
            int count = this.staShopService.selectAreaShopWithPageCount(staShop);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/shop/area_shop_listview,查询异常");
            logger.error("/shop/area_shop_listview,查询异常");
        }

        return result;
    }

    /**
     * 区域店铺交易额分布,柱形图
     * @param staShop
     * @return
     */
    @RequestMapping(value = "/area_shop_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaShop>> area_shop_line(@RequestBody StaShop staShop) {
        logger.info("/shop/area_shop_line");
        Result<List<StaShop>> result = new Result<>();
        try {
            List<StaShop> list = this.staShopService.selectAreaShopLine(staShop);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/shop/area_shop_line,查询异常");
            logger.error("/shop/area_shop_line,查询异常");
        }
        return result;
    }

}
