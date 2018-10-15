package com.example.dao;

import com.example.entity.StaCat;

import java.util.List;

public interface StaCatMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaCat record);

    int insertSelective(StaCat record);

    StaCat selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaCat record);

    int updateByPrimaryKeyWithBLOBs(StaCat record);

    int updateByPrimaryKey(StaCat record);

    List<StaCat> selectAllWithPage(StaCat record);

    List<StaCat> selectList(StaCat record);

    List<StaCat> selectHomeTop30(StaCat record);

    List<StaCat> selectWholeList(StaCat record);

    List<StaCat> selectListByParam(StaCat record);

    List<StaCat> selectCatNameListGroupByCat(StaCat record);

    List<StaCat> selectAreaCatLine(StaCat record);

    List<StaCat> selectAreaCatWithPage(StaCat record);

    List<StaCat> selectBusinessLine(StaCat record);

    int selectAreaCatWithPageCount(StaCat record);

    List<StaCat> selectCatWholeWithPage(StaCat record);

    int selectCatWholeWithPageCount(StaCat record);

    List<StaCat> selectCatDetailWithPage(StaCat record);

    int selectCatDetailWithPageCount(StaCat record);

    List<StaCat> selectCatAreaWithPage(StaCat record);

    List<StaCat> selectTotalVolumeByPlatformList(StaCat record);

    List<StaCat> selectTotalVolumeList(StaCat record);

    List<StaCat> selectCatAreaTotal(StaCat record);

    List<StaCat> selectCatVolumeTotal(StaCat record);

    List<StaCat> selectCatWholeTotal(StaCat record);

    int selectCatAreaWithPageCount(StaCat record);

    int selectPageCount(StaCat record);

    StaCat selectSalesAndCountByProvince(StaCat record);

    List<StaCat> selectListGroupByPlatform(StaCat record);
}