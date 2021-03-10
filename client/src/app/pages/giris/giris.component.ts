import { Kullanici } from './../../models/Kullanici';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css'],
})
export class GirisComponent implements OnInit {
  kullanici: Kullanici = new Kullanici();
  hatirla: boolean = false;
  hatali: boolean = false;
  deneme: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.kullanici.UN = localStorage.getItem('UN') || '';
    if (localStorage.getItem('jwt')) {
      alert('Zaten giriş yapmış durumdasınız');
      this.router.navigate(['/']);
    }
  }

  GirisYap() {
    this.authenticationService.girisYap(this.kullanici).subscribe(
      (res) => {
        const token = (<any>res).Token;
        this.kullanici.ID = (<any>res).Kullanici[0].ID;
        this.kullanici.Isim = (<any>res).Kullanici[0].Isim;
        this.kullanici.Soyisim = (<any>res).Kullanici[0].Soyisim;
        localStorage.setItem('jwt', token);
        localStorage.setItem('isim', this.kullanici.Isim);
        localStorage.setItem('soyisim', this.kullanici.Soyisim);
        if (this.hatirla) {
          localStorage.setItem('UN', this.kullanici.UN);
        } else {
          localStorage.removeItem('UN');
        }
        alert(`Hoş geldiniz ${this.kullanici.Isim} ${this.kullanici.Soyisim}`);
        this.router.navigate(['/']);
      },
      (err) => {
        this.hatali = true;
        this.kullanici.Sifre = '';
      }
    );
  }
  Goruntule() {
    this.deneme = !this.deneme;
  }
}
