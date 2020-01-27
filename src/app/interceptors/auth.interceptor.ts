import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CookiesService } from "../services/cookies/cookies.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookies: CookiesService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set("value", this.cookies.getCookie("token"))
    });

    return next.handle(authReq).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse && event.body.token) {
            this.cookies.setCookie("token", event.body.token);
          }
        },
        err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            console.log("Unauthorized");
          }
        }
      )
    );
  }
}
