package com.example.dao;

import com.example.entity.StaLocalproduct;

import java.util.List;

public interface StaLocalproductMapper {
    int insert(StaLocalproduct record);

    int insertSelective(StaLocalproduct record);

    List<StaLocalproduct> selectLine(StaLocalproduct staLocalproduct);

    StaLocalproduct selectTotalVolume(StaLocalproduct staLocalproduct);

    StaLocalproduct selectIncreaseTotal(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectPlatformTotalVolumePercent(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectProvinceTotalVolumePercent(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectWithPage(StaLocalproduct staLocalproduct);

    int selectWithPageCount(StaLocalproduct record);

    List<StaLocalproduct> selectDistinceCatName();
}