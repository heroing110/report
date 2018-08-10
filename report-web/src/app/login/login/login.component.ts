import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  logoName = '中浩德';
  ads: string[] = ['全面', '专业', '便捷', '协同'];
  sysName = '数据门户系统';

  redirectUrl: string;

  user: string;
  password: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private nzModalService: NzModalService,
              private authService: AuthService) {
    this.route.queryParams.subscribe(param => {
      this.redirectUrl = param.redirectUrl;
    });
  }

  ngOnInit() {
  }

  async submit() {
    if (!this.user) {
      return this.nzModalService.warning({nzContent: '请输入用户名！'});
    }
    if (!this.password) {
      return this.nzModalService.warning({nzContent: '请输入密码！'});
    }
    const result = await this.authService.login({
      loginName: this.user,
      md5Password: this.password
    });
    if (result.data === false) {
      return this.nzModalService.warning({nzContent: result.msg});
    }
    this.router.navigate([this.redirectUrl || '/reports']);
  }

}
