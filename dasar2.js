//variabel
//bariabel dalam javascript adalah tempat untuk menyimpan data atau nilai yang bisa digunakan dn diubah selama program berjalan.
// ada tiga cara untuk medeklarasikan variabel di javascript

// 1. Variable
// 1) using var (can named as global variable): 
var nama = "Budi";
var umur = 25;

// 2) Using let (recommended to tentative variable):
let skor = 0;
skor = 10; // value can be changed

// 3) Using const (for constant value):
const PI = 3.14;
// PI = 3.15; // this will be error since const cannot be changed

// few important things about variable in javascript:
// variable can save some type of data: string, number, Boolean, array, object, etc.
// Variable name must start with letter, underscore (_), or dollar sign ($).
// Variable's character is case-sensitive, which means "nama" and "Nama" is two different variable.
// Use name which have meaning to make it easier reading code.

// example using in real context :
let totalHarga = 0;
const PAJAK = 0.1;

function hitungTotal(harga) {
	totalHarga = harga + (harga * PAJAK);
	return totalHarga;
}
// (------------------------------------------------------------------)
// Now, we will learn what called Variable scope,
// Variable scope is concept that define where a variable can be accessed in a code.

// two main type of scope:
// 1) Global Scope
// Global variabel can be accessed from anywhere
var globalVar = "this can be accessed from anywhere";
let globalLet = "this also global";

function contohFungsi() {
	console.log(globalVar); // can be accessed
}

// 2) Local/Function Scope
function contohFungsi() {
	//local variable can be accessed in this function only
	var lokalVar = "only in this function";
	let lokalLet = "this is also in this function";

	console.log(lokalVar); // can be accessed
}

//console.log(lokalVar); // Error! Can be accessed in outside function

// 3) Block scope (especially for let and const)
if (true) {
	let blockVar = "just in block";
	const blockCost = "also in block";
	var notBlockVar = "can be accessed in outer block"; // var dont recognice block scope
}
	// console.log(blockVar); // Error!
	// console.log(blockConst); // Error!
	console.log(notBlockVar); // can be accessed

// important difference among var, let and const in scope:
// var bisa diakses sebelum deklarasi (hoisting)
console.log(varVariable); // undefined
var varVariable = "test";

// let dan const tidak bisa diakses sebelum deklarasi
// console.log(letVariable); // Error!
let letVariable = "test";

//tips using scope:
// Avoid using global variable but it necessarily
// using let and const instead var for controling better scope
// watch scope while working with closure and function

// important to undersand scope to able able:
// avoid conflict name variable
// controll accesss to data
// write safer code and easy to maintain

//LOGGING
//loggin in HavaScript is a way to shows information, data or message for debugging and monitoring
// 1. conlose.log() - most used 
console.log("Pesan biasa");
console.log("User:", { nama: "Budi", umur: 25 });
// this console.log will use for printing value code, we have to do quizs rpn where the result is result from log

// 2. console.error() - shows error message
console.error("Terjadi kesalahan!");

//  3. console.warn() - to shows warning
console.error("terjadi kesalahan");

// 4. console.info() - to show information
console.info("aplication has been created");

// 5. console.table() - to show data in a table
const users = [
    {nama: "Budi", umur: 25 },
    {nama: "Ani", umur: 23}
];
console.table(users);

// 6. console.group() - grouping log
console.group("User Detail");
console.log("nama: Budi");
console.log("Umur: 25");
console.groupEnd();

// 7. console.time() dan console.timeEdn() - measure execution time
console.time("Loop");
for(let i = 0; i < 1000000; i++) {
    // proses
}
console.timeEnd("Loop");

//tips using logging:
// using logging match with conteks( error for error, warn for warning, etc)
//avoid leave console.log in production code
// use tools browser developer to see and filter log
//example using in debugging:
function hitungTotal(harga, jumlah) {
    console.log("Input:", { harga, jumlah });
    
    const total = harga * jumlah;
    console.log("Total:", total);
    
    if (total > 1000000) {
        console.warn("Transaksi besar terdeteksi");
    }
    
    return total;
}

//Data Tyup
// type data in JavaScript divided into two main catigory which are Primitive Types and Reference Types.
//1. Primitive types():
//Primitive types consist of few data that save value directly. String use for save text or character,
// like name or address. Number scope all type of number, integer, decimal, arimatics.
// boolean has two value which are true and false, used to logic and deciding in program.
// undefined show when a variable declare but haven't given value, while Null is empty value on purpose.
// syumbol is type of data that resulting in unix and immutable

// String - untuk teks
let nama = "Budi";
let pesan = 'Halo';

// Number - untuk angka (integer dan decimal)
let umur = 25;
let tinggi = 1.75;

// Boolean - true/false
let aktif = true;
let menikah = false;

// Undefined - variable yang belum diberi nilai
let alamat;
console.log(alamat); // undefined

// Null - nilai kosong yang disengaja
let dataSiswa = null;

// Symbol - nilai unik dan immutable
const id = Symbol('id');

// 2. Reference Types:
//reference type is type of data more complex and save reference to location memory where data actually saved.
// array is type of data that savae bunch of value into a varibale, whre every value has index numerik
// which start from 0.
// Object is a data structure data which can save partner of key-value, possible saving data with structural
// and property which accessed using name of its property.
// Function include into reference type, is block code that can be call and execute when its needed.
// Array - kumpulan data terurut
let buah = ["Apel", "Jeruk", "Mangga"];

// Object - kumpulan property dan value
let siswa = {
    nama: "Budi",
    umur: 25,
    aktif: true
};

// Function - blok kode yang bisa dipanggil
function sapaan(nama) {
    return `Halo ${nama}!`;
}

//Important charactersitic: thisis some way to know type data of JavaScript, and how to manage
// convert from type data A to others
// 1. Type checking:
// Menggunakan typeof
console.log(typeof "Budi");      // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (ini adalah bug/quirk JavaScript)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"

// 2. type conversion:
// String ke Number
let angka = Number("123");     // 123
let text = String(123);        // "123"

// Ke Boolean
let bool = Boolean(1);         // true
let bool2 = Boolean("");       // false

// Automatic conversion
let hasil = "5" + 2;          // "52" (string)
let hasil2 = "5" - 2;         // 3 (number)

// 3. contoh best practice:
let produk = {
    nama: "Laptop",                    // string
    harga: 15000000,                  // number
    stok: 5,                          // number
    spesifikasi: ["i7", "16GB RAM"],  // array
    tersedia: true,                   // boolean
    getInfo: function() {             // function
        return `${this.nama} - Rp${this.harga}`;
    }
};

// Menggunakan berbagai tipe data
if (produk.stok > 0 && produk.tersedia) {
    console.log(produk.getInfo());
    console.log("Spesifikasi:", produk.spesifikasi.join(", "));
}

//Important points to remember:
// JavaScript is dynamic typiong language
// Primitive types can be saved according value
// Reference types is saved according reference to memory
// type of coercion can be happened automatically
// always watch tyupe data while doing opertaion to avoid bug

// STRINGS TYPE (DETAILED)
// here are exampels:
let teks = "Hello World";

// Mengakses karakter dengan index
console.log(teks[0]);     // "H"
console.log(teks[6]);     // "W"
console.log(teks[10]);    // "d"

// Mencoba mengubah karakter (tidak akan berhasil karena immutable)
teks[0] = "J";           // Tidak akan mengubah string
console.log(teks);       // Tetap "Hello World"


// string also have length propery that shows length of that string. this is usefull when doing iteration or cheching
let nama = "Budi Santoso";
console.log(nama.length);  // 12

// Mengakses karakter terakhir
console.log(nama[nama.length - 1]);  // "o"


//JavaScript provide some method to manipulate string. Methods always resulting new string without changing real string:
let kalimat = "Belajar JavaScript";

// Mengambil substring
console.log(kalimat.substring(0, 7));    // "Belajar"

// Mengubah case
console.log(kalimat.toUpperCase());      // "BELAJAR JAVASCRIPT"
console.log(kalimat.toLowerCase());      // "belajar javascript"

// Mencari posisi substring
console.log(kalimat.indexOf("JavaScript"));  // 8


//we can also using tempalte literals (with backtick) for make string more compex:
let nama = "Budi";
let umur = 25;

// Template literal memungkinkan ekspansi variabel dan multiple line
let profil = `Nama: ${nama}
Umur: ${umur} tahun`;

console.log(profil);
// Output:
// Nama: Budi
// Umur: 25 tahun


// in proccessing string, usually we have to do iteration to chech or manipulate every character:
let kata = "Indonesia";

// Menghitung jumlah vokal
let jumlahVokal = 0;
for(let i = 0; i < kata.length; i++) {
    if("aiueoAIUEO".includes(kata[i])) {
        jumlahVokal++;
    }
}
console.log(`Jumlah vokal: ${jumlahVokal}`);  // 5

//improtant to remeber that even though we can access character individual in string using index,
//we cannot change it directly. If necessary, we have to make new string with wanted changes.
// this is one of aspect fundamental from immutable character  string in JavaScript.


//NUMBERS (OPERATOR)
//in javascript, tupe data number scope all type of number, whether its integer or floating-point.
// javascript use format 64-bit double precision floating-point to save numeric value.
// this is means we dont have to declare special type for integer or decimal like other langugaes.
// Deklarasi number
let bilBulat = 42;        // integer
let bilDesimal = 3.14;    // floating-point
let negatif = -17;        // bilangan negatif
let eksponensial = 2e5;   // 200000 (notasi eksponensial)


//JavaScript propive some operator aritmatic to do calculate.
// Operator aritmatika dasar
let a = 10;
let b = 3;

console.log(a + b);    // 13 (penjumlahan)
console.log(a - b);    // 7 (pengurangan)
console.log(a * b);    // 30 (perkalian)
console.log(a / b);    // 3.3333... (pembagian)
console.log(a % b);    // 1 (modulus/sisa pembagian)
console.log(a ** b);   // 1000 (pangkat)


//JavaScript also have increment operator and decrement which are usefull to add or reduce number as 1:
let counter = 5;

// Increment (menambah 1)
counter++;     // counter = counter + 1
console.log(counter);   // 6

// Decrement (mengurangi 1)
counter--;     // counter = counter - 1
console.log(counter);   // 5


//for complex oepration, JavaScript provide math object which has amy method:
// Menggunakan Math object
console.log(Math.round(3.7));    // 4 (pembulatan ke terdekat)
console.log(Math.floor(3.7));    // 3 (pembulatan ke bawah)
console.log(Math.ceil(3.2));     // 4 (pembulatan ke atas)
console.log(Math.abs(-5));       // 5 (nilai absolut)
console.log(Math.sqrt(16));      // 4 (akar kuadrat)
console.log(Math.min(2, 5, 1));  // 1 (nilai terkecil)
console.log(Math.max(2, 5, 1));  // 5 (nilai terbesar)


//important to remember that JavaScriopt has special value for number:
// Nilai khusus
console.log(Infinity);           // representasi tak hingga
console.log(-Infinity);          // negatif tak hingga
console.log(NaN);               // Not a Number (hasil operasi yang tidak valid)

// Contoh yang menghasilkan NaN
console.log(0/0);               // NaN
console.log(parseInt("hello")); // NaN


//to convert string become number, JavaScript provide some method:
// Konversi ke number
let stringAngka = "123";
let desimalString = "3.14";

console.log(Number(stringAngka));     // 123
console.log(parseInt(stringAngka));   // 123
console.log(parseFloat(desimalString)); // 3.14
console.log(+'123');                 // 123 (cara cepat dengan operator +)


//while working in calculate which involve money or high precision, need to watch that JavaScript can experience trouble
console.log(0.1 + 0.2);         // 0.30000000000000004
// Solusi: gunakan toFixed() atau kalikan dengan 100 saat perhitungan
console.log((0.1 + 0.2).toFixed(2));  // "0.30"


//CONDITIONAL STATEMENTS
//basic conditional statement if "IF"
let Usia = 18;
if (Usia >= 17) {
    console.log("Anda sudah bisa membuat KTP");
}

//we can add alternatif "else"
let nilai = 75;
if (nilai >= 60) {
    console.log("Anda lulus");
} else {
    console.log("Anda perlu mengulang");
}

//for more complex, we can use "else if"
let Cuaca = "hujan";
if (Cuaca === "cerah") {
    console.log("Waktunya piknik!");
} else if (Cuaca === "mendung") {
    console.log("Bawalah payung");
} else if (Cuaca === "hujan") {
    console.log("Tetap di dalam ruangan");
} else {
    console.log("Cuaca tidak dapat diprediksi");
}

//JavaScript provide shortcut to write basic condition using operator ternary:
let umur = 20;
let status = umur >= 18 ? "dewasa" : "remaja";

//for cases whre we need to compare values, we can use "switch"
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Awal minggu");
        break;
    case "Jumat":
        console.log("Akhir minggu kerja");
        break;
    default:
        console.log("Hari biasa");
}


//LOGIC OPERATOR
//operator AND	(&&)
let usia = 25;
let punyaSIM = true;

// Memeriksa apakah seseorang boleh mengemudi
if (usia >= 17 && punyaSIM) {
    console.log("Anda boleh mengemudi");
} else {
    console.log("Anda belum boleh mengemudi");
}

// AND juga bisa digunakan untuk lebih dari dua kondisi
let saldo = 1000000;
let verifikasi = true;
let limitHarian = false;

if (saldo >= 500000 && verifikasi && !limitHarian) {
    console.log("Transaksi dapat diproses");
}

//Operator Or (||)
let metodePembayaran = "transfer";

// Memeriksa metode pembayaran yang valid
if (metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "e-wallet") {
    console.log("Metode pembayaran diterima");
}

// OR berguna untuk nilai default
let namaPengguna = "";
let displayName = namaPengguna || "Tamu"; // Jika namaPengguna kosong, gunakan "Tamu"

//Operator NOT (!)
let sistemMaintenance = false;

// Memeriksa apakah sistem bisa diakses
if (!sistemMaintenance) {
    console.log("Sistem dapat diakses");
}

// NOT sering digunakan untuk memeriksa nilai yang tidak ada
let data = null;
if (!data) {
    console.log("Data tidak tersedia");
}

//operator can be combined to make complext condition. important to understand step evaluation:
let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = true;

// Mengkombinasikan beberapa kondisi
if ((cuaca === "cerah" || cuaca === "berawan") && (waktu === "pagi" && akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging!");
}

//JavaScriopt also has concept "short-circuit evaluation" which important to understand:
// AND menghentikan evaluasi saat menemukan nilai false
console.log(false && console.log("Tidak akan dicetak")); // false

// OR menghentikan evaluasi saat menemukan nilai true
console.log(true || console.log("Tidak akan dicetak")); // true

// Ini sering digunakan untuk pengecekan nilai null/undefined
let user = {
    nama: "Budi",
    settings: null
};

// Hanya mengakses preferences jika settings ada
let tema = user.settings && user.settings.preferences;