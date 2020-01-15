
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from './register.model';
/*
  ReactiveForm structure class
*/
export default class RegisterForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: RegisterModel;

  constructor(
    model: RegisterModel,
  ) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  // Create form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, { validators: [Validators.required, Validators.email], updateOn: 'change'}),
      password: new FormControl(this.model.password, { validators: [Validators.required, Validators.pattern(/aa/)], updateOn: 'change'}),
      name: new FormControl(this.model.name, { validators: [Validators.required], updateOn: 'change'}),
      surname: new FormControl(this.model.surname, { validators: [Validators.required], updateOn: 'change'}),
      phone: new FormControl(this.model.phone, { validators: [Validators.required], updateOn: 'change'})
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      console.log(data);
      this.model.email = data.email;
      this.model.password = data.password;
      this.model.name = data.name;
      this.model.surname = data.surname;
      this.model.phone = data.phone;
    });
  }
}
