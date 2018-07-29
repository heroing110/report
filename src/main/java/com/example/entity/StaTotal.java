package com.example.entity;

import java.io.Serializable;
import java.util.Date;

public class StaTotal extends SortFilter implements Serializable {
    private Integer id;

    private Integer row;

    private Date date;

    private String dateStr;

    private String dateBegin;

    private String dateEnd;

    private String year;

    private String month;

    private String[] months;

    private String country;

    private String province;

    private String city;

    private String district;

    private String indexType;

    private String indexType1;

    private String indexType2;

    private Float indexValue;

    private Float mom;

    private Float yoy;

    private String unitType;

    private Integer rankInCountry;

    private Integer rankInProvince;

    private Integer rankInCity;

    private Date insertTime;

    private Date updateTime;

    private String updateUser;

    private Integer status;

    private String ramark1;

    private String remark2;

    private String remark3;

    private Integer pageNo;

    private Integer pageSize;

    private Double totalVolume;

    private Double totalCount;

    private Double totalMum;

    private Double totalCountMum;

    private Double qys;

    private Double cysr;

    private Double total;

    private static final long serialVersionUID = 1L;

    public Integer getRow() {
        return row;
    }

    public void setRow(Integer row) {
        this.row = row;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Double getQys() {
        return qys;
    }

    public void setQys(Double qys) {
        this.qys = qys;
    }

    public Double getCysr() {
        return cysr;
    }

    public void setCysr(Double cysr) {
        this.cysr = cysr;
    }

    public Double getTotalCountMum() {
        return totalCountMum;
    }

    public void setTotalCountMum(Double totalCountMum) {
        this.totalCountMum = totalCountMum;
    }

    public String getIndexType1() {
        return indexType1;
    }

    public Double getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Double totalCount) {
        this.totalCount = totalCount;
    }

    public void setIndexType1(String indexType1) {
        this.indexType1 = indexType1;
    }

    public String getIndexType2() {
        return indexType2;
    }

    public void setIndexType2(String indexType2) {
        this.indexType2 = indexType2;
    }

    public String getDateStr() {
        return dateStr;
    }

    public void setDateStr(String dateStr) {
        this.dateStr = dateStr;
    }

    public Double getTotalMum() {
        return totalMum;
    }

    public void setTotalMum(Double totalMum) {
        this.totalMum = totalMum;
    }

    public Double getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(Double totalVolume) {
        this.totalVolume = totalVolume;
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

    public String[] getMonths() {
        return months;
    }

    public void setMonths(String[] months) {
        this.months = months;
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

    public String getIndexType() {
        return indexType;
    }

    public void setIndexType(String indexType) {
        this.indexType = indexType;
    }

    public Float getIndexValue() {
        return indexValue;
    }

    public void setIndexValue(Float indexValue) {
        this.indexValue = indexValue;
    }

    public Float getMom() {
        return mom;
    }

    public void setMom(Float mom) {
        this.mom = mom;
    }

    public Float getYoy() {
        return yoy;
    }

    public void setYoy(Float yoy) {
        this.yoy = yoy;
    }

    public String getUnitType() {
        return unitType;
    }

    public void setUnitType(String unitType) {
        this.unitType = unitType;
    }

    public Integer getRankInCountry() {
        return rankInCountry;
    }

    public void setRankInCountry(Integer rankInCountry) {
        this.rankInCountry = rankInCountry;
    }

    public Integer getRankInProvince() {
        return rankInProvince;
    }

    public void setRankInProvince(Integer rankInProvince) {
        this.rankInProvince = rankInProvince;
    }

    public Integer getRankInCity() {
        return rankInCity;
    }

    public void setRankInCity(Integer rankInCity) {
        this.rankInCity = rankInCity;
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