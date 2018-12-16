import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { PerfilusuarioPage } from '../perfilusuario/perfilusuario.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      {
        path: 'dashboard',
        outlet: 'menucontent',
        component: DashboardPage
      },
      {
        path: '',
        outlet: 'perfilusuario',
        component: PerfilusuarioPage
      }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/(menucontent:dashboard)'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
