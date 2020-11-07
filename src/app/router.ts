import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CowboyGeniusComponent } from './dashboard/cowboy-genius/cowboy-genius.component';
import { CreateClassComponent } from './dashboard/create-class/create-class.component';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { PartnersComponent } from './dashboard/partners/partners.component';
import { SignupComponent } from './dashboard/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'create-class',
    component: CreateClassComponent,
  },
  {
    path: 'cowboy-genius',
    component: CowboyGeniusComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
