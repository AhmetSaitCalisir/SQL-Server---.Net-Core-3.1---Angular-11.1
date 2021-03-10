import { AuthenticationGuardService } from './guards/authentication-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { DukkanlarComponent } from './pages/dukkanlar/dukkanlar.component';
import { GirisComponent } from './pages/giris/giris.component';
import { DukkanComponent } from './pages/dukkan/dukkan.component';
import { DukkanEkleComponent } from './pages/dukkan-ekle/dukkan-ekle.component';
import { DukkanGuncelleComponent } from './pages/dukkan-guncelle/dukkan-guncelle.component';

const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  {
    path: 'giris',
    component: GirisComponent,
  },
  {
    path: 'dukkanlar',
    component: DukkanlarComponent,
    canActivate: [AuthenticationGuardService],
  },
  {
    path: 'dukkan/:ID',
    component: DukkanComponent,
    canActivate: [AuthenticationGuardService],
  },
  {
    path: 'dukkanekle',
    component: DukkanEkleComponent,
    canActivate: [AuthenticationGuardService],
  },
  {
    path: 'dukkanguncelle/:ID',
    component: DukkanGuncelleComponent,
    canActivate: [AuthenticationGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
