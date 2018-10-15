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

    @Override
    public List<StaCatShop> selectTop10VolumeWithPage(StaCatShop staCatShop) {
        return staCatShopMapper.selectTop10VolumeWithPage(staCatShop);
    }

    @Override
    public List<StaCatShop> selectTop10CountWithPage(StaCatShop staCatShop) {
        return staCatShopMapper.selectTop10CountWithPage(staCatShop);
    }

    @Override
    public int selectTop10VolumeWithPageCount(StaCatShop staCatShop) {
        return staCatShopMapper.selectTop10VolumeWithPageCount(staCatShop);
    }

    @Override
    public int selectTop10CountWithPageCount(StaCatShop staCatShop) {
        return staCatShopMapper.selectTop10CountWithPageCount(staCatShop);
    }
}
