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
contoh :
<div class="container">
  <div class="row">
    <div class="col-8">
      Column
    </div>
    <div class="col-4">
      Column
    </div>
  </div>
</div>