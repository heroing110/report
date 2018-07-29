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
    public List<StaTotal> selectAreaWithPage(StaTotal record) {
        return staTotalMapper.selectAreaWithPage(record);
    }

    @Override
    public int selectPageCount(StaTotal staTotal) {
        return staTotalMapper.selectPageCount(staTotal);
    }

    @Override
    public int selectAreaPageCount(StaTotal staTotal) {
        return staTotalMapper.selectAreaPageCount(staTotal);
    }

    @Override
    public List<StaTotal> selectAreaContrastLine(StaTotal record) {
        return staTotalMapper.selectAreaContrastLine(record);
    }

    @Override
    public List<StaTotal> selectAreaQysWithPage(StaTotal record) {
        return staTotalMapper.selectAreaQysWithPage(record);
    }

    @Override
    public int selectAreaQysWithPageCount(StaTotal staTotal) {
        return staTotalMapper.selectAreaQysWithPageCount(staTotal);
    }

    @Override
    public List<StaTotal> selectAreaQysLine(StaTotal record) {
        return staTotalMapper.selectAreaQysLine(record);
    }

    @Override
    public List<StaTotal> selectLine(StaTotal record) {
        return staTotalMapper.selectLine(record);
    }
}
