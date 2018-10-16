package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaCatShop;

import java.util.List;

public interface StaCatShopService {

    List<StaCatShop> selectAllWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectList(StaCatShop staCatShop);

    int selectPageCount(StaCatShop staCatShop);

    List<StaCatShop> selectTop10VolumeWithPage(StaCatShop staCatShop);

    List<StaCatShop> selectTop10CountWithPage(StaCatShop staCatShop);

    int selectTop10VolumeWithPageCount(StaCatShop staCatShop);

    int selectTop10CountWithPageCount(StaCatShop staCatShop);
}
