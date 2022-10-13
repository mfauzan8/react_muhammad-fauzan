# GraphQL

GraphQL adalah bahasa Query untuk API, dan runtime sisi server untuk mengeksekusi query dengan menggunakan sistem tipe yang tetapkan untuk data Anda. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan one single endpoint (/graphQL) untuk semua
request yang dibutuhkan.  
[![1.png](https://i.postimg.cc/kGSthWn6/1.png)](https://postimg.cc/K3Zz1k3x)

Sebelum menggunakan GraphQL, Kita perlu setup GraphQL Server **(Backend)** menggunakan **Hasura, Apollo Server, dll**. Untuk GraphQL **Client** menggunakan **Prisma, Apollo Client, Postman, dll.**

## Fitur utama GraphQL Client:

## 1. Query (Get Data)

### Basic

Dengan GraphQL kita bisa mendapatkan data persis apa yang kita butuhkan.  
**Example:**  
[![1.png](https://i.postimg.cc/rFxrG6F8/1.png)](https://postimg.cc/zVDv5cgM)

### Multiple related data sources / collections

Kita juga bisa menggunakan query untuk get data from multiple related collections.  
**Example:**  
[![1.png](https://i.postimg.cc/6qLzm8L0/1.png)](https://postimg.cc/8fchFPYJ)

### Fragments

bagian dari logika yang dapat dibagi antara multiple queries dan mutations. Fragment dapat menyederhanakan query atau mutations.  
**Example:**  
[![1.png](https://i.postimg.cc/qBs9YLwp/1.png)](https://postimg.cc/vDmqx5CK)

## 2. Mutation

Mutation merupakan fungsi untuk Insert, Update, Delete Data.  
**Example:**  
[![1.png](https://i.postimg.cc/xTB2KCTZ/1.png)](https://postimg.cc/mt3J4T93)

## 3. Subscription

- Subscriptions merupakan fitur graphQL yang mengizinkan server untuk send data ke client ketika specific event happens. Subscriptions biasanya diimplementasikan dengan WebSocket. Dalam Setup, Server mempertahankan koneksi yang stabil untuk subscribed client.
- Ketika data di modifikasi, client akan mendapatkan updated data langsung secara real-time.  
  [![1.png](https://i.postimg.cc/mgwKmNYt/1.png)](https://postimg.cc/hXXCjm3B)

## Setup GraphQL

[![1.png](https://i.postimg.cc/fTzDvLXW/1.png)](https://postimg.cc/nMPyFn0N)

### Hasura & Heroku (Server)

- Pertama **daftar** akun hasura dan heroku. setelah daftar, Create new project, buka **tab Data**. Kemudian **Create Heroku Database**. setelah berhasil create database, lalu configure database.  
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/vk3NxsF/1.png"></a>

- Buka tab API, gunakan endpoint dan header _x-hasura-admin-secret_ sebagai header  
  <a href="https://ibb.co/CWXrns0"><img src="https://i.ibb.co/3k8J0Yh/1.png"></a>
- Tulis Query atau klik di explorer lalu execute. Buat mutation Query to insert new data atau update data.  
  <a href="https://ibb.co/LJSp7LK"><img src="https://i.ibb.co/4YWNr6k/1.png" ></a>

### Apollo (Client)

Apollo Client Setup :

1. Install GraphQL and apollo client = **_yarn add graphql @apollo/client_**
2. Create apollo-client.js didalam folder src.
3. Create apolloClient dan Export
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/q5cxfrQ/1.png" ></a>
   - **uri** : URL GraphQL server - **cache** : digunakan apollo client untuk menyimpan hasil query setelah fetching. - **header** : sebagai identify yourself ketika HTTP dikirim.
4. Setting apollo provider di index.js, import ApolloProvider dan apollo-client.  
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/f1rZrT8/1.png" ></a>
   - **ApolloProvider** = membungkus React App dan letakkan Apollo Client didalamnya.
