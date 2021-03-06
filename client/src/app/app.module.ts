import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AnasayfaKartComponent } from './components/anasayfa-kart/anasayfa-kart.component';
import { KayarMenuComponent } from './components/kayar-menu/kayar-menu.component';
import { AltMenuComponent } from './components/alt-menu/alt-menu.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AnasayfaComponent, AnasayfaKartComponent, KayarMenuComponent, AltMenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
