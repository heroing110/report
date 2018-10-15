package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaCatShop;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaCatService;
import com.example.service.StaCatShopService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 品类店铺
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/catShop")
public class StaCatShopController extends CommonController{
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaCatShopService staCatShopShopService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaCatShop staCatShop, HttpServletRequest request) {
        logger.info("/catShop/listview");
        Result<PagingResult> result = new Result<>();
        List<StaCatShop> list = null;

        try {
            autoSetParamByPager(staCatShop,request);
            list = this.staCatShopShopService.selectAllWithPage(staCatShop);
            PagingResult<List<StaCatShop>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCatShop.getPageNo());
            pagingResult.setPageSize(staCatShop.getPageSize());
            int count = this.staCatShopShopService.selectPageCount(staCatShop);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/catShop/listview,查询异常");
            logger.error("/catShop/listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/top_volume_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> topVolumeListview(@RequestBody StaCatShop staCatShop, HttpServletRequest request) {
        logger.info("/catShop/top_volume_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCatShop> list = null;

        try {
            autoSetParamByPager(staCatShop,request);
            list = this.staCatShopShopService.selectTop10VolumeWithPage(staCatShop);
            PagingResult<List<StaCatShop>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCatShop.getPageNo());
            pagingResult.setPageSize(staCatShop.getPageSize());
            int count = this.staCatShopShopService.selectTop10VolumeWithPageCount(staCatShop);
            pagingResult.setTotal(count);
            result.setData(pagingResult);

            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/catShop/top_volume_listview,查询异常");
            logger.error("/catShop/top_volume_listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/top_count_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> topCountListview(@RequestBody StaCatShop staCatShop, HttpServletRequest request) {
        logger.info("/catShop/top_count_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCatShop> list = null;

        try {
            autoSetProvinceOrCityParamByPager(staCatShop,request);
            list = this.staCatShopShopService.selectTop10CountWithPage(staCatShop);
            PagingResult<List<StaCatShop>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCatShop.getPageNo());
            pagingResult.setPageSize(staCatShop.getPageSize());
            int count = this.staCatShopShopService.selectTop10CountWithPageCount(staCatShop);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/catShop/top_volume_listview,查询异常");
            logger.error("/catShop/top_volume_listview,查询异常");
        }

        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCatShop>> list(@RequestBody StaCatShop staCatShop,HttpServletRequest request) {
        logger.info("/catShop/list");
        Result<List<StaCatShop>> result = new Result<>();
        try {
            autoSetParam(staCatShop,request);
            List<StaCatShop> list = this.staCatShopShopService.selectList(staCatShop);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/catShop/list,查询异常");
            logger.error("/catShop/list,查询异常");
        }
        return result;
    }
}
