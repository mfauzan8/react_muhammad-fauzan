# TESTING

**Testing** adalah proses **memverifikasi** bahwa tes assertions kita benar dan tetap benar sepanjang masa aplikasi. **Test assertions** ini adalah **ekspresi boolean** yang mengembalikan nilai true kecuali ada bug di kode kita.

### Manfaat Testing :

- Ketika aplikasi kita mempunyai coverage yang baik(mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya

- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug ,tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug

### Kategori Testing

1. **Rendering component trees** : di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya kita akan fokus di bagian ini

2. **Menjalankan aplikasi lengkap** : di dalam environment peramban (browser) ini dikenal sebagai tes "end-to-end"

### Pertimbangan Memilih Perkakas

- #### Kecepatan iterasi vs Environment yang realistis

  Beberapa perkakas menawarkan feedback Loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban yang tepat. Tools lain mungkin menggunakan environment peramban asli tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan

- #### Seberapa banyak Mock
  Dengan komponen perbedaan antara test **unit** dan test **integrasi** bisa tidak sesuai. Jika kita mengetes sebuah form, Haruskah teks yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian test sendiri? Haruskah refactoring pada tombol merusak test pada form?

> Pertimbangan memilih Perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing

### Rekomendasi Tools

| Tools                     |                                                                                                                                                                                                         Penjelasan                                                                                                                                                                                                          |
| ------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Jest**                  |              Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui JsDOM. Sementara JsDOM hanyalah perkiraan cara kerja browser seringkali cukup baik mengetes komponen pada react. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerfull memiliki mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.              |
| **React Testing Library** | merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksebilitas. Mungkin tidak memberikan cara untuk merender secara dangkal pada sebuah komponen tanpa anak, test runner seperti jest yang memungkinkan kita melakukan mocking. |

_"Jika menginstall React menggunakan **create-react-app**, Jest dan React Testing Library akan secara default sudah terinstall."_

## Create basic testing with RTL

### Render dan Debug

Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu kita baru bisa memiliki akses ke component react yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debat RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL

React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti Manusia itulah alasan kenapa kita melihat struktur html sebagai output dari fungsi render.

[![1.png](https://i.postimg.cc/tCWcpbB3/1.png)](https://postimg.cc/0b5n0TRj)

### Memilih Elemen

React testing library menawarkan berbagai fungsi untuk mendapatkan elemen. Elemen selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL

Salah satu contohnya ialah **getByText** untuk memilih teks dari elemen yang sudah dipilih. getByText secara **default** akan memunculkan error jika element tidak ditemukan.  
[![1.png](https://i.postimg.cc/Z5ZvDP98/1.png)](https://postimg.cc/kB152bvG)

#### Contoh Lain Kategori Testing

```
* LabelText: getByLabelText: <label for="search" />
* PlaceholderText: getByPlaceholderText: <input placeholder="Search"/>
* AltText: getByAltText: <img alt="profile" />
* DisplayValue: getByDisplayValue: <input value="Javascript" />
```

### Handle Asynchronous

| Bagian Code                         |                                    Contoh Code                                     |
| ----------------------------------- | :--------------------------------------------------------------------------------: |
| Fetch data sebuah API               |    [![1.png](https://i.postimg.cc/jdFnRWS9/1.png)](https://postimg.cc/BX2ngnDc)    |
| HTML                                |   [![1a.png](https://i.postimg.cc/bv8yP8kW/1a.png)](https://postimg.cc/HrZD0qS9)   |
| Membuat Mock Axios menggunakan Jest |  [![1aa.png](https://i.postimg.cc/j2VK8bxM/1aa.png)](https://postimg.cc/Q9qRtvW7)  |
| Skenario Berhasil                   | [![1aab.png](https://i.postimg.cc/7YwrbXfJ/1aab.png)](https://postimg.cc/3WSccXj3) |
| Skenario Gagal                      | [![1aac.png](https://i.postimg.cc/L5V7zKnY/1aac.png)](https://postimg.cc/XBpQbPK4) |

## Testing Custom Hook

### Library yang digunakan

Untuk mengetes custom hook, kita menggunakan **React Hooks Testing Library**. Alat tersebut dapat mengetes hooks tanpa merender satu komponen.

Cara Install : **npm install -D @testing-library/react-hooks**  
Dokumentasi : https://react-hooks-testing-library.com/

### Implementasi

[![1.png](https://i.postimg.cc/x1DKHswY/1.png)](https://postimg.cc/dL6kc9QS)  
[![1a.png](https://i.postimg.cc/gJnD4xNP/1a.png)](https://postimg.cc/S2bCxNBZ)  
[![1aa.png](https://i.postimg.cc/NFRRPmXZ/1aa.png)](https://postimg.cc/ct4KvKXc)  
[![1aab.png](https://i.postimg.cc/Dwp46BD8/1aab.png)](https://postimg.cc/VJMNLBz8)
