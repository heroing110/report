package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaCatShop;

import java.util.List;

public interface StaCatShopService {

    List<StaCatShop> selectAllWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectList(StaCatShop staCatShop);
}
