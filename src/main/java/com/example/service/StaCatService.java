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
}
