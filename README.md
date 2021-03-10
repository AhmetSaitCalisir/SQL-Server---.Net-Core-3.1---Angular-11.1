# Kurulum

## Veri Tabanı (Database)

1. Database/SoftwareARGEDB.bak dosyasını SQL Server'ınıza kurunuz. ([Detaylı Video](https://youtu.be/mRI8vpn-tyk))
   1. SQL Server Management Studio programını açınız. (2014 ve üzeri)
   1. Databases'a sağ tıklayıp
   1. Restore Database..'e tıklayınız
   1. Source seçeneğini Device'a alınız
   1. Link olarak indirdiğiniz dosyadaki Database/SoftwareARGEDB.bak'ı veriniz.
   1. OK butonuna basınız. (Database adını değiştirmeyiniz)

## Server

Server dosyası içerisindeki appsettings.json dosyasının 3. satırında bulunan:

```
"SoftwareARGEAppCon": "Data Source=.\\SQLExpress; Initial Catalog=SoftwareARGEDB; Integrated Security=true"
```

koddaki Data Source=**\***; yazan kısımdaki yıldızlı yer yerine kendi cihazınızdaki SQL SERVER NAME'i yazınız.

## Client

1. Client dosyasını çıkarttığınız konuma cmd ile geliniz.

```
npm i
```

2. Komutunu cmd'ye yazarak node_modules klasörüne gerekli dosyaların yüklenmesini bekleyin.

# Başlatma

## Server

SQL-Server---.Net-Core-3.1---Angular-11.1\Server\bin\Debug\netcoreapp3.1\Server.exe

Dosyasını çalıştırarak backend'i çalıştırın.

Çalıştırdıktan sonra denemek için [localhost](https://localhost:5001/api/DataBase/AnaSayfa)'unuza istekte bulunabilirsiniz.

## Client

Cmd ile Client dosyasının bulunduğu dizine gelin

```
ng serve -o
```

Komutunu yazıp client'in açılmasını bekleyin.

# Kullanım

## 1. Giriş

Öncelikle CRUD işlemleri için giriş yapmalısınız.
Bunun için sağ üstten Giriş'e tıklayın.

Giriş ekranında eğer şifreleri bilmiyorsanız alttaki Şifre Göster butonuna tıklayıp şifre ve kullanıcı adlarına erişebilirsiniz.

## 2. Dukkan Ekleme

Giriş yaptıktan sonra navbar'da Dukkan yazısına tıkayarak açılan dropdown'dan Dukkan Ekle seçeneğine tıklayarak dükkan ekleme sayfasına ulaşabilirsiniz.

## 3. Dükkan Silme ve Güncelleme

Navbarda bulunan dukkan yazısına tıklayarak açtığımız dropdown'daki dukkanlar yazısına tıklayarak dükkanlar sayfasını açınız. Silmek ve güncellemek istediğiniz dukkanın altındaki Detayları Göster'e tıklayarak o dükkanın sayfasına gidiniz.

Soldan İşlemler bölümünü seçiniz. Ekrandaki butonlar yardımıyla silme veya güncelleme işlemlerini gerçekleştirebilirsiniz.
