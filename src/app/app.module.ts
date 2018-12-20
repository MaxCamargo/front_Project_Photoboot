import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './pages/home/home.module';
import { RegisterPageModule } from './pages/register/register.module';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';
import { PerfilusuarioPageModule } from './pages/perfilusuario/perfilusuario.module';
import { MenuComponent } from './components/menu/menu.component';
import { Proxy } from 'src/helpers/proxy/proxy';
import { UserProxy } from 'src/helpers/proxy/user.proxy';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HomePageModule,
    RegisterPageModule,
    DashboardPageModule,
    PerfilusuarioPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserProxy,
    Proxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { content: ''; }
