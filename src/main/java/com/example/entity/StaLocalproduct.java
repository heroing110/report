package com.example.entity;

import java.io.Serializable;
import java.util.Date;

public class StaLocalproduct extends SortFilter implements Serializable,IPager {
    private Date data;

    private String year;

    private String month;

    private String country;

    private String province;

    private String city;

    private String district;

    private String platform;

    private String catName;

    private String[] catNames;

    private String productId;

    private String productName;

    private String salesCount;

    private Double salesVolume;

    private String unitType;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Integer status;

    private String ramark1;

    private String ramark2;

    private String ramark3;

    private Double totalVolume;

    private Double totalVolumePercent;

    private Double totalCount;

    private Double increaseTotal;

    private Integer pageNo;

    private Integer pageRow;

    private Integer pageSize;

    private String dateStr;

    private String dateBegin;

    private String dateEnd;

    private String remark1;

    private static final long serialVersionUID = 1L;

    public Double getIncreaseTotal() {
        return increaseTotal;
    }

    public void setIncreaseTotal(Double increaseTotal) {
        this.increaseTotal = increaseTotal;
    }

    public String[] getCatNames() {
        return catNames;
    }

    public void setCatNames(String[] catNames) {
        this.catNames = catNames;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public String getDateStr() {
        return dateStr;
    }

    public void setDateStr(String dateStr) {
        this.dateStr = dateStr;
    }

    public String getDateBegin() {
        return dateBegin;
    }

    public void setDateBegin(String dateBegin) {
        this.dateBegin = dateBegin;
    }

    public Double getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Double totalCount) {
        this.totalCount = totalCount;
    }

    @Override
    public Integer getPageNo() {
        return pageNo;
    }

    @Override
    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    public Integer getPageRow() {
        return pageRow;
    }

    @Override
    public void setPageRow(Integer pageRow) {
        this.pageRow = pageRow;
    }

    @Override
    public Integer getPageSize() {
        return pageSize;
    }

    @Override
    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Double getTotalVolumePercent() {
        return totalVolumePercent;
    }

    public void setTotalVolumePercent(Double totalVolumePercent) {
        this.totalVolumePercent = totalVolumePercent;
    }

    public Double getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(Double totalVolume) {
        this.totalVolume = totalVolume;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
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

    public String getCatName() {
        return catName;
    }

    public void setCatName(String catName) {
        this.catName = catName;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSalesCount() {
        return salesCount;
    }

    public void setSalesCount(String salesCount) {
        this.salesCount = salesCount;
    }

    public Double getSalesVolume() {
        return salesVolume;
    }

    public void setSalesVolume(Double salesVolume) {
        this.salesVolume = salesVolume;
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

    public String getRamark1() {
        return ramark1;
    }

    public void setRamark1(String ramark1) {
        this.ramark1 = ramark1;
    }

    public String getRamark2() {
        return ramark2;
    }

    public void setRamark2(String ramark2) {
        this.ramark2 = ramark2;
    }

    public String getRamark3() {
        return ramark3;
    }

    public void setRamark3(String ramark3) {
        this.ramark3 = ramark3;
    }

    @Override
    public String getRemark1() {
        return remark1;
    }

    @Override
    public void setRemark1(String remark1) {
        this.remark1 = remark1;
    }
}