# Routes

Router Merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

### Multi Page Application

Merupakan tradisional web app dimana perlu memuat ulang seluruh halanam web setiap kali membuat permintaan baru.

### Single Page Application

Merupakan jenis aplikasi website dimaana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

### Keunggulan SPA dan MPA

| Single Page Application                |                                       Multi Page Application                                       |
| -------------------------------------- | :------------------------------------------------------------------------------------------------: |
| Waktu loading website jauh lebih cepat |                              SEO website jauh lenbih mudah dioptimasi                              |
| Tidak ada query tambahan ke server     |             Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan berbeda              |
| Front-end yang cepat dan responsif     | Menggunakan tools analisis seperti google analytic yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (UX)  |                                                                                                    |

## React Router

Instalasi : **npm install react-router-dom --save**

### BrowserRouter

Digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Didalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

### Route

Digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web.

- Attribute **path** = url pada browser pada proses routing.
- Attribute **component** = suatu komponen yang akan ditampilkan saat mengakses path yang didefinisikan.

### Switch

Digunakan untuk membungkus kumpulan beberapa component route.

- **exact** bertugas memastikan route hanya merender component yang memiliki <u> path yang cocok</u> , jika tidak ada yang cocok maka route yang akan dirender yaitu route terakhir dengan component <u>Notfound</u>

### Link

Digunakan untuk berpindah antar halaman, property **to** merujuk pada path di route yang akan dituju.  
Element kosong <></> tersebut dapat membungkus child element tanpa menambahkan node ke dalam DOM.

### Contoh Penggunaan BrowserRouter, Route, Switch, dan Link

[![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/3wGKLkhH/Screenshot-2022-05-28-064534.png)](https://postimg.cc/yJV4xYWf)
[![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/vmwN7THj/Screenshot-2022-05-28-064534.png)](https://postimg.cc/pmkCR2jY)

## Use URL Parameter

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. **Contoh URL param** :

- /movie/titanic
  -/komik/naruto

[![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/kM6sX8Cm/Screenshot-2022-05-28-064534.png)](https://postimg.cc/bdPkmZdC)

### this.props.match.params

[![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/T1Nv9DkG/Screenshot-2022-05-28-064534.png)](https://postimg.cc/JHXF7GVd)
[![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/43xM8d9x/Screenshot-2022-05-28-064534.png)](https://postimg.cc/QFv0Cjm2)

### Perbedaan Link dan Redirect

| Link                                                                                                |                                              Redirect                                               |
| --------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------: |
| Dapat digunakan pada kondisi apapun                                                                 |                               Lebih sering digunakan pada halaman 404                               |
| Memberikan history baru pada browser                                                                |                                    Menimpa history pada browser                                     |
| Bereaksi dengan click seperti a hef                                                                 |                                Bereaksi dengan dengan suatu kondisi                                 |
| ![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/rsmDh59w/Screenshot-2022-05-28-064534.png) | ![Screenshot-2022-05-28-064534.png](https://i.postimg.cc/qq3TMRJG/Screenshot-2022-05-28-064534.png) |
