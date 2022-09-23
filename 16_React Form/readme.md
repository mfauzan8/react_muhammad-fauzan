# REACT FORM

Form digunakan untuk menghandle inputan dari user. Form banyak dijumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data.

## Contoh Beberapa Form

| Nama Element | Kegunaan                                                 |                              Contoh penggunaan                               |
| ------------ | -------------------------------------------------------- | :--------------------------------------------------------------------------: |
| Input        | Digunakan inputan yang tidak terlalu panjang             | [![1.png](https://i.postimg.cc/CMXKJ1FH/1.png)](https://postimg.cc/ThjG3T5p) |
| Textarea     | Digunakan inputan yang cukup panjang                     | [![1.png](https://i.postimg.cc/Ghg6v8dd/1.png)](https://postimg.cc/9rTxhfDn) |
| Select       | Digunakan untuk inputan yang pilihannya sudah ditentukan | [![1.png](https://i.postimg.cc/TP1q89sW/1.png)](https://postimg.cc/4KChVzsJ) |
| Radiobutton  | Untuk memilih 1 pilihan menggunakan radiobutton          | [![1.png](https://i.postimg.cc/wMM7Mfhh/1.png)](https://postimg.cc/m1xb6SpD) |
| Checkbox     | Untuk memilih lebih dari 1 pilihan menggunakan checkbox  | [![1.png](https://i.postimg.cc/3N8bvpRj/1.png)](https://postimg.cc/ZBQckW60) |

## Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian komponen react yang me-render sebuah form tersebut pada masukan pengguna selanjutnya.

**Controlled Component** adalah Sebuah elemen masukan form yang nilainya dikontrol oleh React.

Sebuah **controlled input** menerima nilai saat ini sebagai peserta colback untuk mengubah nilai tersebut. Pendekatan ini merupakan cara yang lebih "React Way" (yang tidak berarti harus selalu menggunakannya).

[![1.png](https://i.postimg.cc/XvXD7BLG/1.png)](https://postimg.cc/v1Fv0Bpb)

Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya komponen yang merender input **(form component)** menyimpan di statenya.

### Flow Controlled Component

[![1.png](https://i.postimg.cc/kMKw96L4/1.png)](https://postimg.cc/RqCwLFS5)  
Setiap kali kita mengetik karakter baru, **handleNameChange** dipanggil. Dibutuhkan nilai baru dari input dan mengaturnya di state.

```
Controlled Component dapat merespon perubahan yang berada pada form input dengan segera.
```

### Textarea

[![1.png](https://i.postimg.cc/BntKYvkq/1.png)](https://postimg.cc/87QcsTT3)  
Di React, Textarea menggunakan atribut value yang ditulis dengan cara mirip dengan sebuah form yang menggunakan input satu baris.

### Select

[![1.png](https://i.postimg.cc/s22CZv6R/1.png)](https://postimg.cc/gx1TCkbM)  
Alih - alih menggunakan atribut selected, kita menggunakan atribut value di tag select. hal ini lebih mudah karena hanya perlu di ubah di satu tempat saja.

### Handle banyak input

#### Atribut Name

Penanganan banyak element dapat dilakukan dengan menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.  
[![1.png](https://i.postimg.cc/bw5drcgL/1.png)](https://postimg.cc/0zp9X4LJ)

#### Handle Inputnya

[![1.png](https://i.postimg.cc/pXggLs8z/1.png)](https://postimg.cc/bs966Hmw)

## Uncontrolled Component

Input yang tidak terkontrol seperti **input formulir HTML tradisional**. kita kemudian bisa mendapatkan nilainya menggunakan **Ref** misalnya di tombol ditambahkan **onclick Handler**.  
[![1.png](https://i.postimg.cc/wvZyNZDc/1.png)](https://postimg.cc/k6Ng3j1B)  
Kita harus menarik nilai dari field saat kita membutuhkannya ini bisa terjadi ketika formulir di saat submit. Namun uncontrolled input tidak powerfull

## Validation

### Kenapa Perlu Validation ?

- **Mencari input data yang benar dan sesuai format.** Sebuah web/aplikasi tidak dapat berjalan dengan benar jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- **Melindungi akun pengguna.** Misalnya membuat pengguna untuk memasukkan data password yang aman
- **Melindungi sistem/aplikasi.** validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem atau aplikasi

### Client-side validation

Validasi yang dilakukan pada sisi client(Browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server

Kelebihan validasi sisi client yaitu jika terjadi kesalahan pengguna akan langsung diberitahu dan tidak perlu menunggu respon dari server

#### Validasi Sisi client terbagi dua :

- Built-in form validation = yaitu menggunakan fitur validasi langsung dari HTML.  
  contoh : **required, minlength, maxlength, min, max, type dan pattern**
- Menggunakan JavaScript = yaitu membuat pali dasi from dapat di kostumisasi tetapi perlu membuatnya sendiri

### Server side validation

Validasi yang dilakukan pada sisi server bertugas untuk validasi data kembali sebelum disimpan di database. Jika ditemukan kesalahan maka respon akan dikirim kembali ke klien berupa koreksi atas kesalahan yang dibuat oleh pengguna

### Built-in form Validation

| Validation            | Kegunaan                                                                           |                              Contoh Penggunaan                               |
| --------------------- | ---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------: |
| Required              | Menentukan field form perlu diisi sebelum formulir dapat dikirimkan                | [![1.png](https://i.postimg.cc/hGWzgrwZ/1.png)](https://postimg.cc/Wd8bwMs0) |
| Minlength & Maxlength | Menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan               | [![1.png](https://i.postimg.cc/mkXj6qm5/1.png)](https://postimg.cc/D4G1SCkr) |
| Min & Max             | Menentukan nilai minimum dan maksimum angka yang bisa dimasukkan                   | [![1.png](https://i.postimg.cc/L5Yg2bH7/1.png)](https://postimg.cc/K3b85Q3r) |
| Type                  | Menentukan apakah data berupa angka email atau type yang lainnya                   | [![1.png](https://i.postimg.cc/Kc65qdrC/1.png)](https://postimg.cc/grKRrt7K) |
| Pattern               | Menentukan regular expression yang mendefinisikan pola data yang boleh dimasukkan. | [![1.png](https://i.postimg.cc/fbPd3981/1.png)](https://postimg.cc/DWq0H8kc) |

### Menggunakan Javascript

- Ketika ada perubahan di form, akan men-trigger event onchange. Real-time berdasarkan perubahan data namun fungsi validasi akan terus dipanggil selama ada perubahan. Dapat dikombinasikan dengan disable button
- Ketika menekan tombol submit, akan men-trigger event onSubmit. Kelebihannya validasi cukup sekali namun tidak akan real-time validasi form

#### Contoh Penggunaan

[![1.png](https://i.postimg.cc/zvy74NVR/1.png)](https://postimg.cc/RJzwnj1M)  
[![1.png](https://i.postimg.cc/QCq76nqW/1.png)](https://postimg.cc/zHV3v76J)
