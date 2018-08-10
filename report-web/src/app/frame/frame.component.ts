import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem, MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';
import {WindowResizeService} from '../shared/window-resize.service';
import {AuthService, User} from '../shared/auth.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit, AfterViewInit {

  // 导航是否收起？
  isCollapsed = false;

  // 左侧菜单
  @ViewChild('menuContainer')
  menuContainer: ElementRef<HTMLDivElement>;

  // 菜单列表
  menuList: MenuItem[];

  user: User;

  constructor(private menuService: MenuService,
              private router: Router,
              private windowResize: WindowResizeService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.menuList = this.menuService.getMenus();
    this.user = this.authService.userInfo;

    this.activeCurrentMenu();
  }

  ngAfterViewInit() {
    // this.initMenuMouseWheel();
  }

  // 默认激活选中当前的菜单
  activeCurrentMenu() {
    const {url} = this.router;
    for (let i = 0; i < this.menuList.length; i++) {
      const menu = this.menuList[i];
      if (menu.path && menu.path === url) {
        menu.selected = true;
        break;
      } else if (menu.children) {
        for (let j = 0; j < menu.children.length; j++) {
          const subMenu = menu.children[j];
          if (subMenu.path && subMenu.path === url) {
            subMenu.selected = true;
            menu.open = true;
            break;
          }
        }
      }
    }
  }

  // 切换导航的收起展开状态
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    setTimeout(() => {
      // 200ms后，左侧菜单切换已经完成，可触发事件来通知图标组件调整大小
      this.windowResize.emit();
    }, 200);
  }

  // 使得左侧菜单可以支持鼠标滚动事件
  initMenuMouseWheel() {
    // 滚动事件使用Hamster组件来处理
    if (window['Hamster']) {
      const hamster = window['Hamster'](this.menuContainer.nativeElement, true);
      hamster.wheel((event, delta, deltaX, deltaY) => {
        // 根据每次滚动向上或者向下移动20px
        this.menuContainer.nativeElement.scrollTop += deltaY > 0 ? -20 : 20;
      });
    }
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (e) {
    }

    this.router.navigate(['/login']);
  }

}
