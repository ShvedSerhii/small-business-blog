import { Component } from "@angular/core";
import { LoginModel } from "./login.model";
import LoginForm from "./login.form";
import { LoginService } from "../../services/login.service";
import { CookiesService } from "../../services/cookies.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public success: any;
  private model: LoginModel;
  public form: LoginForm;
  data: any;
  public email: any;
  public password: any;
  constructor(
    private loginService: LoginService,
    private cookie: CookiesService
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
    this.success = {};
    this.email = this.form.formGroup.get("email");
    this.password = this.form.formGroup.get("password");
  }

  isAutorization() {
    if (!this.cookie.getCookie("token")) return true;
    return false;
  }
  logout() {
    this.cookie.deleteCookie("token");
  }

  onSubmit(form) {
    this.loginService.loginUser(data => {
      console.log("data", data);
      this.data = data;
      this.loginService.setData(data);
      this.email.reset();
      this.password.reset();
    }, `{"name": "${form.value.email}", "password": "${form.value.password}"}`);
  }
}
