import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import {WindowResizeService} from '../window-resize.service';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.less']
})
export class DataChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLDivElement>;

  @Input()
  height: number;

  private chartObj: echarts.ECharts;
  private eventEmitter = new EventEmitter<any>();

  constructor(private windowResize: WindowResizeService) {
  }

  ngOnInit() {
    // 添加窗口大小调整的事件监听器
    this.windowResize.subscribe(this.eventEmitter);
  }

  // 初始化组件
  ngAfterViewInit() {
    if (this.height) {
      this.canvas.nativeElement.style.height = this.height + 'px';
    }
    this.chartObj = echarts.init(this.canvas.nativeElement);

    // 初始化窗口事件
    this.eventEmitter.subscribe(() => {
      this.chartObj.resize();
    });
  }

  // 销毁组件
  ngOnDestroy() {
    this.windowResize.unsubscribe(this.eventEmitter);
    this.chartObj.dispose();
  }

  setOption(option, noMerge = true) {
    if (this.chartObj) {
      optionMergeAsDefault(option);
      this.chartObj.setOption(option, noMerge);
    }
  }
}

function optionMergeAsDefault(option: echarts.EChartOption) {
  if (option['baseOption']) {// 用来兼容时间线的情况
    option = option['baseOption'];
  }
  if (!option.toolbox) {
    option.toolbox = {// 设置默认的操作工具箱
      feature: {
        saveAsImage: {
          pixelRatio: window.devicePixelRatio || 1
        }
      }
    };
  }

  if (!option.animationEasing) {// 设置默认的动画
    option.animationEasing = 'elasticOut';
    option.animationDelayUpdate = function (idx) {
      return idx * 5;
    };
  }
}
