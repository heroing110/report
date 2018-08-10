import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: User;

  constructor(private http: HttpClient) {
  }

  /**
   * 尝试登陆
   * @param data
   * @returns {Promise<AjaxResult<boolean>>}
   */
  login(data: User): Promise<AjaxResult<boolean>> {
    return this.http.post<any>('user/login', data).toPromise();
  }

  /**
   * 尝试获取当前登录信息
   * @returns {Promise<AjaxResult<User>>}
   */
  getCurrentUser(): Promise<AjaxResult<User>> {
    return this.http.get<any>('user/get_user').toPromise();
  }

  /**
   * 退出登陆
   * @returns {Promise<AjaxResult<boolean>>}
   */
  logout(): Promise<AjaxResult<boolean>> {
    this.userInfo = null;
    return this.http.get<any>('user/login_out').toPromise();
  }
}

export class User {
  id?: number;
  userName?: string;
  loginName?: string;
  md5Password?: string;
  level?: number;
  province?: string;
  city?: string;
  signDate?: Date;
  validTime?: number;
  isValid?: number;
}
