// No.3
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(a);
console.log(b);
console.log(c);

// No.4
let bdays = ['10-17','05-19','20-19'];
let bdaysMapped = bdays.map(i => (i.split('-').join('/')))
console.log(bdaysMapped)

// No.5
let value = [1, 2, 3, 4, 5, 6];
const map1 = value.map(x => x * 2);
console.log(map1);

// No.6
let arr = [1.5, 2.56, 5.1, 12.33]
let arrMapped = arr.map(i => (Math.round(i)))
console.log(arrMapped)