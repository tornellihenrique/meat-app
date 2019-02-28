import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn()

    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`)
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }
}
