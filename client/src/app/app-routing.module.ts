import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { GirisComponent } from './pages/giris/giris.component';

const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'giris', component: GirisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
