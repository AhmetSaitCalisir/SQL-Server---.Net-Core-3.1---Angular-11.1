import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DukkanIslem } from 'src/app/models/Dukkan';
import { Musteri } from 'src/app/models/Musteri';
import { DukkanService } from 'src/app/services/dukkan.service';
import { MusteriService } from 'src/app/services/musteri.service';

@Component({
  selector: 'app-dukkan-guncelle',
  templateUrl: './dukkan-guncelle.component.html',
  styleUrls: ['./dukkan-guncelle.component.css'],
})
export class DukkanGuncelleComponent implements OnInit {
  dukkanID: number = 0;
  dukkan: DukkanIslem = new DukkanIslem();
  musteriler: Musteri[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dukkanService: DukkanService,
    private musteriService: MusteriService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.dukkanID = routeParams['ID'];
      this.dukkanService.dukkanGetir(this.dukkanID).subscribe((res) => {
        console.log(this.dukkan);
        this.dukkan.Donustur(res[0]);
        console.log(this.dukkan);
      });
    });
    this.musteriService.musterileriGetir().subscribe((res) => {
      this.musteriler = res;
    });
  }
  Guncelle() {
    this.dukkanService.dukkanGuncelle(this.dukkanID, this.dukkan).subscribe(
      (res) => {
        alert('Dükkan Güncellendi');
        this.router.navigate(['dukkanlar']);
      },
      (err) => {
        alert('Hata Meydana Geldi');
        console.log(err);
        this.router.navigate(['dukkanlar']);
      }
    );
  }
}
