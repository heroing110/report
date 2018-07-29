package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaShop;

import java.util.List;

public interface StaShopService {

    List<StaShop> selectAllWithPage(StaShop staShop);

    List<StaShop> selectList(StaShop staShop);

    int selectPageCount(StaShop staShop);

    List<StaShop> selectAreaShopWithPage(StaShop record);

    int selectAreaShopWithPageCount(StaShop staShop);

    List<StaShop> selectAreaShopLine(StaShop record);
}
