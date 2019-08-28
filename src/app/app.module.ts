import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import{RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const mypage : Routes=[
  
  {path:"log",component:LoginComponent },
  {path:"reg",component:RegisterComponent },
  {path:"home",component:HomeComponent },
  {path:"", redirectTo: "/log", pathMatch:"full"},//by default this dashboard will appear.

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(mypage),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
