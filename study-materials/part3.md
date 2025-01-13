# Javascript Syntax beginner | Part 3

Sebelumnya kalian belajar contoh algoritma pseudocode, dan setelah kalian melihatnya untuk pertama kali, kalian pasti bingung dengan istilah-istilah yang digunakan pada pseudocode. itu sudah pasti karena kamu belum belajar konsep pemrograman dasarnya.

pada part kali ini juga kita akan belajar dasar pemrogramannya yang dimana dasar-dasar ini ada hampir sama di semua bahasa pemrograman meskipun menggunakan bahasa pemrograman javascript. nah yang membedakan itu disebut syntax

simplenya syntax itu adalah aturan menulis code, cuma itu yang membedakan antara bahasa pemrograman 1 dengan yang lainnya, tapi tenang aja, mirip-mirip kok syntaxnya.

![image](https://github.com/user-attachments/assets/e6a63c0e-4b31-405b-ba36-d6098a068464)


langsung saja kita akan belajar syntax dasar dari javascript dimulai dari variable.

## Variable
Variable dalam JavaScript adalah tempat untuk menyimpan data atau nilai yang bisa digunakan dan diubah selama program berjalan.

Ada tiga cara untuk mendeklarasikan variable di JavaScript:

1. Menggunakan `var` (bisa disebut global variable):
```javascript
var nama = "Budi";
var umur = 25;
```

2. Menggunakan `let` (direkomendasikan untuk variable yang nilainya bisa berubah):
```javascript
let skor = 0;
skor = 10; // nilai bisa diubah
```

3. Menggunakan `const` (untuk nilai yang tetap/konstant):
```javascript
const PI = 3.14;
// PI = 3.15; // ini akan error karena const tidak bisa diubah
```

Beberapa hal penting tentang variable JavaScript:

- Variable bisa menyimpan berbagai tipe data: string, number, boolean, array, object, dll
- Nama variable harus dimulai dengan huruf, underscore (_), atau dollar sign ($)
- Variable bersifat case-sensitive, artinya `nama` dan `Nama` adalah dua variable berbeda
- Gunakan nama yang bermakna untuk memudahkan pembacaan kode

Contoh penggunaan dalam konteks nyata:
```javascript
let totalHarga = 0;
const PAJAK = 0.1;

function hitungTotal(harga) {
    totalHarga = harga + (harga * PAJAK);
    return totalHarga;
}
```

Mungkin kalian akan bingung mana yang sebaiknya digunakan untuk variable yang datanya sering berubah, apakah `var` atau `let` ? 

Oke, sekarang kita akan belajar yang namanya `Variable Scope`, 

Variable scope adalah konsep yang menentukan dimana sebuah variable bisa diakses dalam kode. Ada dua tipe utama scope:

1. Global Scope
```javascript
// Variable global bisa diakses dari mana saja
var globalVar = "Bisa diakses dimana saja";
let globalLet = "Ini juga global";

function contohFungsi() {
    console.log(globalVar); // Bisa diakses
}
```

2. Local/Function Scope
```javascript
function contohFungsi() {
    // Variable local hanya bisa diakses di dalam fungsi ini
    var lokalVar = "Hanya dalam fungsi";
    let lokalLet = "Juga hanya dalam fungsi";
    
    console.log(lokalVar); // Bisa diakses
}

// console.log(lokalVar); // Error! Tidak bisa diakses di luar fungsi
```

3. Block Scope (khusus untuk let dan const)
```javascript
if (true) {
    let blockVar = "Hanya dalam block";
    const blockConst = "Juga hanya dalam block";
    var notBlockVar = "Bisa diakses di luar block"; // var tidak mengenal block scope
}

// console.log(blockVar); // Error!
// console.log(blockConst); // Error!
console.log(notBlockVar); // Bisa diakses
```

Perbedaan penting antara var, let, dan const dalam hal scope:

```javascript
// var bisa diakses sebelum deklarasi (hoisting)
console.log(varVariable); // undefined
var varVariable = "test";

// let dan const tidak bisa diakses sebelum deklarasi
// console.log(letVariable); // Error!
let letVariable = "test";
```

Tips penggunaan scope:
- Hindari penggunaan variable global kecuali memang diperlukan
- Gunakan let dan const daripada var untuk kontrol scope yang lebih baik
- Perhatikan scope saat bekerja dengan closure dan fungsi bersarang

Penting untuk memahami scope agar bisa:
- Menghindari konflik nama variable
- Mengontrol akses ke data
- Menulis kode yang lebih aman dan mudah dipelihara

Karena jam terbang kalian masih kecil, dan belum terlalu banyak menulis codingan yang complex. Disarankan kita akan memakai `var` saja untuk penggunaan variable dalam pembelajaran phase 0 di RPN. Ini akan memudahkan kalian untuk belajar dasar dasar syntaxnya dan tidak terlalu berurusan dengan masalah scoping.


## Logging

Logging dalam JavaScript adalah cara untuk menampilkan informasi, data, atau pesan untuk keperluan debugging dan monitoring. 

1. console.log() - Paling umum digunakan
```javascript
console.log("Pesan biasa");
console.log("User:", { nama: "Budi", umur: 25 });
```

console.log ini bakal kalian saring pakai untuk printing value code kalian, karena kalian nanti bakal ngerjain quiz quiz dari RPN dimana resultnya adalah hasil dari log.

2. console.error() - Untuk menampilkan pesan error
```javascript
console.error("Terjadi kesalahan!");
```

3. console.warn() - Untuk menampilkan peringatan
```javascript
console.warn("Peringatan: Data belum lengkap");
```

4. console.info() - Untuk informasi
```javascript
console.info("Aplikasi berhasil dimuat");
```

5. console.table() - Menampilkan data dalam bentuk tabel
```javascript
const users = [
    { nama: "Budi", umur: 25 },
    { nama: "Ani", umur: 23 }
];
console.table(users);
```

6. console.group() - Mengelompokkan log
```javascript
console.group("User Detail");
console.log("Nama: Budi");
console.log("Umur: 25");
console.groupEnd();
```

7. console.time() dan console.timeEnd() - Mengukur waktu eksekusi
```javascript
console.time("Loop");
for(let i = 0; i < 1000000; i++) {
    // proses
}
console.timeEnd("Loop");
```

Tips penggunaan logging:
- Gunakan logging yang sesuai dengan konteks (error untuk error, warn untuk warning, dll)
- Hindari meninggalkan console.log di kode production
- Manfaatkan fitur formatting untuk log yang lebih informatif
- Gunakan tools browser developer untuk melihat dan memfilter log

Contoh penggunaan dalam debugging:
```javascript
function hitungTotal(harga, jumlah) {
    console.log("Input:", { harga, jumlah });
    
    const total = harga * jumlah;
    console.log("Total:", total);
    
    if (total > 1000000) {
        console.warn("Transaksi besar terdeteksi");
    }
    
    return total;
}
```


## Data Type

Tipe data dalam JavaScript dibagi menjadi dua kategori utama yaitu Primitive Types dan Reference Types.

### 1. Primitive Types (Tipe Data Primitif):

Primitive Types terdiri dari beberapa jenis data yang menyimpan nilai secara langsung. String digunakan untuk menyimpan teks atau karakter, seperti nama atau alamat. Number mencakup semua jenis angka, baik bilangan bulat maupun desimal, yang dapat digunakan untuk perhitungan matematika. Boolean hanya memiliki dua nilai yaitu true atau false, biasanya digunakan untuk logika dan pengambilan keputusan dalam program. Undefined muncul ketika sebuah variabel dideklarasikan tapi belum diberi nilai, sementara Null adalah nilai kosong yang sengaja diberikan. Symbol adalah tipe data yang menghasilkan nilai unik dan tidak dapat diubah.

```javascript
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
```

### 2. Reference Types (Tipe Data Referensi):
Reference Types merupakan tipe data yang lebih kompleks dan menyimpan referensi ke lokasi memori dimana data sebenarnya disimpan. Array adalah tipe data yang dapat menyimpan kumpulan nilai dalam satu variabel, dimana setiap nilai memiliki index numerik yang dimulai dari 0. Object adalah struktur data yang dapat menyimpan pasangan key-value, memungkinkan penyimpanan data yang lebih terstruktur dengan properti yang dapat diakses menggunakan nama propertinya. Function juga termasuk dalam reference type, merupakan blok kode yang dapat dipanggil dan dieksekusi saat dibutuhkan.

```javascript
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
```

Karakteristik penting:
Ini adalah beberapa cara untuk mengetahui tipe data javascript, dan cara mengolah mengkonversi dari tipe data A ke tipe data lainnya.

1. Type Checking:
```javascript
// Menggunakan typeof
console.log(typeof "Budi");      // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (ini adalah bug/quirk JavaScript)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"
```

2. Type Conversion:
```javascript
// String ke Number
let angka = Number("123");     // 123
let text = String(123);        // "123"

// Ke Boolean
let bool = Boolean(1);         // true
let bool2 = Boolean("");       // false

// Automatic conversion
let hasil = "5" + 2;          // "52" (string)
let hasil2 = "5" - 2;         // 3 (number)
```

3. Contoh Best Practice:
```javascript
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
```

Poin-poin penting untuk diingat:
- JavaScript adalah bahasa yang dynamic typing
- Primitive types disimpan berdasarkan nilai
- Reference types disimpan berdasarkan referensi ke memori
- Type coercion bisa terjadi secara otomatis
- Selalu perhatikan tipe data saat melakukan operasi untuk menghindari bug



yak di video nanti ada cheatsheet simple sintaks javascript, mohon maaf kalo kurang lengkap, karena emang sengaja biar kamu explore sendiri.

***DIHARAPKAN KAMU SELALU EXPLORE DAN SEARCHING SENDIRI, KARENA PROGRAMMER SERING DITUNTUT MENYELESAIKAN MASALAHNYA SENDIRIAN***

-------------------------------------------------------------------------------------------
video pembelajaran part 3 biar mudah dipahami (semoga gampang dipahami dah wkwk):
[Part 3](https://youtu.be/BdEUm9huqiM)

jangan lupa diketik itu code di videonya, biasalam sering mengetik kalau ingin jadi programmer 🗿

## Other Source
[Javascript Syntax](https://www.w3schools.com/js/js_syntax.asp)
*other source lebih bagus sih sebenernya 🗿*
