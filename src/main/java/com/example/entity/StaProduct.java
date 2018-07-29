package com.example.entity;

import java.io.Serializable;
import java.util.Date;

public class StaProduct extends SortFilter  implements Serializable {
    private Integer id;

    private String year;

    private String month;

    private String country;

    private String province;

    private String city;

    private String district;

    private String platform;

    private String productId;

    private String productName;

    private Double salesCount;

    private Double salesVolume;

    private Integer cRankP;

    private Integer cRankC;

    private Integer sRankP;

    private Integer sRankC;

    private String unitType;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Integer status;

    private String ramark1;

    private String ramark2;

    private String ramark3;

    private String data;

    private Integer pageNo;

    private Integer pageSize;

    private String salesPercent;

    private String countPercent;

    private String dateBegin;

    private String dateEnd;

    private Double totalVolume;

    private String type;

    private Double totalSalesCount;

    private Double totalSalesVolume;

    private static final long serialVersionUID = 1L;

    public Double getTotalSalesCount() {
        return totalSalesCount;
    }

    public void setTotalSalesCount(Double totalSalesCount) {
        this.totalSalesCount = totalSalesCount;
    }

    public Double getTotalSalesVolume() {
        return totalSalesVolume;
    }

    public void setTotalSalesVolume(Double totalSalesVolume) {
        this.totalSalesVolume = totalSalesVolume;
    }

    public Double getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(Double totalVolume) {
        this.totalVolume = totalVolume;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSalesPercent() {
        return salesPercent;
    }

    public void setSalesPercent(String salesPercent) {
        this.salesPercent = salesPercent;
    }

    public String getCountPercent() {
        return countPercent;
    }

    public void setCountPercent(String countPercent) {
        this.countPercent = countPercent;
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

    public Double getSalesCount() {
        return salesCount;
    }

    public void setSalesCount(Double salesCount) {
        this.salesCount = salesCount;
    }

    public Double getSalesVolume() {
        return salesVolume;
    }

    public void setSalesVolume(Double salesVolume) {
        this.salesVolume = salesVolume;
    }

    public Integer getcRankP() {
        return cRankP;
    }

    public void setcRankP(Integer cRankP) {
        this.cRankP = cRankP;
    }

    public Integer getcRankC() {
        return cRankC;
    }

    public void setcRankC(Integer cRankC) {
        this.cRankC = cRankC;
    }

    public Integer getsRankP() {
        return sRankP;
    }

    public void setsRankP(Integer sRankP) {
        this.sRankP = sRankP;
    }

    public Integer getsRankC() {
        return sRankC;
    }

    public void setsRankC(Integer sRankC) {
        this.sRankC = sRankC;
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

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}