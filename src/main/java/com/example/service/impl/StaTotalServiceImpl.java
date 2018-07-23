package com.example.service.impl;

import com.example.dao.StaTotalMapper;
import com.example.entity.StaTotal;
import com.example.service.StaTotalService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("totalService")
public class StaTotalServiceImpl implements StaTotalService {
    @Resource
    StaTotalMapper staTotalMapper;

    @Override
    public List<StaTotal> selectList(StaTotal record) {
        return staTotalMapper.selectList(record);
    }

    @Override
    public List<StaTotal> selectAllWithPage(StaTotal record) {
        return staTotalMapper.selectAllWithPage(record);
    }

    @Override
    public int selectPageCount(StaTotal staTotal) {
        return staTotalMapper.selectPageCount(staTotal);
    }
}
