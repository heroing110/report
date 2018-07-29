package com.example.dao;

import com.example.entity.StaProduct;

import java.util.List;

public interface StaProductMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaProduct record);

    int insertSelective(StaProduct record);

    StaProduct selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaProduct record);

    int updateByPrimaryKeyWithBLOBs(StaProduct record);

    int updateByPrimaryKey(StaProduct record);

    List<StaProduct> selectList(StaProduct record);

    List<StaProduct> selectPie(StaProduct record);

    List<StaProduct> selectLine(StaProduct record);

    List<StaProduct> selectAllWithPage(StaProduct record);

    int selectPageCount(StaProduct record);
}