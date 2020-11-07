import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { AppRoutingModule } from './router';
import { SignupComponent } from './dashboard/signup/signup.component';
import { CreateClassComponent } from './dashboard/create-class/create-class.component';
import { PartnersComponent } from './dashboard/partners/partners.component';
import { CowboyGeniusComponent } from './dashboard/cowboy-genius/cowboy-genius.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupComponent,
    CreateClassComponent,
    PartnersComponent,
    CowboyGeniusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
