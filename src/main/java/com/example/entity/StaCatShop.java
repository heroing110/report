package com.example.entity;

import java.io.Serializable;
import java.util.Date;

public class StaCatShop implements Serializable {
    private Integer id;

    private String year;

    private String month;

    private String country;

    private String province;

    private String city;

    private String district;

    private String platform;

    private String sCat1Name;

    private String shopId;

    private String shopName;

    private Long pCount;

    private Double mSlaesCount;

    private Double mSalesVolume;

    private String mSalesVolumeLevel;

    private String unitType;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Integer status;

    private String remark1;

    private String remark2;

    private String remark3;

    private String date;

    private Integer pageNo;

    private Integer pageSize;

    private static final long serialVersionUID = 1L;

    public Integer getPageNo() {
        return pageNo;
    }

    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getsCat1Name() {
        return sCat1Name;
    }

    public void setsCat1Name(String sCat1Name) {
        this.sCat1Name = sCat1Name;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public Long getpCount() {
        return pCount;
    }

    public void setpCount(Long pCount) {
        this.pCount = pCount;
    }

    public Double getmSlaesCount() {
        return mSlaesCount;
    }

    public void setmSlaesCount(Double mSlaesCount) {
        this.mSlaesCount = mSlaesCount;
    }

    public Double getmSalesVolume() {
        return mSalesVolume;
    }

    public void setmSalesVolume(Double mSalesVolume) {
        this.mSalesVolume = mSalesVolume;
    }

    public String getmSalesVolumeLevel() {
        return mSalesVolumeLevel;
    }

    public void setmSalesVolumeLevel(String mSalesVolumeLevel) {
        this.mSalesVolumeLevel = mSalesVolumeLevel;
    }

    public String getUnitType() {
        return unitType;
    }

    public void setUnitType(String unitType) {
        this.unitType = unitType;
    }

    public Date getInsertTime() {
        return insertTime;
    }

    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getRemark1() {
        return remark1;
    }

    public void setRemark1(String remark1) {
        this.remark1 = remark1;
    }

    public String getRemark2() {
        return remark2;
    }

    public void setRemark2(String remark2) {
        this.remark2 = remark2;
    }

    public String getRemark3() {
        return remark3;
    }

    public void setRemark3(String remark3) {
        this.remark3 = remark3;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}