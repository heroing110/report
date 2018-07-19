package com.example.service.impl;

import com.example.dao.StaShopMapper;
import com.example.entity.StaShop;
import com.example.service.StaShopService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("shopService")
public class StaShopServiceImpl implements StaShopService {
    @Resource
    StaShopMapper staShopMapper;

    @Override
    public List<StaShop> selectAllWithPage(StaShop staShop) {
        return staShopMapper.selectAllWithPage(staShop);
    }

    @Override
    public List<StaShop> selectList(StaShop staShop) {
        return staShopMapper.selectList(staShop);
    }
}
