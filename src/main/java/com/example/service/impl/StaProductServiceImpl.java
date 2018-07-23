package com.example.service.impl;

import com.example.dao.StaProductMapper;
import com.example.entity.StaProduct;
import com.example.service.StaProductService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("productService")
public class StaProductServiceImpl implements StaProductService {
    @Resource
    StaProductMapper staProductMapper;

    @Override
    public List<StaProduct> selectAllWithPage(StaProduct staProduct) {
        return staProductMapper.selectAllWithPage(staProduct);
    }

    @Override
    public List<StaProduct> selectList(StaProduct staProduct) {
        return staProductMapper.selectList(staProduct);
    }

    @Override
    public int selectPageCount(StaProduct record) {
        return staProductMapper.selectPageCount(record);
    }
}
