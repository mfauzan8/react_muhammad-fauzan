# Query and Apollo client

**Apollo Client** adalah library state management untuk javascript yang memungkinkan mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk fetch, cache dan modifikasi data aplikasi, memperbarui UI secara otomatis.

[![1aac.png](https://i.postimg.cc/WbfDGq8V/1aac.png)](https://postimg.cc/dLrtv1gN)

### Apollo Client Setup :

1. Install GraphQL and apollo client = **_yarn add graphql @apollo/client_**
2. Create apollo-client.js didalam folder src.
3. Create apolloClient dan Export  
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/q5cxfrQ/1.png" ></a>
   - **uri** : URL GraphQL server
   - **cache** : digunakan apollo client untuk menyimpan hasil query setelah fetching.
   - **header** : sebagai identify yourself ketika HTTP dikirim.
4. Setting apollo provider di index.js, import ApolloProvider dan apollo-client.  
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/f1rZrT8/1.png" ></a>
   - **ApolloProvider** = membungkus React App dan letakkan Apollo Client didalamnya.

### Query with Apollo Client - UseQuery

1. Import gql and useQuery, lalu tulis query anda. atau bisa mencopy dari hasura console.  
   [![1aac.png](https://i.postimg.cc/Nfmr8jKP/1aac.png)](https://postimg.cc/ppVTRxYD)
2. Get Initial data dengan melakukan query di server.  
   [![1aac.png](https://i.postimg.cc/52p5v2GW/1aac.png)](https://postimg.cc/NK9rvBBd)  
    **data** : objek yang berisi hasil query GraphQL setelah complete  
    **loading** : jika benar, query masih dalam wait dan hasilnya belum dikembalikan  
    **error** : jika query menghasilkan satu atau lebih kesalahan, objek ini akan berisi array kesalahan.  

3. Consume data di code jsx  
   _**note**_ : di first request data is null, jadi butuh optional chaining (?) untuk menghindari kesalahan.  
   [![1aac.png](https://i.postimg.cc/QdB4X5Cn/1aac.png)](https://postimg.cc/dhYm6h88)

### Query with Apollo Client - UseLazyQuery

Dengan useLazyQuery kita dapat memanggil kapan kita perlu mengeksekusi query yang kita buat.  
[![1aac.png](https://i.postimg.cc/cJFVD39x/1aac.png)](https://postimg.cc/qtCbqNHS)

### Query with Apollo Client - Refetching

Refetching memungkinkan Anda untuk merefresh hasil query sebagai respons terhadap tindakan pengguna tertentu, bukan menggunakan fixed interval  
[![1aac.png](https://i.postimg.cc/26Qbnz8f/1aac.png)](https://postimg.cc/sQ2grChn)
