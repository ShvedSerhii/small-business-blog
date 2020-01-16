import { Component } from "@angular/core";
import { RegistrationService } from "../../services/registration.service";
import { RegisterModel } from "./register.model";
import RegisterForm from "./register.form";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  public success: any;
  data: any;
  private model: RegisterModel;
  public form: RegisterForm;
  constructor(private registrationService: RegistrationService) {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
    this.success = {};
  }

  onSubmit(form) {
    this.registrationService.registerUser(data => {
      console.log("data", data);
      this.data = data;
      this.registrationService.setData(data);
    }, `{"name":"test1", "surname":"test1", "email":"test@yopmail.com", "phone":"2313123123", "password":"admin"}`);
  }
}
