package com.example.dao;

import com.example.entity.StaCat;

import java.util.List;

public interface StaCatMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaCat record);

    int insertSelective(StaCat record);

    StaCat selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaCat record);

    int updateByPrimaryKeyWithBLOBs(StaCat record);

    int updateByPrimaryKey(StaCat record);

    List<StaCat> selectAllWithPage(StaCat record);

    List<StaCat> selectList(StaCat record);
}