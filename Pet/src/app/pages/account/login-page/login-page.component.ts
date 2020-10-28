import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.util';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private fb : FormBuilder,
    private service: DataService //injeção de dependencia
  ) {
    this.form = this.fb.group({
      username:["", Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
      password:["", Validators.compose([
        Validators.maxLength(20),
        Validators.minLength(6),
        Validators.required
      ])]
    })
   }

  ngOnInit() {
    const token = Security.getToken();
    if(token){
      this.busy = true; 
      this
      .service
      .refreshToken(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.setUser(data.customer, data.token);
        },
        (err) => {
          localStorage.clear();
          this.busy = false;
        }
      )

    }
  }

  submit(){
    //Locais onde armazenar o token
    //->Variável global
    //->Session Storage -> Fechou a aba perdeu o token
    //->Local Storage -> permanente
    this.busy = true;
    this.service
      .authenticate(this.form.value)
      .subscribe((data: any) => {
        console.log(data);
          this.setUser(data.customer, data.token);
          this.busy = false;
        },
       (err) => {
        this.busy = false;
         console.log(err)
      }
      );
  }

  setUser(user, token){
    Security.set(user, token);
    this.router.navigate(["/"]);
  }

}
