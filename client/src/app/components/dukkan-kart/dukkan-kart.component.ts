import { Component, Input, OnInit } from '@angular/core';
import { DukkanKart } from 'src/app/models/Dukkan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dukkan-kart',
  templateUrl: './dukkan-kart.component.html',
  styleUrls: ['./dukkan-kart.component.css'],
})
export class DukkanKartComponent implements OnInit {
  @Input() dukkan: DukkanKart = new DukkanKart();
  star: boolean[] = [];
  constructor(private router: Router) {}
  dukkanLink: string = '/';

  ngOnInit(): void {
    for (let index = 1; index < 4; index++) {
      if (index <= this.dukkan.Yildiz) {
        this.star.push(true);
      } else {
        this.star.push(false);
      }
    }
    this.dukkanLink = `dukkan/${this.dukkan.DukkanID}`;
  }
  Git() {
    this.router.navigate([this.dukkanLink]);
  }

  Aciklama(): string {
    if (this.dukkan.Yildiz == 1) {
      return 'Büfe tarzı küçük boyutlu işletme';
    } else if (this.dukkan.Yildiz == 2) {
      return 'Bakkal tarzı orta boyutlu işletme.';
    } else if (this.dukkan.Yildiz == 3) {
      return 'AVM tarzı büyük boyutlu işletme.';
    } else {
      return '';
    }
  }
}
