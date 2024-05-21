import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addtokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  if (req.method == 'GET') {
    // console.log('Requet GEt', req);

    return next(req);
  } else {
    let token = localStorage.getItem('access_token');
    if (token) {
      let cloneReq = req.clone({
        headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
      });
      //  console.log('CloneReq', cloneReq);

      return next(cloneReq);
    }

    return next(req);
  }
};