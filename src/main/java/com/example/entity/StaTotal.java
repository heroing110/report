package com.example.entity;

import java.io.Serializable;
import java.util.Date;

public class StaTotal extends SortFilter implements Serializable,IPager {
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

    private String type;

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

    private String remark1;

    private String remark2;

    private String remark3;

    private Integer pageNo;

    private Integer pageRow;

    private Integer pageSize;

    private Double totalVolume;

    private Double totalCount;

    private Double totalMum;

    private Double totalCountMum;

    private int qys;

    private int cyrs;

    private Double total;

    private Double totalMom;

    private  Boolean doubleParam;

    private String volumeType;

    private String countType;

    private Float qysmom;

    private Float cyrsmom;

    public String getVolumeType() {
        return volumeType;
    }

    public void setVolumeType(String volumeType) {
        this.volumeType = volumeType;
    }

    private static final long serialVersionUID = 1L;

    public Float getQysmom() {
        return qysmom;
    }

    public void setQysmom(Float qysmom) {
        this.qysmom = qysmom;
    }

    public Float getCyrsmom() {
        return cyrsmom;
    }

    public void setCyrsmom(Float cyrsmom) {
        this.cyrsmom = cyrsmom;
    }

    public Double getTotalMom() {
        return totalMom;
    }

    public void setTotalMom(Double totalMom) {
        this.totalMom = totalMom;
    }

    public String getCountType() {
        return countType;
    }

    public void setCountType(String countType) {
        this.countType = countType;
    }

    public Boolean getDoubleParam() {
        return doubleParam;
    }

    public void setDoubleParam(Boolean doubleParam) {
        this.doubleParam = doubleParam;
    }

    public Integer getPageRow() {
        return pageRow;
    }

    @Override
    public void setPageRow(Integer pageRow) {
        this.pageRow = pageRow;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

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

    public int getQys() {
        return qys;
    }

    public void setQys(int qys) {
        this.qys = qys;
    }

    public int getCyrs() {
        return cyrs;
    }

    public void setCyrs(int cyrs) {
        this.cyrs = cyrs;
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

    @Override
    public String getRemark1() {
        return remark1;
    }

    @Override
    public void setRemark1(String remark1) {
        this.remark1 = remark1;
    }
}