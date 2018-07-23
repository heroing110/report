package com.example.service.impl;

import com.example.dao.StaCatShopMapper;
import com.example.entity.StaCatShop;
import com.example.service.StaCatShopService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("catShopService")
public class StaCatShopServiceImpl implements StaCatShopService {
    @Resource
    StaCatShopMapper staCatShopMapper;

    @Override
    public List<StaCatShop> selectAllWithPage(StaCatShop staCatShop) {
        return staCatShopMapper.selectAllWithPage(staCatShop);
    }

    @Override
    public List<StaCatShop> selectList(StaCatShop staCatShop) {
        return staCatShopMapper.selectList(staCatShop);
    }

    @Override
    public int selectPageCount(StaCatShop staCatShop) {
        return staCatShopMapper.selectPageCount(staCatShop);
    }
}
