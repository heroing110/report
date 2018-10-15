package com.example.service.impl;

import com.example.dao.StaLocalproductMapper;
import com.example.entity.StaLocalproduct;
import com.example.service.StaLocalproductService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("staLocalproductService")
public class StaLocalproductServiceImpl implements StaLocalproductService {
    @Resource
    StaLocalproductMapper staLocalproductMapper;

    @Override
    public List<StaLocalproduct> selectLine(StaLocalproduct staLocalproduct) {
        return staLocalproductMapper.selectLine(staLocalproduct);
    }

    @Override
    public List<StaLocalproduct> selectDistinceCatName() {
        return staLocalproductMapper.selectDistinceCatName();
    }

    @Override
    public List<StaLocalproduct> selectPlatformTotalVolumePercent(StaLocalproduct staLocalproduct) {
        return staLocalproductMapper.selectPlatformTotalVolumePercent(staLocalproduct);
    }

    @Override
    public List<StaLocalproduct> selectProvinceTotalVolumePercent(StaLocalproduct staLocalproduct) {
        return staLocalproductMapper.selectProvinceTotalVolumePercent(staLocalproduct);
    }

    @Override
    public List<StaLocalproduct> selectWithPage(StaLocalproduct staLocalproduct) {
        return staLocalproductMapper.selectWithPage(staLocalproduct);
    }

    @Override
    public int selectWithPageCount(StaLocalproduct record) {
        return staLocalproductMapper.selectWithPageCount(record);
    }
}
