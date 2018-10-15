package com.example.entity;

import com.alibaba.druid.sql.PagerUtils;

import java.io.Serializable;
import java.util.Date;

public class StaShop extends SortFilter  implements Serializable,IPager {
    private Integer id;

    private Date date;

    private String year;

    private String dateStr;

    private String month;

    private String country;

    private String province;

    private String city;

    private String range;

    private String disrict;

    private String platform;

    private String shopId;

    private String shopName;

    private Long pCount;

    private Double salesCount;

    private Double salesVolume;

    private Double totalSalesVolume;

    private String salesVolumeLevel;

    private String unitType;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Long status;

    private String remark1;

    private String remark2;

    private String ramark3;

    private Integer pageNo;

    private Integer pageSize;

    private String salesPercent;

    private String countPercent;

    private String dateBegin;

    private String dateEnd;

    private Integer pageRow;

    private Float  shopCount;

    private Float minSalesVolume;

    private Float maxSalesVolume;

    private String type;

    private String percent;

    private static final long serialVersionUID = 1L;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPercent() {
        return percent;
    }

    public void setPercent(String percent) {
        this.percent = percent;
    }

    public Float getMinSalesVolume() {
        return minSalesVolume;
    }

    public void setMinSalesVolume(Float minSalesVolume) {
        this.minSalesVolume = minSalesVolume;
    }

    public Float getMaxSalesVolume() {
        return maxSalesVolume;
    }

    public void setMaxSalesVolume(Float maxSalesVolume) {
        this.maxSalesVolume = maxSalesVolume;
    }

    public String getDateStr() {
        return dateStr;
    }

    public void setDateStr(String dateStr) {
        this.dateStr = dateStr;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public Float getShopCount() {
        return shopCount;
    }

    public void setShopCount(Float shopCount) {
        this.shopCount = shopCount;
    }

    public Integer getPageRow() {
        return pageRow;
    }

    @Override
    public void setPageRow(Integer pageRow) {
        this.pageRow = pageRow;
    }

    public Double getTotalSalesVolume() {
        return totalSalesVolume;
    }

    public void setTotalSalesVolume(Double totalSalesVolume) {
        this.totalSalesVolume = totalSalesVolume;
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

    public String getDisrict() {
        return disrict;
    }

    public void setDisrict(String disrict) {
        this.disrict = disrict;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
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

    public String getSalesVolumeLevel() {
        return salesVolumeLevel;
    }

    public void setSalesVolumeLevel(String salesVolumeLevel) {
        this.salesVolumeLevel = salesVolumeLevel;
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

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
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

    public String getRamark3() {
        return ramark3;
    }

    public void setRamark3(String ramark3) {
        this.ramark3 = ramark3;
    }
}