# Global State Management and Data Fetching

## Global State Management

### Kapan saat yang tepat untuk menggunakan Redux :

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state di update seiring dengan waktu

### Redux Libraries dan Tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Penting di Redux

1. **Actions** = Digunakan untuk memberikan informasi dari aplikasi ke store
   [![1.png](https://i.postimg.cc/C5h3mT8d/1.png)](https://postimg.cc/r0HZwHQL)
2. **Reducer** = Pure Javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru. [![2.png](https://i.postimg.cc/wMrwJScC/2.png)](https://postimg.cc/wRh5Y4r2)
   **createSlice**
   [![3.png](https://i.postimg.cc/DZHC49ct/3.png)](https://postimg.cc/YGNNJyZ3)
3. **Store** = Objek sentral yang menyimpan state pada aplikasi.  
   [![4.png](https://i.postimg.cc/P5TSDzmr/4.png)](https://postimg.cc/gntyFhSf)
   **Cara Memasang Redux Store pada React**
   [![5.png](https://i.postimg.cc/ZqgPwryN/5.png)](https://postimg.cc/jWHJ5ncq)

## Redux Thunk

**Thunk Middleware** untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.  
**Redux Thunk** untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data.

### Asynchronous Dispatch

[![1.png](https://i.postimg.cc/7Pnm699m/1.png)](https://postimg.cc/grrvtvfZ)

### Conditional Dispatch

[![2.png](https://i.postimg.cc/KzyDc3g6/2.png)](https://postimg.cc/7Cm2m699)

### Install Redux Thunk

**github.com/reduxjs/redux-thunk => <i>npm install redux-thunk</i>**  
Contoh Penggunaan Redux Thunk :
[![3.png](https://i.postimg.cc/VLNBN8dk/3.png)](https://postimg.cc/pygn03fw)
