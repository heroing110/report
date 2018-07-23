package com.example.dao;

import com.example.entity.StaTotal;

import java.util.List;

public interface StaTotalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaTotal record);

    int insertSelective(StaTotal record);

    StaTotal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaTotal record);

    int updateByPrimaryKey(StaTotal record);

    List<StaTotal> selectList(StaTotal record);

    List<StaTotal> selectAllWithPage(StaTotal record);

    int selectPageCount(StaTotal staTotal);
}