import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

//Devemos sempre importar dentro de cada componente ou pages o modulo que precisamos 
//para gerar uma pagina ionic generate page
//para gerar um modulo ionic generate component
//Cada page vem com o seu modulo e já faz uma rota dentro do app.module
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage],
  exports: [LoginPage]
})
export class LoginPageModule {}
