package com.example.service.impl;

import com.example.dao.StaCatMapper;
import com.example.entity.StaCat;
import com.example.service.StaCatService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("catService")
public class StaCatServiceImpl implements StaCatService {
    @Resource
    StaCatMapper staCatMapper;

    @Override
    public List<StaCat> selectAllWithPage(StaCat record) {
        return staCatMapper.selectAllWithPage(record);
    }

    @Override
    public List<StaCat> selectList(StaCat staCat) {
        return staCatMapper.selectList(staCat);
    }

    @Override
    public int selectPageCount(StaCat record) {
        return staCatMapper.selectPageCount(record);
    }

    @Override
    public List<StaCat> selectCatTreeMap(StaCat record) {
        List<StaCat> staCatsList = staCatMapper.selectListByParam(record);
        return staCatsList;
    }

    @Override
    public List<StaCat> selectWholeList(StaCat staCat) {
        return staCatMapper.selectWholeList(staCat);
    }

    @Override
    public StaCat selectSalesAndCountByProvince(StaCat record) {
        return staCatMapper.selectSalesAndCountByProvince(record);
    }

    @Override
    public List<StaCat> selectAreaCatWithPage(StaCat record) {
        return staCatMapper.selectAreaCatWithPage(record);
    }

    @Override
    public int selectAreaCatWithPageCount(StaCat record) {
        return staCatMapper.selectAreaCatWithPageCount(record);
    }

    @Override
    public List<StaCat> selectAreaCatLine(StaCat record) {
        return staCatMapper.selectAreaCatLine(record);
    }

    @Override
    public List<StaCat> selectHomeTop30(StaCat record) {
        return staCatMapper.selectHomeTop30(record);
    }

    @Override
    public List<StaCat> selectBusinessLine(StaCat record) {
        return staCatMapper.selectBusinessLine(record);
    }

}
