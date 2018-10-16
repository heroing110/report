package com.example.controller;

import com.example.entity.*;
import com.example.entity.StaTotal;
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
import java.util.*;

/**
 * Created by heying on 2018/3/30.
 * 汇总
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/total")
public class StaToalController extends CommonController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaTotalService staTotalService;

    /**
     * 电商总体交易额走势，网络零售交易走势-分页
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;

        try {
            autoSetParamByPagerParallelWay(staTotal, request);
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
     * 各地核心电商指标速览分页
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_listview(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/area_listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;

        try {
            autoSetParamByPager(staTotal, request);
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
     * 各地核心指标对比排名分页
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_whole_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_whole_listview(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/area_whole_listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;

        try {
            autoSetParamByPager(staTotal, request);
            list = this.staTotalService.selectAreaWholeWithPage(staTotal);
            PagingResult<List<StaTotal>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staTotal.getPageNo());
            pagingResult.setPageSize(staTotal.getPageSize());
            int count = this.staTotalService.selectAreaWholePageCount(staTotal);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/area_whole_listview,查询异常");
            logger.error("/total/area_whole_listview,查询异常");
        }

        return result;
    }

    /**
     * 区域电商企业数、从业人数统计，分页
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_qys_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_qys_listview(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/area_qys_listview");
        Result<PagingResult> result = new Result<>();
        List<StaTotal> list = null;

        try {
            autoSetParamByPager(staTotal, request);
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
    public Result<List<StaTotal>> list(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/list");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParam(staTotal, request);
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
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_buisness", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeBusiness(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/home_buisness");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParamParallelWay(staTotal, request);
            List<StaTotal> list = this.staTotalService.selectHomeBusiness(staTotal);
            List<StaTotal> targetList = new ArrayList<>();
            for (StaTotal total : list) {
                if (total.getTotal()!=null && !new Double(0).equals(total.getTotal())) {
                    targetList.add(total);
                }
            }
            result.setData(targetList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/home_buisness,查询异常");
            logger.error("/total/home_buisness,查询异常");
        }
        return result;
    }

    /**
     * 电商总体交易额走势,网络零售交易走势
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> line(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParamParallelWay(staTotal, request);
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
     * 各地核心指标对比排名-折线图
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/city_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectCityLine(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/city_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParam(staTotal, request);
            List<StaTotal> staTotalList = this.staTotalService.selectCityLine(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/city_line,查询异常");
            logger.error("/total/city_line,查询异常");
        }
        return result;
    }

    /**
     * 各地核心电商指标速览-折线图
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/core_city_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectCoreCityLine(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/core_city_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParam(staTotal, request);
            List<StaTotal> staTotalList = this.staTotalService.selectCoreCityLine(staTotal);
            result.setData(staTotalList);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/core_city_line,查询异常");
            logger.error("/total/core_city_line,查询异常");
        }
        return result;
    }


    /**
     * 区域电商企业数、从业人数统计，折线图
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_qys_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> area_qys_line(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/area_qys_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParam(staTotal, request);
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
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/area_contrast_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> area_contrast_line(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/area_contrast_line");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParam(staTotal, request);
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
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_index", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeIndex(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/home_index");
        Result<List<StaTotal>> result = new Result<>();
        try {
            autoSetParamParallelWay(staTotal, request);
            List<StaTotal> staTotalList = this.staTotalService.selectHomeIndex(staTotal);

            for (StaTotal total : staTotalList) {
                if ("电商整体交易额".equals(total.getIndexType())) {
                    total.setId(1);
                } else if ("B2B交易额".equals(total.getIndexType())) {
                    total.setId(2);
                } else if ("网络零售交易额".equals(total.getIndexType())) {
                    total.setId(3);
                } else if ("网络零售卖出金额".equals(total.getIndexType())) {
                    total.setId(4);
                } else if ("农村电商交易额".equals(total.getIndexType())) {
                    total.setId(5);
                } else if ("跨境电商交易额".equals(total.getIndexType())) {
                    total.setId(6);
                }else {
                    total.setId(99);
                }

                if("电子商务企业数".equals(total.getIndexType())){
                    List<StaTotal> staTotalList1 = this.staTotalService.selectHomeIndexCompany(staTotal);
                    if (staTotalList1!=null && staTotalList1.size()>0) {
                        StaTotal staTotal1 = staTotalList1.get(0);
                        if (staTotal!=null && staTotal1.getTotalVolume()!=null) {
                            total.setTotalVolume(staTotal1.getTotalVolume());
                        }
                    }
                }

                if("电子商务从业人数".equals(total.getIndexType())){
                    List<StaTotal> staTotalList1 = this.staTotalService.selectHomeIndexPeople(staTotal);
                    if (staTotalList1!=null && staTotalList1.size()>0) {
                        StaTotal staTotal1 = staTotalList1.get(0);
                        if (staTotal!=null && staTotal1.getTotalVolume()!=null) {
                            total.setTotalVolume(staTotal1.getTotalVolume());
                        }
                    }
                }
            }

            Collections.sort(staTotalList, new Comparator<StaTotal>(){
                /*
                 * int compare(Person p1, Person p2) 返回一个基本类型的整型，
                 * 返回负数表示：p1 小于p2，
                 * 返回0 表示：p1和p2相等，
                 * 返回正数表示：p1大于p2
                 */
                @Override
                public int compare(StaTotal p1, StaTotal p2) {
                    //升序排列
                    if(p1.getId() > p2.getId()){
                        return 1;
                    }
                    if(p1.getId() .equals( p2.getId())){
                        return 0;
                    }
                    return -1;
                }
            });

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
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_country_rank", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeCountryRank(@RequestBody StaTotal staTotal, HttpServletRequest request) {
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
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/home_province_rank", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaTotal>> selectHomeProvinceRank(@RequestBody StaTotal staTotal, HttpServletRequest request) {
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

    /**
     * 电商总体交易额走势-参数
     *
     * @param staTotal
     * @return
     */
    @RequestMapping(value = "/total_line_param", method = RequestMethod.POST)
    @ResponseBody
    public Result<Map<String, Object>> selectBusinessLineParam(@RequestBody StaTotal staTotal, HttpServletRequest request) {
        logger.info("/total/total_line_param");
        Result<Map<String, Object>> result = new Result<>();
        try {
            autoSetParamParallelWay(staTotal, request);
            Map<String, Object> map = new HashMap<>();
            StaTotal staCatTotal = this.staTotalService.selectTotalVolume(staTotal);
            StaTotal staCatCount = this.staTotalService.selectTotalCount(staTotal);
            List<StaTotal> staCats = this.staTotalService.selectMonthVolume(staTotal);

            map.put("totalVolume", staCatTotal == null ? 0 : staCatTotal.getTotalVolume());
            map.put("totalCount", staCatCount == null ? 0 : staCatCount.getTotalCount());

            Double monthVolume = new Double(0);
            Double lastMonthVolume = new Double(0);
            if (staCats != null && staCats.size() > 0) {
                StaTotal monthCat = staCats.get(0);
                if (monthCat!=null && monthCat.getTotal() != null) {
                    monthVolume = monthCat.getTotal();
                }
            }

            if (staCats != null && staCats.size() > 1) {
                StaTotal lastMonthCat = staCats.get(1);
                if (lastMonthCat!=null && lastMonthCat.getTotal() != null) {
                    lastMonthVolume = lastMonthCat.getTotal();
                }
            }

            map.put("increaseVolume", monthVolume - lastMonthVolume);
            map.put("increaseVolumePercent", lastMonthVolume == 0 ? 0 : (monthVolume - lastMonthVolume) * 100 / lastMonthVolume);

            Double monthCount = new Double(0);
            Double lastMonthCount = new Double(0);
            if (staCats != null && staCats.size() > 2) {
                StaTotal monthCatCount = staCats.get(2);
                if (monthCatCount != null && monthCatCount.getTotal() != null) {
                    monthCount = monthCatCount.getTotal();
                }
            }

            if (staCats != null && staCats.size() > 3) {
                StaTotal lastMonthCatCount = staCats.get(3);
                if (lastMonthCatCount != null && lastMonthCatCount.getTotal() != null) {
                    lastMonthCount = lastMonthCatCount.getTotal();
                }
            }

            map.put("increaseCount", monthCount - lastMonthCount);
            map.put("increaseCountPercent", lastMonthCount == 0 ? 0 : (monthCount - lastMonthCount) * 100 / lastMonthCount);
            result.setData(map);
            result.setCode(Constants.RESULT_TYPE_SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/total/total_line_param,查询异常");
            logger.error("/total/total_line_param,查询异常");
        }
        return result;
    }
}
