package com.example.controller;

import com.example.entity.StaProduct;
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

    /**
     * 电商总体交易额走势，网络零售交易走势-分页
     * @param staTotal
     * @return
     */
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

    /**
     * 各地核心电商指标速览,各地核心指标对比排名分页
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_listview(@RequestBody StaTotal staTotal) {
        logger.info("/total/area_listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;
        if (staTotal.getPageNo() == null || staTotal.getPageSize() == null) {
            staTotal.setPageNo(1);
            staTotal.setPageSize(10);
        }
        try {
            list = this.staTotalService.selectAreaWithPage(staTotal);
            PagingResult<List<StaTotal>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staTotal.getPageNo());
            pagingResult.setPageSize(staTotal.getPageSize());
            int count = this.staTotalService.selectAreaPageCount(staTotal);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/area_listview,查询异常");
            logger.error("/total/area_listview,查询异常");
        }

        return result;
    }

    /**
     * 区域电商企业数、从业人数统计，分页
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_qys_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_qys_listview(@RequestBody StaTotal staTotal) {
        logger.info("/total/area_qys_listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;
        if (staTotal.getPageNo() == null || staTotal.getPageSize() == null) {
            staTotal.setPageNo(1);
            staTotal.setPageSize(10);
        }
        try {
            list = this.staTotalService.selectAreaQysWithPage(staTotal);
            PagingResult<List<StaTotal>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staTotal.getPageNo());
            pagingResult.setPageSize(staTotal.getPageSize());
            int count = this.staTotalService.selectAreaQysWithPageCount(staTotal);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/area_qys_listview,查询异常");
            logger.error("/total/area_qys_listview,查询异常");
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

    /**
     * 首页-电子商务市场结构
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_buisness", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeBusiness(@RequestBody StaTotal staTotal) {
        logger.info("/total/home_buisness");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> list = this.staTotalService.selectHomeBusiness(staTotal);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/home_buisness,查询异常");
            logger.error("/total/home_buisness,查询异常");
        }
        return result;
    }

    /**
     * 电商总体交易额走势,网络零售交易走势,各地核心电商指标速览-折线图
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> line(@RequestBody StaTotal staTotal) {
        logger.info("/total/line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectLine(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/line,查询异常");
            logger.error("/total/line,查询异常");
        }
        return result;
    }

    /**
     * 区域电商企业数、从业人数统计，折线图
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_qys_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> area_qys_line(@RequestBody StaTotal staTotal) {
        logger.info("/total/area_qys_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectAreaQysLine(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/area_qys_line,查询异常");
            logger.error("/total/area_qys_line,查询异常");
        }
        return result;
    }

    /**
     * 各地核心指标对比排名-柱形图
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_contrast_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> area_contrast_line(@RequestBody StaTotal staTotal) {
        logger.info("/total/area_contrast_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectAreaContrastLine(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/area_contrast_line,查询异常");
            logger.error("/total/area_contrast_line,查询异常");
        }
        return result;
    }

    /**
     * 首页排名
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_index", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeIndex(@RequestBody StaTotal staTotal) {
        logger.info("/total/home_index");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectHomeIndex(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/home_index,查询异常");
            logger.error("/total/home_index,查询异常");
        }
        return result;
    }

    /**
     * 首页-全国排名
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_country_rank", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeCountryRank(@RequestBody StaTotal staTotal) {
        logger.info("/total/home_country_rank");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectHomeCountryRank(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/home_country_rank,查询异常");
            logger.error("/total/home_country_rank,查询异常");
        }
        return result;
    }

    /**
     * 首页-全省排名
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_province_rank", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeProvinceRank(@RequestBody StaTotal staTotal) {
        logger.info("/total/home_province_rank");
        Result<List<StaTotal>> result = new Result<>();
        try {
            List<StaTotal> staTotalList = this.staTotalService.selectHomeProvinceRank(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/home_province_rank,查询异常");
            logger.error("/total/home_province_rank,查询异常");
        }
        return result;
    }
}
