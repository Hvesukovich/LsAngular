import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ClickHistoryService } from './services/click-history.service';
import { UserInfoService } from './services/user-info.service';
import { YprajnenijaService } from './services/yprajnenija.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GalvnajaAdminAkkardionComponent } from './galvnaja-admin-akkardion/galvnaja-admin-akkardion.component';
import { AdminkaNapolnenieYprajneniaDobavlenie2Component } from './adminka-napolnenie-yprajnenia-dobavlenie2/adminka-napolnenie-yprajnenia-dobavlenie2.component';
import { AdminkaNapolnenieYprajneniaRedactirovanieComponent } from './adminka-napolnenie-yprajnenia-redactirovanie/adminka-napolnenie-yprajnenia-redactirovanie.component';
import { RChasteiTelaComponent } from './r-chastei-tela/r-chastei-tela.component';
import { RGrupMishcComponent } from './r-grup-mishc/r-grup-mishc.component';
import { RMishciComponent } from './r-mishci/r-mishci.component';
import { RSnaradiComponent } from './r-snaradi/r-snaradi.component';
import { RAntropometricheskieDannieComponent } from './r-antropometricheskie-dannie/r-antropometricheskie-dannie.component';
import { RVidiNagruzkiComponent } from './r-vidi-nagruzki/r-vidi-nagruzki.component';
import { RTipiUprajneniiComponent } from './r-tipi-uprajnenii/r-tipi-uprajnenii.component';
import { LayoutComponent } from './layout/layout.component';
import { TestsComponent } from './tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GalvnajaAdminAkkardionComponent,
    AdminkaNapolnenieYprajneniaDobavlenie2Component,
    AdminkaNapolnenieYprajneniaRedactirovanieComponent,
    RChasteiTelaComponent,
    RGrupMishcComponent,
    RMishciComponent,
    RSnaradiComponent,
    RAntropometricheskieDannieComponent,
    RVidiNagruzkiComponent,
    RTipiUprajneniiComponent,
    LayoutComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ClickHistoryService,
    UserInfoService,
    YprajnenijaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
