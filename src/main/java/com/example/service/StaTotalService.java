package com.example.service;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;

import java.util.List;

public interface StaTotalService {
    public List<StaTotal> selectList(StaTotal record);

    public List<StaTotal> selectAllWithPage(StaTotal record);

    public List<StaTotal> selectAreaWithPage(StaTotal record);

    int selectPageCount(StaTotal staTotal);

    List<StaTotal> selectLine(StaTotal record);

    public int selectAreaPageCount(StaTotal staTotal);

    List<StaTotal> selectAreaContrastLine(StaTotal record);

    List<StaTotal> selectAreaQysWithPage(StaTotal record);

    int selectAreaQysWithPageCount(StaTotal staTotal);

    List<StaTotal> selectAreaQysLine(StaTotal record);

    List<StaTotal> selectHomeIndex(StaTotal record);

    List<StaTotal> selectHomeCountryRank(StaTotal record);

    List<StaTotal> selectHomeProvinceRank(StaTotal record);
}
