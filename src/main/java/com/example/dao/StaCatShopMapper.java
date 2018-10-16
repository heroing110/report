package com.example.dao;

import com.example.entity.StaCatShop;

import java.util.List;

public interface StaCatShopMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaCatShop record);

    int insertSelective(StaCatShop record);

    StaCatShop selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaCatShop record);

    int updateByPrimaryKey(StaCatShop record);

    List<StaCatShop> selectAllWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectTop10VolumeWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectTop10CountWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectList(StaCatShop staCatShop);

    int selectPageCount(StaCatShop staCatShop);

    int selectTop10VolumeWithPageCount(StaCatShop staCatShop);

    int selectTop10CountWithPageCount(StaCatShop staCatShop);
}