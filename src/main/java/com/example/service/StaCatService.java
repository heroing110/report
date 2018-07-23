package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;

import java.util.List;

public interface StaCatService {

    List<StaCat> selectAllWithPage(StaCat staCat);

    List<StaCat> selectList(StaCat staCat);

    int selectPageCount(StaCat record);
}
