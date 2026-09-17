# Kıymık Ailesi — Proje Sunum Sitesi

Ratel Dijital'in 6–9 yaş için geliştirdiği 2D animasyon projesinin Türkçe sunum sitesi.

## İçerik

- Hareketli konsept görselle açılış ve hareketi durdurma seçeneği.
- Hikâye dünyası, marangoz atölyesi ve üç kuşak arasındaki bağ.
- Dokuz karakterin seçilebilir tanıtımı; klavye ile erişilebilen karakter sekmeleri.
- İlk bölümün dört aşamalı hikâye akışı ve açılabilir bilmece cevabı.
- On iki ek hikâyenin kartları ve ayrıntılı sinopsisleri.
- Anlatım yaklaşımı, hikâyelerin taşıdığı değerler, Eskişehir bağlantısı ve proje künyesi.
- Mobil menü, azaltılmış hareket tercihi ve yerel görsel/font dosyaları.

## GitHub Pages

Bu site statiktir. Sunucu, derleme ve kurulum gerektirmez.

1. Bu depodaki tüm site dosyaları depo kökündedir. `index.html` doğrudan depo kökünde bulunur. `index.html` doğrudan depo kökünde olmalıdır.
2. Depoda Settings → Pages → Build and deployment bölümünü açın.
3. Source: **Deploy from a branch**, Branch: **main**, Folder: **/(root)** olarak seçip kaydedin.
4. GitHub Pages'in gösterdiği yayın adresini kullanın.

Görseller ve fontlar `assets` klasörüyle birlikte yüklenmelidir. `.nojekyll` dosyası depoya dahildir. Yol tanımları görecelidir; GitHub Pages'in depo alt yolunda çalışır.

## Dosyalar

- `index.html`: Sayfa yapısı ve ana anlatı.
- `styles.css`: Masaüstü, tablet, mobil ve yazdırma stilleri.
- `app.js`: Karakter sekmeleri, hikâye pencereleri ve menü davranışları.
- `content-data.js`: Kaynak dosyadaki 12 sinopsis.
- `assets`: Üç WebP konsept görsel, Nunito fontları ve font lisansı.

Görseller proje sunumu için üretilmiş konsept çalışmalardır; nihai karakter ve mekân tasarımları olarak sunulmamıştır. Özgün dosyada kesinleştirilmemiş sezon sayısı, yayın takvimi, bütçe veya yayıncı taahhüdü eklenmemiştir.

Senarist: İlkay Noylan. Yapımcı: Ratel Dijital / Özgür Ariç.

© 2026 Ratel Dijital. Projeye ait tüm hakları saklıdır. Nunito fontu kendi SIL Open Font License koşullarıyla dağıtılır; `assets/FONT-LICENSE.txt` dosyasına bakınız.
