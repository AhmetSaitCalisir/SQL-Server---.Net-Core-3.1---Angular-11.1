import { Component, OnInit } from '@angular/core';
import { AnaSayfaKart } from 'src/app/models/Dukkan';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
})
export class AnasayfaComponent implements OnInit {
  dukkanlar: AnaSayfaKart[] = [];
  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.kartAnasayfa().subscribe((res) => {
      this.dukkanlar = res;
      console.log(res);
    });
  }
}
