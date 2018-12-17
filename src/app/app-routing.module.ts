import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
