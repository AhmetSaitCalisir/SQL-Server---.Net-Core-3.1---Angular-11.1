import { Component, OnInit } from '@angular/core';
import { DukkanIslem } from 'src/app/models/Dukkan';
import { Musteri } from 'src/app/models/Musteri';
import { DukkanService } from 'src/app/services/dukkan.service';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-dukkan-ekle',
  templateUrl: './dukkan-ekle.component.html',
  styleUrls: ['./dukkan-ekle.component.css'],
})
export class DukkanEkleComponent implements OnInit {
  dukkan: DukkanIslem = new DukkanIslem();
  musteriler: Musteri[] = [];
  constructor(
    private musteriService: MusteriService,
    private dukkanService: DukkanService
  ) {}

  ngOnInit(): void {
    this.musteriService.musterileriGetir().subscribe((res) => {
      this.musteriler = res;
    });
  }

  olustur() {
    this.dukkanService.dukkanOlustur(this.dukkan).subscribe(
      (res) => {
        console.log('Res=>');
        console.log(res);
        alert('Eklendi Geliba');
      },
      (err) => {
        console.log('Err=>');
        console.log(err);
      }
    );
  }
}
