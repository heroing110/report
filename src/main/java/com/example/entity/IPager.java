package com.example.entity;

public interface IPager {
    String getProvince();

    void setProvince(String province);

    String getCity();

    void setCity(String city);

    Integer getPageNo();

    void setPageNo(Integer pageNo);

    Integer getPageSize();

    void setPageSize(Integer pageSize);

    void setPageRow(Integer pageRow);

    String getRemark1();

    void setRemark1(String remark1);
}
