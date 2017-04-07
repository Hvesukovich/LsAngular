import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { GalvnajaAdminAkkardionComponent } from './galvnaja-admin-akkardion/galvnaja-admin-akkardion.component';
import { AdminkaNapolnenieYprajneniaRedactirovanieComponent } from './adminka-napolnenie-yprajnenia-redactirovanie/adminka-napolnenie-yprajnenia-redactirovanie.component';
import { RChasteiTelaComponent } from './r-chastei-tela/r-chastei-tela.component';
import { RGrupMishcComponent } from './r-grup-mishc/r-grup-mishc.component';
import { RMishciComponent } from './r-mishci/r-mishci.component';
import { RSnaradiComponent } from './r-snaradi/r-snaradi.component';
import { RAntropometricheskieDannieComponent } from './r-antropometricheskie-dannie/r-antropometricheskie-dannie.component';
import { RVidiNagruzkiComponent } from './r-vidi-nagruzki/r-vidi-nagruzki.component';
import { RTipiUprajneniiComponent } from './r-tipi-uprajnenii/r-tipi-uprajnenii.component';
import { TestsComponent } from './tests/tests.component';

const ROUTES: Routes = [
  { path: '',           component: LayoutComponent },
  { path: 'layout',    component: LayoutComponent },
  { path: 'glavnaja',    component: GalvnajaAdminAkkardionComponent },
  { path: 'r_chasti_tela',         component: RChasteiTelaComponent },
  { path: 'r-grup-mishc',         component: RGrupMishcComponent },
  { path: 'r-mishci',         component: RMishciComponent },
  { path: 'r-snaradi',         component: RSnaradiComponent },
  { path: 'r-antropometricheskie-dannie',         component: RAntropometricheskieDannieComponent },
  { path: 'r-vidi-nagruzki',         component: RVidiNagruzkiComponent },
  { path: 'r-tipi-uprajnenii',         component: RTipiUprajneniiComponent },
  { path: 'r_yprajnenija',    component: AdminkaNapolnenieYprajneniaRedactirovanieComponent },
  { path: 'tests',    component: TestsComponent },
  { path: '**',         component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


