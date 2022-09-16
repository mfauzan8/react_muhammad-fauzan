# Event Handling

## State

Merupakan data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain

## Props Vs State

| Props              |                  State                  |
| ------------------ | :-------------------------------------: |
| read-only          |       changes can be asynchronous       |
| cannot be modified | can be modified using **this.setState** |

### Contoh State

![State.jpg](https://i.postimg.cc/fy6RPyFc/Capture.jpg)

## Statefull and Stateless

- **Statefull Component** adalah memiliki **state**. Component ini dibuat dengan **class**. Kelebihan dari class component memiliki **lifecycle**.

- **Stateless Component** adalah **tidak** memiliki **state** hanya props. umumnya component ini dibuat dengan **function** karena codenya lebi ringkas

## Perbedaan Statefull dan Stateless

| Statefull Component                          |            Stateless Component             |
| -------------------------------------------- | :----------------------------------------: |
| Tidak tahu tentang aplikasi                  |         Mengerti tentang aplikasi          |
| Tidak melakukan fetching data                |          Melakukan data fetching           |
| Tujuan adalah Visualisasi                    |        Berinteraksi dengan aplikasi        |
| Dapat digunakan kembali                      |       Tidak dapat digunakan kembali        |
| Hanya berkomunikasi dengan induk langsungnya | Meneruskan status dan data ke anak-anaknya |

### Contoh Statefull Component

![Statefull.jpg](https://i.postimg.cc/LscvHK7m/Capture.jpg)

### Contoh Stateless Component

![Stateless.jpg](https://i.postimg.cc/j5tyjxsQ/Capture.jpg)

## Handling Event

Adalah sebuah metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen

### Contoh List Event

1. **Clipboard Events** = Promise terpenuhi
2. **Form Events** = onChange, onSubmit
3. **Mouse Events** = onClick, onDoubleClick, onMouseOver
4. **Generic Events** = onError, onLoad

### Contoh penggunaan Events onClick

![Capture.jpg](https://i.postimg.cc/TwCsT2zB/Capture.jpg)
