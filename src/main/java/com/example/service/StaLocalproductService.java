package com.example.service;

import com.example.entity.StaLocalproduct;

import java.util.List;

public interface StaLocalproductService {
    List<StaLocalproduct> selectLine(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectDistinceCatName();

    List<StaLocalproduct> selectPlatformTotalVolumePercent(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectProvinceTotalVolumePercent(StaLocalproduct staLocalproduct);

    List<StaLocalproduct> selectWithPage(StaLocalproduct staLocalproduct);

    int selectWithPageCount(StaLocalproduct record);
}
