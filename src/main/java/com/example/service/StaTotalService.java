package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;

import java.util.List;

public interface StaTotalService {
    public List<StaTotal> selectList(StaTotal record);

    public List<StaTotal> selectAllWithPage(StaTotal record);

    int selectPageCount(StaTotal staTotal);
}
