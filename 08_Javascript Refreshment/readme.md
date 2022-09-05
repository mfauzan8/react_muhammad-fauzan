## JAVASCRIPT
Bahasa pemrograman yang high-level, scripting, untyped dan interpreted.

### Method
Sebuah fungsi yang terikat dengan object, membuat programnya se-sederhana mungkin.
- concat = menggabungkan dua atau lebih array, dan mengembalikan salinan array yang digabungkan.  
contoh :  
const array1 = ['a', 'b'];  
const array2 = ['c', 'd'];  
const array3 = array1.concat(array2);  
console.log(array3); // output : ["a", "b", "c", "d"]  

- Map = membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.  
contoh :  
const array1 = [1, 4, 9, 16];  
const map1 = array.map(x => x * 2);  
console.log(map1); // output : [2, 8, 18, 32]

- Foreach = memanggil fungsi untuk setiap elemen array
contoh :  
const array = ['a', 'b', 'c'];  
array1.forEach(element => console.log(element));  
// output :  
a  
b  
c  

- Slice = memilih bagian dari array dan mengembalikan array yang baru  
contoh :  
const hewan = ['semut', 'kambing', 'unta', 'bebek']  
console.log(hewan.slice(2));  
// output : ['unta', 'bebek']  

- Filter = membuat array baru dengan setiap elemen dalam array yang lulus seleksi  
contoh :  
const angka = [1, 2, 3, 4, 5];  
const result = angka.filter(nomor => nomor > 2);  
console.log(result); // output : [3, 4, 5]

- Reduce = melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan).  
contoh :  
const array1 = [1, 2, 3, 4];  
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer)); 
// 1 + 2 + 3 + 4  
//output : 10  
### Control Flow
Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.  
1. Pengulangan (Loop/Iterasi)  
For, While, Do While
2. Pengkondisian (Percabangan)
If .. Else, Switch, Block, Try .. Catch, Break, Continue, Throw

### Document Object Model (DOM)
API untuk HTML yang merepresentasikan halaman web pada suatu dokumenn menjadi sebuah object.  
1. Selection Method  
  - getElementById = Mengambil element berdasarkan id 
  - getElementByTagName() = HTMLCollection berdasarkan tag 
  - getElementByClassName() = HTMLCollection berdasarkan class 
  - querySelector() = Element 
  - querySelectorAll() = nodelist 

2. Manipulation  
  - element.innerHTML = Merubah isi dari tag yang sudah kita seleksi 
  - element.style. = Merubah style dari tag yang di seleksi 
  - element.setAttribute() = Mengelola/memanipulasi attribute yang diseleksi 
  - element.classList.add() = Mengelola/memanipulasi class yang sudah di seleksi 
3. Event  
  - onclick =ketika pengguna mengklik mouse 
  - onchhange = dalam kombinasi dengan validasi bidang input 
  - onblur = ketika anda meninggalkan kolom input
  - oncopy = ketika pengguna mengcopy suatu object 