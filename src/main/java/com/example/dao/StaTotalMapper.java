package com.example.dao;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;

import java.util.List;

public interface StaTotalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaTotal record);

    int insertSelective(StaTotal record);

    StaTotal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaTotal record);

    int updateByPrimaryKey(StaTotal record);

    List<StaTotal> selectList(StaTotal record);

    List<StaTotal> selectLine(StaTotal record);

    List<StaTotal> selectCityLine(StaTotal record);

    List<StaTotal> selectCoreCityLine(StaTotal record);

    List<StaTotal> selectAreaQysLine(StaTotal record);

    List<StaTotal> selectHomeIndex(StaTotal record);

    List<StaTotal> selectHomeIndexPeople(StaTotal record);

    List<StaTotal> selectHomeIndexCompany(StaTotal record);

    List<StaTotal> selectAllWithPage(StaTotal record);

    List<StaTotal> selectAreaWithPage(StaTotal record);

    List<StaTotal> selectAreaWholeWithPage(StaTotal record);

    List<StaTotal> selectAreaContrastLine(StaTotal record);

    int selectPageCount(StaTotal staTotal);

    int selectAreaPageCount(StaTotal staTotal);

    int selectAreaWholePageCount(StaTotal staTotal);

    List<StaTotal> selectAreaQysWithPage(StaTotal record);

    List<StaTotal> selectHomeCountryRank(StaTotal record);

    List<StaTotal> selectHomeProvinceRank(StaTotal record);

    List<StaTotal> selectHomeBusinessSale(StaTotal record);

    List<StaTotal> selectHomeBusinessTrade(StaTotal record);

    List<StaTotal> selectHomeBusinessService(StaTotal record);

    List<StaTotal> selectHomeBusinessCity(StaTotal record);

    int selectAreaQysWithPageCount(StaTotal staTotal);

    StaTotal selectTotalVolume(StaTotal record);

    StaTotal selectTotalCount(StaTotal record);

    List<StaTotal> selectMonthVolume(StaTotal record);
}