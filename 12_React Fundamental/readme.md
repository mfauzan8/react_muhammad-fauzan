# React Fundamental

## JSX

Suatu pengembangan javascript dimana kode HTML bisa di ikut sertakan dalam javascript.

### Perbandingan JSX vs React.createElement

| JSX                                                   |                              React.createElement                               |
| ----------------------------------------------------- | :----------------------------------------------------------------------------: |
| ![React.](https://i.ibb.co/ZSXqWBM/React.png "React") | ![createElement.](https://i.ibb.co/GRgYMt1/create-Element.png "createElement") |

### Spesifikasi Jenis Element JSX

- Kapitalisasi untuk komponen react
- Huruf kecil (lowercase) untuk komponen bawaan

### Menaruh Expression pada JSX

Menaruh Expression JS yang valid dengan menggunakan kurung kurawal.

contoh :

- {nama}
- {2+2}
- {formatName(user)}

### Menentukan atribut dengan JSX

- Tanda Kutip untuk menentukan string literal

![String Literal.](https://i.ibb.co/kM597XM/string-Literal.png "String Literal")

- Kurung kurawal untuk menyematkan expression javascript

![menyematkan expression.](https://i.ibb.co/xSCV5zh/menyematkan-Ekspresi.png "menyematkan expression")

- React DOM menggunakan camelCase sebagai konversi penamaan

![camelCase.](https://i.ibb.co/yFPJwVm/camel-Case.png "camelCase")

## React Component

Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

### Membagi UI menjadi beberapa component

![reactComponent](https://i.ibb.co/1nH4Yfm/react-Component.png "react-Component")

## Component Composite

### Props ( Properties )

- Membuat kita dapat memberikan argumen / data pada komponen.
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah **read-only** dan tidak dapat diubah

## Condition and List

### Render Bersyarat

1. Menggunakan if
   ![If](https://i.ibb.co/d7wMm68/if.png "if")
2. Inline if dengan operator &&
   ![IF &&](https://i.ibb.co/55m0zBn/if.png "if&&")
3. Inline if-else dengan ternary conditional operator.
   **condition ? true : false**
   ![ternary](https://i.ibb.co/5FmZ1Vx/ternary.png "ternary")
4. Mencegah komponen untuk Rendering
   ![noRender](https://i.ibb.co/rb4vC9f/norender.png "noRender")

## Struktur File React

### 1. Pengelompokan berdasarkan fitur atau rute

Salah satu cara umum untuk menyusun proyek adalah dengan menempatkan CSS, JS, dan tes bersama di dalam folder yang dikelompokkan berdasarkan fitur atau rute.

### 2. Pengelompokan berdasarkan jenis file

Cara populer lainnya untuk menyusun proyek adalah dengan mengelompokkan file-file yang sama.

## Styling Inline

### Classes CSS

![Classes](https://i.ibb.co/nkGssKs/classes.png "classes")

### Atribut Style

![Atribut](https://i.ibb.co/jrHf1M8/atribut.png "atribut")

### Modul CSS

![modul](https://i.ibb.co/PrBnMFK/modul.png "modul")
