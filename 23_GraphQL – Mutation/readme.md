# GraphQL – Apollo Client: Mutation

Modify data with the useMutation hook

1. Import **useMutation** hooks dari apollo client and definisikan mutation.  
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/nLXxFs9/1.png"></a>

### Mutation - Insert Data

2. aktifkan **useMutation** dan gunakan **array destruction**, definisikan mutation handler **(insertTODO)**.
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/BsPK4RX/1.png"></a>  
    **refetchQueries**: Sebuah array (sebuah function yang me-return sebuah array) yang menentukan query mana yang ingin Anda refect setelah mutation terjadi

3. Panggil InsertTodo dengan variables
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/1rkNvJd/1.png"></a>

### Mutation - Update Data

1. Definisikan **Update Query**
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/PWN2NLQ/1.png"></a>
2. Buat **mutation handler** untuk UpdateTodo
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/mvfFdkv/1.png"></a>
3. Panggil update Query
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/6n8LNtJ/1.png"></a>

### Mutation - Delete Data

1. Definisikan **Delete Query**
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/DzyvxVk/1.png"></a>
2. Buat **mutation handler** untuk DeleteTodo
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/Yd974wY/1.png"></a>
3. Panggil Delete Query
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/JCL2st5/1.png"></a>
