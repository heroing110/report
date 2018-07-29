import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {
  title = 'Uh oh!';
  subtitle = '小怪兽断开了页面链接...';

  constructor() {
  }

  ngOnInit() {
  }

}
