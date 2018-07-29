package com.example.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class StaCat extends SortFilter implements Serializable {
    private Integer id;

    private Integer row;

    private String year;

    private String month;

    private String country;

    private String province;

    private String city;

    private String district;

    private String platform;

    private String sCat1Name;

    private String cat1Name;

    private String cat2Name;

    private String cat3Name;

    private Long pCount;

    private Double mSlaesCount;

    private Double mSalesVolume;

    private String unitType;

    private Long totalSalesVolume;

    private Long salesVolume;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Long status;

    private String remark1;

    private String remark2;

    private String remark3;

    private String date;

    private String dateStr;

    private String dateBegin;

    private String dateEnd;

    private Integer pageNo;

    private Integer pageSize;

    private Integer pageRow;

    private Float salesPercent;

    private Float countPercent;

    private String name;

    private Float totalCount;

    private Float totalVolume;

    private List<StaCat> children;

    private static final long serialVersionUID = 1L;

    public Integer getPageRow() {
        return pageRow;
    }

    public void setPageRow(Integer pageRow) {
        this.pageRow = pageRow;
    }

    public Integer getRow() {
        return row;
    }

    public void setRow(Integer row) {
        this.row = row;
    }

    public String getDateStr() {
        return dateStr;
    }

    public void setDateStr(String dateStr) {
        this.dateStr = dateStr;
    }

    public Float getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Float totalCount) {
        this.totalCount = totalCount;
    }

    public Float getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(Float totalVolume) {
        this.totalVolume = totalVolume;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<StaCat> getChildren() {
        return children;
    }

    public void setChildren(List<StaCat> children) {
        this.children = children;
    }

    public Float getSalesPercent() {
        return salesPercent;
    }

    public void setSalesPercent(Float salesPercent) {
        this.salesPercent = salesPercent;
    }

    public Float getCountPercent() {
        return countPercent;
    }

    public void setCountPercent(Float countPercent) {
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

    public String getsCat1Name() {
        return sCat1Name;
    }

    public void setsCat1Name(String sCat1Name) {
        this.sCat1Name = sCat1Name;
    }

    public String getCat1Name() {
        return cat1Name;
    }

    public void setCat1Name(String cat1Name) {
        this.cat1Name = cat1Name;
    }

    public String getCat2Name() {
        return cat2Name;
    }

    public void setCat2Name(String cat2Name) {
        this.cat2Name = cat2Name;
    }

    public String getCat3Name() {
        return cat3Name;
    }

    public void setCat3Name(String cat3Name) {
        this.cat3Name = cat3Name;
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

    public String getUnitType() {
        return unitType;
    }

    public void setUnitType(String unitType) {
        this.unitType = unitType;
    }

    public Long getTotalSalesVolume() {
        return totalSalesVolume;
    }

    public void setTotalSalesVolume(Long totalSalesVolume) {
        this.totalSalesVolume = totalSalesVolume;
    }

    public Long getSalesVolume() {
        return salesVolume;
    }

    public void setSalesVolume(Long salesVolume) {
        this.salesVolume = salesVolume;
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