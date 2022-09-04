## BOOTSTRAP

Link : **https://getbootstrap.com/**

### Cara menggunakan bootstrap dengan CDN

- Letakkan link berikut di dalam tag head

  | Description | URL |
  | ----------- | ----------- |
  | CSS | https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css |
  | JSS | https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js |
### Contoh Class pada Bootstrap
- Container = Sebagai pembungkus konten
  1. Class container = pembungkus yang mempunyai lebar akan berubah pada setiap breakpoint.
  2. Class container-fluid = pembungkus berukuran penuh
- button = membuat tombol
  1. btn-primary = berwarna biru
  2. btn-succes = berwarna hijau
  3. btn-danger = berwarna merah

> Untuk merubah warna default dari bootstrap bisa menggunakan !important

### Grid
Grid sistem membagi lebar halaman menjadi 12 bagian.  
Sehingga apabila menggunakan class col-8, maka lebarnya akan menjadi 8/12.
<<<<<<< HEAD
contoh :
div.container
  div.row  
    div.col-8
    /div
    div.col-4
    /div
  /div
/div

### Form
1. class form-group = untuk membungkus setiap elemen pada form 
2. class form-control = untuk style pada setiap elemen input
3. .form-control-lg, .form-control-sm =  mengubah ketinggian input teks 
4. .is-invalid dan .is-valid = untuk mengatur style validasi
=======
- contoh :
  div.container  
  div.row  
    div.col-8  
    /div  
    div.col-4  
    /div  
  /div  
/div  

### Form
1. .form-group = untuk membungkus setiap elemen pada form 
2. .form-control = untuk style pada setiap elemen input
3. .form-inline = menempatkan form dalam satu baris
4. .form-control-lg, .form-control-sm =  mengubah ketinggian input teks 
5. .is-invalid dan .is-valid = untuk mengatur style validasi
>>>>>>> 727add9eca0a7e8ee4202bad0bbb5d7266f75d13
