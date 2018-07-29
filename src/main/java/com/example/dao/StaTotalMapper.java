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

    List<StaTotal> selectLine(StaTotal record);

    List<StaTotal> selectAreaQysLine(StaTotal record);

    List<StaTotal> selectHomeIndex(StaTotal record);

    List<StaTotal> selectAllWithPage(StaTotal record);

    List<StaTotal> selectAreaWithPage(StaTotal record);

    List<StaTotal> selectAreaContrastLine(StaTotal record);

    int selectPageCount(StaTotal staTotal);

    int selectAreaPageCount(StaTotal staTotal);

    List<StaTotal> selectAreaQysWithPage(StaTotal record);

    int selectAreaQysWithPageCount(StaTotal staTotal);
}