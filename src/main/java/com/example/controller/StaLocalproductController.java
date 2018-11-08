package com.example.controller;

import com.alibaba.druid.util.StringUtils;
import com.example.entity.StaLocalproduct;
import com.example.entity.StaProduct;
import com.example.entity.User;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaLocalproductService;
import com.example.service.StaProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by heying on 2018/3/30.
 * 产品
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/local_product")
public class StaLocalproductController extends CommonController{
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaLocalproductService staLocalproductService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaLocalproduct staLocalproduct, HttpServletRequest request) {
        logger.info("/local_product/listview");
        Result<PagingResult> result = new Result<>();
        List<StaLocalproduct> list = null;

        try {
            setCatNames(staLocalproduct, request);
            setParamByPager(staLocalproduct,request);
            if (staLocalproduct.getCatNames()!=null) {
                list = this.staLocalproductService.selectWithPage(staLocalproduct);
            }
            PagingResult<List<StaLocalproduct>> pagingResult = new PagingResult<List<StaLocalproduct>>(list);
            pagingResult.setPageIndex(staLocalproduct.getPageNo());
            pagingResult.setPageSize(staLocalproduct.getPageSize());
            int count = this.staLocalproductService.selectWithPageCount(staLocalproduct);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/listview,查询异常");
            logger.error("/local_product/listview,查询异常");
        }

        return result;
    }


    /**
     * 重点品类监测-线上渠道销售额占比
     * @param staLocalproduct
     * @return
     */
    @RequestMapping(value = "/platform_pie", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaLocalproduct>> platformPie(@RequestBody StaLocalproduct staLocalproduct,HttpServletRequest request) {
        logger.info("/local_product/platform_pie");
        Result<List<StaLocalproduct>> result = new Result<>();
        List<StaLocalproduct> productList = null;
        try {
            setCatNames(staLocalproduct, request);
            if (staLocalproduct.getCatNames()!=null) {
                productList = this.staLocalproductService.selectPlatformTotalVolumePercent(staLocalproduct);
            }
            result.setData(productList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/pie,查询异常");
            logger.error("/local_product/pie,查询异常");
        }
        return result;
    }

    /**
     * 重点品类监测-区域销售额占比
     * @param staLocalproduct
     * @return
     */
    @RequestMapping(value = "/province_pie", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaLocalproduct>> provincePie(@RequestBody StaLocalproduct staLocalproduct,HttpServletRequest request) {
        logger.info("/local_product/province_pie");
        Result<List<StaLocalproduct>> result = new Result<>();
        List<StaLocalproduct> productList = null;
        try {
            setCatNames(staLocalproduct, request);
            if (staLocalproduct.getCatNames()!=null) {
                productList = this.staLocalproductService.selectProvinceTotalVolumePercent(staLocalproduct);
            }
            result.setData(productList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/province_pie,查询异常");
            logger.error("/local_product/province_pie,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaLocalproduct>> line(@RequestBody StaLocalproduct staLocalproduct,HttpServletRequest request) {
        logger.info("/local_product/line");
        Result<List<StaLocalproduct>> result = new Result<>();
        List<StaLocalproduct> productList = null;
        try {
            setCatNames(staLocalproduct, request);
            if (staLocalproduct.getCatNames()!=null) {
                productList = this.staLocalproductService.selectLine(staLocalproduct);
            }
            result.setData(productList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/line,查询异常");
            logger.error("/local_product/line,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/line_param", method = RequestMethod.POST)
    @ResponseBody
    public Result<StaLocalproduct> line_param(@RequestBody StaLocalproduct staLocalproduct,HttpServletRequest request) {
        logger.info("/local_product/line_param");
        Result<StaLocalproduct> result = new Result<>();
        try {
            setCatNames(staLocalproduct, request);
            if (staLocalproduct.getCatNames()!=null) {
                StaLocalproduct totalVolume = this.staLocalproductService.selectTotalVolume(staLocalproduct);
                StaLocalproduct increaseTotal = this.staLocalproductService.selectIncreaseTotal(staLocalproduct);
                StaLocalproduct localproduct = new StaLocalproduct();
                if (totalVolume!=null) {
                    localproduct.setTotalVolume(totalVolume.getTotalVolume());
                }
                if (increaseTotal!=null) {
                    localproduct.setIncreaseTotal(increaseTotal.getIncreaseTotal());
                }
                result.setData(localproduct);
            }

        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/line_param,查询异常");
            logger.error("/local_product/line_param,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/get_catname", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<Map<String,String>>> get_catname(HttpServletRequest request) {
        logger.info("/local_product/get_catname");
        Result<List<Map<String,String>>> result = new Result<>();
        List<Map<String,String>> productList = new ArrayList<>();
        try {
            User user = (User) request.getSession().getAttribute("user");
            if (user!=null) {
                String catName = user.getCatName();
                if (!StringUtils.isEmpty(catName)) {
                    String[] catNames = catName.split(",");
                    if (catNames!=null && catNames.length>0) {
                        for (String name : catNames) {
                            Map<String,String> map = new HashMap<>();
                            map.put("label",name);
                            map.put("value",name);
                            productList.add(map);
                        }
                    }
                }
            }

            result.setData(productList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/local_product/get_catname,查询异常");
            logger.error("/local_product/get_catname,查询异常");
        }
        return result;
    }

    private void setCatNames(@RequestBody StaLocalproduct staLocalproduct, HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");
        if (user!=null) {
            String catName = user.getCatName();
            if (!StringUtils.isEmpty(catName)) {
                String[] catNames = catName.split(",");
                staLocalproduct.setCatNames(catNames);
            }
        }
    }
}
