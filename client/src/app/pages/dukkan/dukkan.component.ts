import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dukkan } from 'src/app/models/Dukkan';
import { DukkanService } from 'src/app/services/dukkan.service';

@Component({
  selector: 'app-dukkan',
  templateUrl: './dukkan.component.html',
  styleUrls: ['./dukkan.component.css'],
})
export class DukkanComponent implements OnInit {
  dukkanID: number = 0;
  dukkan: Dukkan = new Dukkan();

  constructor(
    private activeRoute: ActivatedRoute,
    private dukkanService: DukkanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.dukkanID = routeParams['ID'];
      this.dukkanService.dukkanGetir(this.dukkanID).subscribe((res) => {
        this.dukkan = res[0];
        console.log(res[0]);
        console.log(this.dukkan);
      });
    });
  }
  Sil() {
    this.dukkanService.dukkanSil(this.dukkanID).subscribe(
      (res) => {
        alert('Dükkan Silindi');
        this.router.navigate(['dukkanlar']);
      },
      (err) => {
        alert('Bir hata meydana geldi');
        console.log(err);
        this.router.navigate(['dukkanlar']);
      }
    );
  }
  Guncelle() {
    this.router.navigate([`dukkanguncelle/${this.dukkanID}`]);
  }
}
