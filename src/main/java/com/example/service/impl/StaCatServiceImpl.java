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
        List<StaCat> staCatsList = null;
        if (record.getPlatform()==null) {
            staCatsList = staCatMapper.selectListByParam(record);
        }else{
            staCatsList = staCatMapper.selectListGroupByPlatform(record);
        }
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

    @Override
    public List<StaCat> selectCatWholeWithPage(StaCat record) {
        return staCatMapper.selectCatWholeWithPage(record);
    }

    @Override
    public int selectCatWholeWithPageCount(StaCat record) {
        return staCatMapper.selectCatWholeWithPageCount(record);
    }

    @Override
    public List<StaCat> selectCatDetailWithPage(StaCat record) {
        return staCatMapper.selectCatDetailWithPage(record);
    }

    @Override
    public int selectCatDetailWithPageCount(StaCat record) {
        return staCatMapper.selectCatDetailWithPageCount(record);
    }

    @Override
    public List<StaCat> selectCatAreaWithPage(StaCat record) {
        return staCatMapper.selectCatAreaWithPage(record);
    }

    @Override
    public int selectCatAreaWithPageCount(StaCat record) {
        return staCatMapper.selectCatAreaWithPageCount(record);
    }

    @Override
    public List<StaCat> selectTotalVolumeByPlatformList(StaCat record) {
        return staCatMapper.selectTotalVolumeByPlatformList(record);
    }

    @Override
    public List<StaCat> selectTotalVolumeList(StaCat record) {
        return staCatMapper.selectTotalVolumeList(record);
    }

    @Override
    public List<StaCat> selectCatAreaTotal(StaCat record) {
        return staCatMapper.selectCatAreaTotal(record);
    }

    @Override
    public List<StaCat> selectCatVolumeTotal(StaCat record) {
        return staCatMapper.selectCatVolumeTotal(record);
    }

    @Override
    public List<StaCat> selectCatWholeTotal(StaCat record) {
        return staCatMapper.selectCatWholeTotal(record);
    }

}
