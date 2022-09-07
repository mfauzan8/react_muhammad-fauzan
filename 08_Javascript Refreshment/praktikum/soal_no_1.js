var a = 5;
let b = "kampus merdeka";
let nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];
let asal = "indonesia";

function perkenalan(){
    return console.log(
        "perkenalkan nama saya "+
        nama +
        " nomor urut "+
        a + 
        " sekarang sedang mengikuti "+
        b +
        " berasal dari "+
        asal 
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

console.log("Array = "+ lengkap_arr[2]);
console.log("asal diakses = "+ asal);
console.log("a adalah = "+ a);
console.log("b adalah = "+ b);
perkenalan();