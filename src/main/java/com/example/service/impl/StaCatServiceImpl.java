package com.example.service.impl;

import com.example.dao.StaCatMapper;
import com.example.dao.StaTotalMapper;
import com.example.entity.StaCat;
import com.example.entity.StaTotal;
import com.example.service.StaCatService;
import com.example.service.StaTotalService;
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
}
