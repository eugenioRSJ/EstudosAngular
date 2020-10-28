import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CardPageComponent } from './pages/store/card-page/card-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '', 
    component: FramePageComponent,
    children: [
      {path: '', component: ProductsPageComponent, canActivate:[AuthService]},
      {path: 'cart', component: CardPageComponent, canActivate:[AuthService]}
    ]
  },
  {
    path: 'account', 
    canActivate:[AuthService], //Serve para fazer validação de permissão de usuario, ex, assinante etc, o que está entre colchetes é um serviço implantado por mim
    component: FramePageComponent,
    children: [
      {path: '', component: ProfilePageComponent},
      {path: 'pets', component: PetsPageComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
