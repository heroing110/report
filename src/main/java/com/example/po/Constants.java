package com.example.po;

public class Constants {
    public static final int RESULT_TYPE_SUCCESS = 0;
    public static final int RESULT_TYPE_FAILURE = 1;

    public static final String RESULT_MSG_SUCCESS = "success";
    public static final String RESULT_MSG_FAILURE = "failure";
    public static final String RESULT_MSG_NO_RANGE = "无数据权限";
    public static final String RESULT_MSG_NO_BUSINESS_RANGE = "无作业范围";
    public static final String HOUSE_AUDIT_NO_USER = "未分配审核人";

    public static final String RESULT_MSG_INVALID_CONTENT = "请修改输入内容中的敏感字";

    public static final String RESULT_MSG_LIMIT_OUT = "今日查看次数已满";

    //房源数据权限拆分大数据量   数量
    public static final int HouseDataSplitNum = 900;

    /**
     * 判断登录人是否有查看隐藏房源权限码
     */
    public static final String SCM_HOUSE_VIEWHIDEN = "SCM:HOUSE:CONCEAL:VIEWHIDE";

    /**
     * 带看单反馈
     */
    public static final String OPERATE_TYPE_A = "A";
    /**
     * 查看带看单详情
     */
    public static final String OPERATE_TYPE_B = "B";
}
