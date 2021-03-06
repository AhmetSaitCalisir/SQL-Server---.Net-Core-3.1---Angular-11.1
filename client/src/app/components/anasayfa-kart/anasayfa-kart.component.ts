import { Component, OnInit, Input } from '@angular/core';
import { AnaSayfaKart } from 'src/app/models/Dukkan';

@Component({
  selector: 'app-anasayfa-kart',
  templateUrl: './anasayfa-kart.component.html',
  styleUrls: ['./anasayfa-kart.component.css'],
})
export class AnasayfaKartComponent implements OnInit {
  @Input() dukkan: AnaSayfaKart = new AnaSayfaKart();
  star: boolean[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let index = 1; index < 4; index++) {
      if (index <= this.dukkan.Yildiz) {
        this.star.push(true);
      } else {
        this.star.push(false);
      }
    }
  }
}
