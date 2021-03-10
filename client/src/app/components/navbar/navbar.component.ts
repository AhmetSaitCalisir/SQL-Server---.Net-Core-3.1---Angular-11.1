import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  girisYapilmis() {
    return !!localStorage.getItem('jwt');
  }

  cikisYap() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isim');
    localStorage.removeItem('soyisim');
  }
}
