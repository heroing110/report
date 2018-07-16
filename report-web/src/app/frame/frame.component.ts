import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit, AfterViewInit {

  // 导航是否收起？
  isCollapsed = false;

  // 左侧菜单
  @ViewChild('menuContainer') menuContainer: ElementRef<HTMLDivElement>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMenuMouseWheel();
  }

  // 切换导航的收起展开状态
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  // 使得左侧菜单可以支持鼠标滚动事件
  initMenuMouseWheel() {
    // 滚动事件使用Hamster组件来处理
    const hamster = window['Hamster'](this.menuContainer.nativeElement, true);
    hamster.wheel((event, delta, deltaX, deltaY) => {
      // 根据每次滚动向上或者向下移动20px
      this.menuContainer.nativeElement.scrollTop += deltaY > 0 ? -20 : 20;
    });
  }


}
