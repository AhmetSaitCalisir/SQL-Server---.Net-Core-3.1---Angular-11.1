import { DukkanKart } from './../../models/Dukkan';
import { Component, OnInit } from '@angular/core';
import { DukkanService } from 'src/app/services/dukkan.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dukkanlar',
  templateUrl: './dukkanlar.component.html',
  styleUrls: ['./dukkanlar.component.css'],
})
export class DukkanlarComponent implements OnInit {
  dukkanlar: DukkanKart[] = [];

  constructor(private dukkanService: DukkanService, private router: Router) {}

  ngOnInit(): void {
    this.dukkanService.dukkanlariGetir().subscribe(
      (res) => {
        this.dukkanlar = res;
      },
      (err) => {
        if (err.status == 401) {
          alert('Giriş Yapmanız Gerekmektedir');
          localStorage.removeItem('jwt');
          this.router.navigate(['giris']);
        }
      }
    );
  }
}
