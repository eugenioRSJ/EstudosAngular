import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CardPageComponent } from './pages/store/card-page/card-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
@NgModule({
  declarations: [
    AppComponent,
    MaskDirective,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    LoginPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CardPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }