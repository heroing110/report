package com.example.dao;

import com.example.entity.StaShop;

import java.util.List;

public interface StaShopMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaShop record);

    int insertSelective(StaShop record);

    StaShop selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaShop record);

    int updateByPrimaryKey(StaShop record);

    List<StaShop> selectList(StaShop record);

    List<StaShop> selectAllWithPage(StaShop record);

    int selectPageCount(StaShop staShop);

    List<StaShop> selectAreaShopWithPage(StaShop record);

    List<StaShop> selectAreaShopLine(StaShop record);

    int selectAreaShopWithPageCount(StaShop staShop);
}