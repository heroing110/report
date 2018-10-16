package com.example.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class StaCatShop extends SortFilter implements Serializable,IPager {
    private Integer id;

    private Date date;

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

    private Integer pageNo;

    private Integer pageSize;

    private Integer pageRow;

    private Double salesPercent;

    private Double countPercent;

    private Double totalVolume;

    private Double totalCount;

    private String dateBegin;

    private String dateEnd;

    private static final long serialVersionUID = 1L;

    public Double getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(Double totalVolume) {
        this.totalVolume = totalVolume;
    }

    public Double getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Double totalCount) {
        this.totalCount = totalCount;
    }

    public Integer getPageRow() {
        return pageRow;
    }

    @Override
    public void setPageRow(Integer pageRow) {
        this.pageRow = pageRow;
    }

    public String getDateBegin() {
        return dateBegin;
    }

    public void setDateBegin(String dateBegin) {
        this.dateBegin = dateBegin;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Double getSalesPercent() {
        return salesPercent;
    }

    public void setSalesPercent(Double salesPercent) {
        this.salesPercent = salesPercent;
    }

    public Double getCountPercent() {
        return countPercent;
    }

    public void setCountPercent(Double countPercent) {
        this.countPercent = countPercent;
    }

    @Override
    public Integer getPageNo() {
        return pageNo;
    }

    @Override
    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    @Override
    public Integer getPageSize() {
        return pageSize;
    }

    @Override
    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    @Override
    public String getProvince() {
        return province;
    }

    @Override
    public void setProvince(String province) {
        this.province = province;
    }

    @Override
    public String getCity() {
        return city;
    }

    @Override
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
    @Override
    public String getRemark1() {
        return remark1;
    }
    @Override
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

}