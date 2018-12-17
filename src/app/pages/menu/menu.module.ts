import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu-routing.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { PerfilusuarioPageModule } from '../perfilusuario/perfilusuario.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    DashboardPageModule,
    PerfilusuarioPageModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }