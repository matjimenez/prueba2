import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formulario:FormGroup;

  constructor(
    private fb:FormBuilder,
  ) { }

  public formLog(){
    this.formulario=this.fb.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }

}
