## Build React App

Secara default, React mengandung banyak pesan peringatan yang sangat **berguna dalam pengembangan aplikasi**. namun pesan tersebut membuat React menjadi **besar dan lambat**. Olehh karena itu kita harus menggunakan versi production ketika men-deploy aplikasi.

_**Tujuan** melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat_

### Build React App

Perintah : **npm run build**

[![Capture.png](https://i.postimg.cc/Cx2Kywsp/Capture.png)](https://postimg.cc/0zpvDR4V)

### Run Optimized App

Untuk menjalankan aplikasi yang optimal di lokal komputer kita, dapan menggunakan **serve**

[![Capture.png](https://i.postimg.cc/TP18jbzr/Capture.png)](https://postimg.cc/NK3PBKfM)

## Deployment

Merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang.

### 1. Deployment dengan Surge

Surge adalah layanan penerbit website static gratis untuk Front-End Developers. Nantinya akan memiliki subdomain \*surge.sh

#### Menginstall Surge

1. **npm install --global surge** di terminal.
2. Jalankan perintah **surge** di terminal  
   [![Capture.png](https://i.postimg.cc/SRVPnPH4/Capture.png)](https://postimg.cc/YLGRVdpD)

#### Teardown Surge

Terkadang kita tidak ingin mempublikasikan sebagian domain atau subdomain. untuk itu kita bisa teardown sebuah project agar project kita menjadi offline.

[![Capture.png](https://i.postimg.cc/TwydTrsC/Capture.png)](https://postimg.cc/LYpKTZ21)

### 2. Deployment dengan Netlify CLI

Netlify adalah salahsatu platform penyedia layanan build tools sekaligus Continous Development. Netlify sudah terintegrasi dengan Git host Populer seperti Github, Gitlab dan Bitbucket.

#### Menginstall Netlify

1. Buat akun Netlify (www.netlify.com)
2. **npm install netlify-cli -g** di terminal.
3. Jalankan perintah **netlify deploy** di terminal  
   [![Capture.png](https://i.postimg.cc/y6y9JRYv/Capture.png)](https://postimg.cc/0rrrFbSw)
4. Verify akun melalui browser, pilih **Authorize**  
   [![Capture.png](https://i.postimg.cc/3Rcwp3Vr/Capture.png)](https://postimg.cc/8JLDggTx)
5. Pilih **"Create & configure a new site"**.  
   Untuk team, pilih yang sudah tersedia. Site name opsional  
   [![Capture.png](https://i.postimg.cc/1X4488z3/Capture.png)](https://postimg.cc/fSnMFTXG)
