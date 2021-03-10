import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AnasayfaKartComponent } from './components/anasayfa-kart/anasayfa-kart.component';
import { KayarMenuComponent } from './components/kayar-menu/kayar-menu.component';
import { AltMenuComponent } from './components/alt-menu/alt-menu.component';
import { GirisComponent } from './pages/giris/giris.component';
import { DukkanlarComponent } from './pages/dukkanlar/dukkanlar.component';
import { DukkanKartComponent } from './components/dukkan-kart/dukkan-kart.component';
import { DukkanComponent } from './pages/dukkan/dukkan.component';
import { DukkanEkleComponent } from './pages/dukkan-ekle/dukkan-ekle.component';
import { DukkanGuncelleComponent } from './pages/dukkan-guncelle/dukkan-guncelle.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnasayfaComponent,
    AnasayfaKartComponent,
    KayarMenuComponent,
    AltMenuComponent,
    GirisComponent,
    DukkanlarComponent,
    DukkanKartComponent,
    DukkanComponent,
    DukkanEkleComponent,
    DukkanGuncelleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
