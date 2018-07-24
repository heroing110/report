package com.example.entity;

import java.util.List;
import java.util.Map;

public class SortFilter {
    private List<Map<String,String>> sortList;

    private String orderBy;


    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public List<Map<String, String>> getSortList() {
        return sortList;
    }

    public void setSortList(List<Map<String, String>> sortList) {
        this.sortList = sortList;
    }
}
