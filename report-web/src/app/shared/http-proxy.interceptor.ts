import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpProxyInterceptorService implements HttpInterceptor {
  private sessionTimeout = false;

  /**
   * 开发模式api代理转发设置
   * 通过配置 proxy.config.json 来将请求转发到代理服务器，到生产环境时，此设置自动取消
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let secureReq = req;
    if (!environment.production && req.params.get('noProxy') !== 'true') {// 判断是否为非生产环境
      secureReq = req.clone({
        url: '/api/' + req.url
      });
    }

    secureReq = secureReq.clone({
      setParams: {_time: Date.now().toString()}
    });

    return next.handle(secureReq).pipe(
      map(event => {
        if (event instanceof HttpResponse && event.body) {
          const data: AjaxResult<any> = event.body;
          if (data && data.code === 2 && !this.sessionTimeout) {
            this.sessionTimeout = true;
            alert('用户登录信息已失效，请重新登录！');
            location.reload();// 刷新页面，用以前往登录页
          }
        }
        return event;
      })
    );
  }

}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpProxyInterceptorService, multi: true},
];
