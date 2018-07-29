import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  logoName = '中浩德';
  ads: string[] = ['全面', '专业', '便捷', '协同'];
  sysName = '数据门户系统';

  constructor() {
  }

  ngOnInit() {
  }

}
