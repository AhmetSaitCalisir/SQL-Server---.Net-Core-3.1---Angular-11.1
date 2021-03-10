export class AnaSayfaKart {
  constructor(
    public Bolge: string = 'Bölge Yükleniyor...',
    public Sehir: string = 'Şehir Yükleniyor...',
    public Ilce: string = 'İlçe Yükeleniyor...',
    public Isim: string = 'Dükkan İsmi Yükleniyor...',
    public Yildiz: number = 0
  ) {}
}

export class DukkanKart {
  constructor(
    public DukkanID: number = 0,
    public DukkanIsim: string = 'Dükkan İsmi Yükleniyor',
    public AdresID: number = 0,
    public SahipID: number = 0,
    public Yildiz: number = 0,
    public Bolge: string = 'Bölge Yükleniyor...',
    public Sehir: string = 'Şehir Yükleniyor...',
    public Ilce: string = 'İlçe Yükeleniyor...',
    public MusteriIsim: string = 'Dükkan Sahibi Yükleniyor...',
    public Soyisim: string = 'Dükkan Sahibi Yükleniyor...'
  ) {}
}
export class Dukkan {
  constructor(
    public Bolge: string = 'Bölge Yükleniyor...',
    public Sehir: string = 'Yükleniyor...',
    public Ilce: string = 'Yükleniyor...',
    public Mahalle: string = 'Yükleniyor...',
    public Sokak: string = 'Yükleniyor...',
    public No: number = 0,
    public DukkanID: number = 0,
    public DukkanIsim: string = 'Yükleniyor...',
    public AdresID: number = 0,
    public SahipID: number = 0,
    public DukkanTel: string = 'Yükleniyor...',
    public DukkanMail: string = 'Yükleniyor...',
    public Yildiz: number = 0,
    public MusteriIsim: string = 'Yükleniyor...',
    public Soyisim: string = 'Yükleniyor...',
    public MusteriTel: string = 'Yükleniyor...',
    public MusteriMail: string = 'Yükleniyor...'
  ) {}
}

export class DukkanIslem {
  constructor(
    public DukkanIsim: string = '',
    public DukkanSahipID: number = 0,
    public DukkanTel: string = '',
    public DukkanMail: string = '',
    public DukkanYildiz: number = 0,
    public AdresBolge: string = '',
    public AdresSehir: string = '',
    public AdresIlce: string = '',
    public AdresMahalle: string = '',
    public AdresSokak: string = '',
    public AdresNo: number = 0
  ) {}

  public Donustur(dukkan: Dukkan) {
    this.DukkanIsim = dukkan.DukkanIsim;
    this.DukkanSahipID = dukkan.SahipID;
    this.DukkanTel = dukkan.DukkanTel;
    this.DukkanMail = dukkan.DukkanMail;
    this.DukkanYildiz = dukkan.Yildiz;
    this.AdresBolge = dukkan.Bolge;
    this.AdresSehir = dukkan.Sehir;
    this.AdresIlce = dukkan.Ilce;
    this.AdresMahalle = dukkan.Mahalle;
    this.AdresSokak = dukkan.Sokak;
    this.AdresNo = dukkan.No;
  }
}
