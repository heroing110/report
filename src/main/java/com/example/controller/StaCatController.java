package com.example.controller;

import com.example.entity.StaCat;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaCatService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 品类
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/cat")
public class StaCatController extends CommonController{
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaCatService staCatService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaCat staCat, HttpServletRequest request) {
        logger.info("/cat/listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;

        try {
            autoSetParamByPager(staCat,request);
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


    /**
     * 品类分析-整体分析，分页
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/cat_whole_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> cat_whole_listview(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/cat_whole_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        DecimalFormat   decimalFormat  =   new  DecimalFormat("##0.00");
        try {
            autoSetParamByPagerParallelWay(staCat,request);
            list = this.staCatService.selectCatWholeWithPage(staCat);
            List<StaCat> totalList = this.staCatService.selectCatWholeTotal(staCat);
            for (StaCat cat : list) {
                for (StaCat staCat1 : totalList) {
                    if (cat.getPlatform().equals(staCat1.getPlatform())) {
                        cat.setSalesPercent(decimalFormat.format(cat.getTotalVolume()*100/staCat1.getTotalVolume()));
                        cat.setCountPercent(decimalFormat.format(cat.getTotalCount()*100/staCat1.getTotalCount()));
                    }
                }
            }
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectCatWholeWithPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/cat_whole_listview,查询异常");
            logger.error("/cat/cat_whole_listview,查询异常");
        }

        return result;
    }

    /**
     * 各地品类数据分析，分页
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/area_cat_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_cat_listview(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/area_cat_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        try {
            autoSetParamByPager(staCat,request);
            list = this.staCatService.selectAreaCatWithPage(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectAreaCatWithPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/area_cat_listview,查询异常");
            logger.error("/cat/area_cat_listview,查询异常");
        }

        return result;
    }

    /**
     * 品类分析-品类细分（细分品类探查）分页
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/cat_detail_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> cat_detail_listview(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/cat_detail_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        DecimalFormat   decimalFormat  =   new  DecimalFormat("##0.00");
        try {
            setParamByPager(staCat,request);
            list = this.staCatService.selectCatDetailWithPage(staCat);

            List<StaCat> platformList = this.staCatService.selectTotalVolumeByPlatformList(staCat);
            List<StaCat> totalVolumeList = this.staCatService.selectTotalVolumeList(staCat);
            for (StaCat cat : list) {
                if ("整体".equals(cat.getPlatform())) {
                    if (totalVolumeList!=null && totalVolumeList.size()>0) {
                        StaCat staCat1 = totalVolumeList.get(0);
                        Float totalVolume = staCat1.getTotalVolume();
                        cat.setSalesPercent(decimalFormat.format(cat.getTotalVolume()*100/totalVolume));
                    }
                }else{
                    for (StaCat staCat1 : platformList) {
                        if (cat.getPlatform().equals(staCat1.getPlatform())) {
                            cat.setSalesPercent(decimalFormat.format(cat.getTotalVolume()*100/staCat1.getTotalVolume()));
                        }
                    }
                }
            }
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectCatDetailWithPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/cat_detail_listview,查询异常");
            logger.error("/cat/cat_detail_listview,查询异常");
        }

        return result;
    }

    /**
     * 各品类区域销售占比分析,分页
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/cat_area_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> cat_area_listview(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/cat_area_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        DecimalFormat   decimalFormat  =   new  DecimalFormat("##0.00");
        try {
            autoSetParamByPager(staCat,request);
            list = this.staCatService.selectCatAreaWithPage(staCat);
//            List<StaCat> totalList = this.staCatService.selectCatAreaTotal(staCat);
//            for (StaCat cat : list) {
//                for (StaCat staCat1 : totalList) {
//                    if (staCat1.getPlatform().equals(cat.getPlatform()) && staCat1.getsCat1Name().equals(cat.getsCat1Name())) {
//                        cat.setSalesPercent(decimalFormat.format(cat.getTotalVolume()*100/staCat1.getTotalVolume()));
//                        cat.setCountPercent(decimalFormat.format(cat.getTotalCount()*100/staCat1.getTotalCount()));
//                    }
//                }
//            }
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectCatAreaWithPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/cat_area_listview,查询异常");
            logger.error("/cat/cat_area_listview,查询异常");
        }

        return result;
    }

    /**
     * 各地品类数据分析，柱形图
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/area_cat_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> area_cat_line(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/area_cat_line");
        Result<List<StaCat>> result = new Result<>();
        try {
            autoSetParam(staCat,request);
            List<StaCat> list = this.staCatService.selectAreaCatLine(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/area_cat_line,查询异常");
            logger.error("/cat/area_cat_line,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> list(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/list");
        Result<List<StaCat>> result = new Result<>();
        try {
            autoSetParam(staCat,request);
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

    /**
     * 首页-网络零售热销品类TOP30
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/home_top30", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> home_top30(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/home_top30");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;

        try {
            autoSetParamByPagerParallelWay(staCat,request);
            list = this.staCatService.selectHomeTop30(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            pagingResult.setTotal(30);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/home_top30,查询异常");
            logger.error("/cat/home_top30,查询异常");
        }
        return result;
    }

    /**
     * 一级品类销售额占比
     * @param staCat
     * @param request
     * @return
     */
    @RequestMapping(value = "/whole_list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> whole_list(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/whole_list");
        Result<List<StaCat>> result = new Result<>();
        try {
            autoSetParamParallelWay(staCat,request);
            List<StaCat> list = this.staCatService.selectWholeList(staCat);
            List<StaCat> targetList = new ArrayList<>();
            for (StaCat cat : list) {
                if (cat.getTotalVolume()!=null && !new Float(0).equals(cat.getTotalVolume())) {
                    targetList.add(cat);
                }
            }
            result.setData(targetList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/whole_list,查询异常");
            logger.error("/cat/whole_list,查询异常");
        }
        return result;
    }


    /**
     * 首页-主要电商平台交易额走势
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/home_business_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> selectBusinessLine(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/home_business_line");
        Result<List<StaCat>> result = new Result<>();
        try {
            autoSetParam(staCat,request);
            List<StaCat> list = this.staCatService.selectBusinessLine(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/home_business_line,查询异常");
            logger.error("/cat/home_business_line,查询异常");
        }
        return result;
    }


    @RequestMapping(value = "/sales_count", method = RequestMethod.POST)
    @ResponseBody
    public Result<StaCat> sales_count(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/sales_count");
        Result<StaCat> result = new Result<>();
        try {
            autoSetParam(staCat,request);
            StaCat cat = this.staCatService.selectSalesAndCountByProvince(staCat);
            result.setData(cat);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/sales_count,查询异常");
            logger.error("/cat/sales_count,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/tree", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> tree(@RequestBody StaCat staCat,HttpServletRequest request) {
        logger.info("/cat/tree");
        Result<List<StaCat>> result = new Result<>();
        try {
            autoSetParamParallelWay(staCat,request);
            List<StaCat> list = this.staCatService.selectCatTreeMap(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/tree,查询异常");
            logger.error("/cat/tree,查询异常");
        }
        return result;
    }
}
