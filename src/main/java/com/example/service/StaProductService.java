package com.example.service;

import com.example.entity.StaProduct;

import java.util.List;

public interface StaProductService {

    List<StaProduct> selectAllWithPage(StaProduct staCat);

    List<StaProduct> selectList(StaProduct staCat);

    int selectPageCount(StaProduct record);
}
