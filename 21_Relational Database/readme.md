# Relational Databases

**_Database_** adalah sekumpulan data yang terorganisir.

### Database Relational

1. **One To One**  
   Contoh : 1 user hanya memiliki 1 foto profile.
2. **One To Many**  
   Contoh : 1 user bisa memiliki banyak tweets.
3. **Many To Many**  
   Contoh :
   _ 1 user bisa memiliki banyak follower user, 1 user bisa di follow banyak user
   _ 1 mahasiswa bisa memiliki banyak mata kuliah, 1 mata kuliah bisa diambil oleh banyak mahasiswa

### RDBMS ( Relational Database Management System )

Software yang menggunakan Relational Database Model sebagai dasarnya.  
contoh : MySQL

## Jenis Perintah SQL

1. **DDL** (Data Definition Language) = Membuat dan memodifikasi struktur database.  
   Statement DDL :  
    _ CREATE DATABASE database_name
   _ USE database_name
   _ CREATE TABLE ...
   _ DROP TABLE ...
   _ RENAME TABLE ...
   _ ALTER TABLE ...
2. **DML** (Data Manipulation Language) = Memanipulasi data dalam tabel dari suatu database.  
   Statement DML :  
    _ INSERT  
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/61c2T59/1.png"></a>  
    _ SELECT  
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/ggGsnrT/1.png"></a>  
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/QFdc7jh/1.png" ></a>
   _ UPDATE  
    <a href="https://ibb.co/wcQ3HqC"><img src="https://i.ibb.co/TW0pXGR/1.png"></a>
   _ DELETE  
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/Mpv67bJ/1.png" ></a>

| Statement |                                                                                      Contoh penggunaan                                                                                       |
| --------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| LIKE      |                                                <a href="https://imgbb.com/"><img src="https://i.ibb.co/5GBtFcJ/1.png" alt="1" border="0"></a>                                                |
| BETWEEN   |                                                <a href="https://imgbb.com/"><img src="https://i.ibb.co/ZSXn1KX/1.png" alt="1" border="0"></a>                                                |
| AND / OR  | <a href="https://imgbb.com/"><img src="https://i.ibb.co/L5DZY8S/1.png" alt="1" border="0"></a><a href="https://imgbb.com/"><img src="https://i.ibb.co/RS1yq0w/1.png" alt="1" border="0"></a> |
| ORDER BY  |                                                <a href="https://imgbb.com/"><img src="https://i.ibb.co/qdJQqSR/1.png" alt="1" border="0"></a>                                                |
| LIMIT     |                                                <a href="https://imgbb.com/"><img src="https://i.ibb.co/g9JFKrg/1.png" alt="1" border="0"></a>                                                |

#### JOIN STATEMENT

| Statement                                                                                                                                              |                                         Contoh penggunaan                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------: |
| Inner Join = mengembalikan baris - barus dari dua tabel atau lebih yang memenuhi syarat                                                                |   <a href="https://imgbb.com/"><img src="https://i.ibb.co/YNkLNnJ/1.png" alt="1" border="0"></a>   |
| Left Join = mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris tabel disebelah kanan yang memenuhi kondisi  |  <a href="https://imgbb.com/"><img src="https://i.ibb.co/R3HmHSz/1a.png" alt="1a" border="0"></a>  |
| Right Join = mengembalikan seluruh baris dari tabel disebelah kanan yang dikenai kondisi ON dan hanya baris tabel disebelah kiri yang memenuhi kondisi | <a href="https://imgbb.com/"><img src="https://i.ibb.co/0YfyHsz/1aa.png" alt="1aa" border="0"></a> |

#### FUNGSI AGREGASI

fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal

| Fungsi |                                    Contoh                                    |
| ------ | :--------------------------------------------------------------------------: |
| MIN    |                       SELECT MIN (id) AS id FROM users                       |
| MAX    |                          SELECT MAX (id) FROM users                          |
| SUM    |           SELECT SUM (favourite_count) FROM tweets WHERE user_id=1           |
| AVG    |           SELECT AVG (favourite_count) FROM tweets WHERE user_id=1           |
| COUNT  |                 SELECT COUNT (1) FROM tweets WHERE user_id=1                 |
| HAVING | SELECT user_id FROM tweets GROUP BY user_id HAVING SUM (favourite_count) > 2 |

3. **DCL** (Data Control Language)  
   Statement DCL :
   - GRANT
   - REVOKE
