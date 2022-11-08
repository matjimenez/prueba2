import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }
  public crearFormulario(){
    this.formulario=this.fb.group({
      firstName: new FormControl(['',Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
      lastName:new FormControl(['',Validators.required,Validators.minLength(4),Validators.max(20)]),
      age: [18,Validators.required,Validators.min(18),Validators.max(98)],
      username:new FormControl(['',Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      password:new FormControl(['',Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      birthDate: [1991,Validators.required],
      gender: new FormControl ('masculino',Validators.required)
    })


  }

  ngOnInit() {
  }

}
