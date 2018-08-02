import {Injectable} from '@angular/core';
import * as echarts from 'echarts';
import province from './map-data/province-all';
import {DATA as CHINA_DATA} from './map-data/china';

@Injectable({
  providedIn: 'root'
})
export class ChainMapService {

  constructor() {
  }

  loadChinaMap() {
    echarts.registerMap('china', CHINA_DATA);
  }

  // 传入省份中文名称
  loadProvinceMap(provinceName) {
    echarts.registerMap(provinceName, province[provinceName]);
  }
}
