package com.example.service.impl;

import com.example.dao.StaTotalMapper;
import com.example.entity.StaTotal;
import com.example.service.StaTotalService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.persistence.criteria.CriteriaBuilder;
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
    public List<StaTotal> selectHomeIndex(StaTotal record) {
        return staTotalMapper.selectHomeIndex(record);
    }

    @Override
    public List<StaTotal> selectCoreCityLine(StaTotal record) {
        return staTotalMapper.selectCoreCityLine(record);
    }

    @Override
    public List<StaTotal> selectHomeCountryRank(StaTotal record) {
        return staTotalMapper.selectHomeCountryRank(record);
    }

    @Override
    public List<StaTotal> selectHomeProvinceRank(StaTotal record) {
        return staTotalMapper.selectHomeProvinceRank(record);
    }

    @Override
    public List<StaTotal> selectHomeBusiness(StaTotal record) {
        if ("1".equals(record.getType())) {
            return staTotalMapper.selectHomeBusinessSale(record);
        } else if ("2".equals(record.getType())) {
            return staTotalMapper.selectHomeBusinessTrade(record);
        } else if ("3".equals(record.getType())) {
            return staTotalMapper.selectHomeBusinessService(record);
        } else if ("4".equals(record.getType())) {
            return staTotalMapper.selectHomeBusinessCity(record);
        }
        return null;
    }

    @Override
    public List<StaTotal> selectCityLine(StaTotal record) {
        return staTotalMapper.selectCityLine(record);
    }

    @Override
    public StaTotal selectTotalVolume(StaTotal record) {
        return staTotalMapper.selectTotalVolume(record);
    }

    @Override
    public StaTotal selectTotalCount(StaTotal record) {
        return staTotalMapper.selectTotalCount(record);
    }

    @Override
    public List<StaTotal> selectMonthVolume(StaTotal record) {
        return staTotalMapper.selectMonthVolume(record);
    }

    @Override
    public List<StaTotal> selectHomeIndexPeople(StaTotal record) {
        return staTotalMapper.selectHomeIndexPeople(record);
    }


    @Override
    public List<StaTotal> selectHomeIndexCompany(StaTotal record) {
        return staTotalMapper.selectHomeIndexCompany(record);
    }

    @Override
    public List<StaTotal> selectAreaWholeWithPage(StaTotal record) {
        return staTotalMapper.selectAreaWholeWithPage(record);
    }

    @Override
    public int selectAreaWholePageCount(StaTotal staTotal) {
        return staTotalMapper.selectAreaWholePageCount(staTotal);
    }

    @Override
    public List<StaTotal> selectLastCompanyAndPeople(StaTotal record) {
        return staTotalMapper.selectLastCompanyAndPeople(record);
    }


    @Override
    public List<StaTotal> selectLine(StaTotal record) {
        return staTotalMapper.selectLine(record);
    }
}
