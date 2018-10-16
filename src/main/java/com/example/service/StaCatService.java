package com.example.service;

import com.example.entity.StaCat;

import java.util.List;

public interface StaCatService {

    List<StaCat> selectAllWithPage(StaCat staCat);

    List<StaCat> selectList(StaCat staCat);

    int selectPageCount(StaCat record);

    List<StaCat> selectCatTreeMap(StaCat record);

    public List<StaCat> selectWholeList(StaCat staCat);

    StaCat selectSalesAndCountByProvince(StaCat record);

    List<StaCat> selectAreaCatWithPage(StaCat record);

    int selectAreaCatWithPageCount(StaCat record);

    List<StaCat> selectAreaCatLine(StaCat record);

    List<StaCat> selectHomeTop30(StaCat record);

    List<StaCat> selectBusinessLine(StaCat record);

    List<StaCat> selectCatWholeWithPage(StaCat record);

    int selectCatWholeWithPageCount(StaCat record);

    List<StaCat> selectCatDetailWithPage(StaCat record);

    int selectCatDetailWithPageCount(StaCat record);

    List<StaCat> selectCatAreaWithPage(StaCat record);

    int selectCatAreaWithPageCount(StaCat record);

    List<StaCat> selectTotalVolumeByPlatformList(StaCat record);

    List<StaCat> selectTotalVolumeList(StaCat record);

    List<StaCat> selectCatAreaTotal(StaCat record);

    List<StaCat> selectCatVolumeTotal(StaCat record);

    List<StaCat> selectCatWholeTotal(StaCat record);

}
