package com.example.po;

import java.io.Serializable;

public class Result<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    private int code;

    private String msg;

    private T data;

    public Result() {
        setCode(Constants.RESULT_TYPE_SUCCESS);
        setMsg(Constants.RESULT_MSG_SUCCESS);
    }

    public Result(T data) {
        setCode(Constants.RESULT_TYPE_SUCCESS);
        setMsg(Constants.RESULT_MSG_SUCCESS);
        setData(data);
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

}