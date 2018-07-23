package com.example.dao;

import com.example.entity.StaCatShop;

import java.util.List;

public interface StaCatShopMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaCatShop record);

    int insertSelective(StaCatShop record);

    StaCatShop selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaCatShop record);

    int updateByPrimaryKeyWithBLOBs(StaCatShop record);

    int updateByPrimaryKey(StaCatShop record);

    List<StaCatShop> selectList(StaCatShop staCatShop);

    List<StaCatShop> selectAllWithPage(StaCatShop staCatShop);

    int selectPageCount(StaCatShop staCatShop);
}