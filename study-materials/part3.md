# Javascript Syntax Basics | Part 3

Sebelumnya kalian belajar contoh algoritma pseudocode, dan setelah kalian melihatnya untuk pertama kali, kalian pasti bingung dengan istilah-istilah yang digunakan pada pseudocode. itu sudah pasti karena kamu belum belajar konsep pemrograman dasarnya.

pada part kali ini juga kita akan belajar dasar pemrogramannya yang dimana dasar-dasar ini ada hampir sama di semua bahasa pemrograman meskipun menggunakan bahasa pemrograman javascript. nah yang membedakan itu disebut syntax

simplenya syntax itu adalah aturan menulis code, cuma itu yang membedakan antara bahasa pemrograman 1 dengan yang lainnya, tapi tenang aja, mirip-mirip kok syntaxnya.

![image](https://github.com/user-attachments/assets/e6a63c0e-4b31-405b-ba36-d6098a068464)


langsung saja kita akan belajar syntax dasar dari javascript dimulai dari variable.

## Variable
![image](https://github.com/user-attachments/assets/c5e00bb8-9042-4a0d-a733-447ef9e4ccfd)

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


## Strings Type (Detailed)

String dalam JavaScript memiliki beberapa karakteristik penting yang perlu dipahami. Pertama, string bersifat immutable, yang berarti setelah string dibuat, nilainya tidak dapat diubah. Ketika kita melakukan operasi pada string, sebenarnya kita membuat string baru, bukan mengubah string aslinya.

Setiap karakter dalam string memiliki posisi numerik yang disebut index, dimulai dari 0. Misalnya dalam string "Hello", 'H' berada di index 0, 'e' di index 1, dan seterusnya. 

lihat contoh lengkapnya:

```javascript
let teks = "Hello World";

// Mengakses karakter dengan index
console.log(teks[0]);     // "H"
console.log(teks[6]);     // "W"
console.log(teks[10]);    // "d"

// Mencoba mengubah karakter (tidak akan berhasil karena immutable)
teks[0] = "J";           // Tidak akan mengubah string
console.log(teks);       // Tetap "Hello World"
```

String juga memiliki properti length yang menunjukkan panjang string tersebut. Ini sangat berguna untuk melakukan iterasi atau pemeriksaan string:

```javascript
let nama = "Budi Santoso";
console.log(nama.length);  // 12

// Mengakses karakter terakhir
console.log(nama[nama.length - 1]);  // "o"
```

JavaScript menyediakan berbagai method untuk memanipulasi string. Method-method ini selalu menghasilkan string baru tanpa mengubah string asli:

```javascript
let kalimat = "Belajar JavaScript";

// Mengambil substring
console.log(kalimat.substring(0, 7));    // "Belajar"

// Mengubah case
console.log(kalimat.toUpperCase());      // "BELAJAR JAVASCRIPT"
console.log(kalimat.toLowerCase());      // "belajar javascript"

// Mencari posisi substring
console.log(kalimat.indexOf("JavaScript"));  // 8
```

Kita juga bisa menggunakan template literals (dengan backtick) untuk membuat string yang lebih kompleks:

```javascript
let nama = "Budi";
let umur = 25;

// Template literal memungkinkan ekspansi variabel dan multiple line
let profil = `Nama: ${nama}
Umur: ${umur} tahun`;

console.log(profil);
// Output:
// Nama: Budi
// Umur: 25 tahun
```

Dalam pemrosesan string, sering kali kita perlu melakukan iterasi untuk memeriksa atau memanipulasi setiap karakter:

```javascript
let kata = "Indonesia";

// Menghitung jumlah vokal
let jumlahVokal = 0;
for(let i = 0; i < kata.length; i++) {
    if("aiueoAIUEO".includes(kata[i])) {
        jumlahVokal++;
    }
}
console.log(`Jumlah vokal: ${jumlahVokal}`);  // 5
```

Penting untuk diingat bahwa meskipun kita bisa mengakses karakter individual dalam string menggunakan index, kita tidak bisa mengubahnya secara langsung. Jika perlu mengubah string, kita harus membuat string baru dengan perubahan yang diinginkan. Ini adalah salah satu aspek fundamental dari sifat immutable string di JavaScript.


## Numbers (Operator)

Di JavaScript, tipe data Number mencakup semua jenis angka, baik itu bilangan bulat (integer) maupun bilangan desimal (floating-point). JavaScript menggunakan format 64-bit double-precision floating-point untuk menyimpan nilai numerik. Ini berarti kita tidak perlu mendeklarasikan tipe khusus untuk integer atau decimal seperti di beberapa bahasa pemrograman lain.

```javascript
// Deklarasi number
let bilBulat = 42;        // integer
let bilDesimal = 3.14;    // floating-point
let negatif = -17;        // bilangan negatif
let eksponensial = 2e5;   // 200000 (notasi eksponensial)
```

JavaScript menyediakan beberapa operator aritmatika dasar untuk melakukan perhitungan matematika. Operator-operator ini sangat mirip dengan matematika yang kita pelajari sehari-hari:

```javascript
// Operator aritmatika dasar
let a = 10;
let b = 3;

console.log(a + b);    // 13 (penjumlahan)
console.log(a - b);    // 7 (pengurangan)
console.log(a * b);    // 30 (perkalian)
console.log(a / b);    // 3.3333... (pembagian)
console.log(a % b);    // 1 (modulus/sisa pembagian)
console.log(a ** b);   // 1000 (pangkat)
```

JavaScript juga memiliki operator increment dan decrement yang sangat berguna untuk menambah atau mengurangi nilai sebesar 1:

```javascript
let counter = 5;

// Increment (menambah 1)
counter++;     // counter = counter + 1
console.log(counter);   // 6

// Decrement (mengurangi 1)
counter--;     // counter = counter - 1
console.log(counter);   // 5
```

Untuk operasi yang lebih kompleks, JavaScript menyediakan object Math yang memiliki banyak method matematika berguna:

```javascript
// Menggunakan Math object
console.log(Math.round(3.7));    // 4 (pembulatan ke terdekat)
console.log(Math.floor(3.7));    // 3 (pembulatan ke bawah)
console.log(Math.ceil(3.2));     // 4 (pembulatan ke atas)
console.log(Math.abs(-5));       // 5 (nilai absolut)
console.log(Math.sqrt(16));      // 4 (akar kuadrat)
console.log(Math.min(2, 5, 1));  // 1 (nilai terkecil)
console.log(Math.max(2, 5, 1));  // 5 (nilai terbesar)
```

Penting untuk memahami bahwa JavaScript memiliki beberapa nilai khusus untuk number:

```javascript
// Nilai khusus
console.log(Infinity);           // representasi tak hingga
console.log(-Infinity);          // negatif tak hingga
console.log(NaN);               // Not a Number (hasil operasi yang tidak valid)

// Contoh yang menghasilkan NaN
console.log(0/0);               // NaN
console.log(parseInt("hello")); // NaN
```

Untuk mengkonversi string menjadi number, JavaScript menyediakan beberapa method:

```javascript
// Konversi ke number
let stringAngka = "123";
let desimalString = "3.14";

console.log(Number(stringAngka));     // 123
console.log(parseInt(stringAngka));   // 123
console.log(parseFloat(desimalString)); // 3.14
console.log(+'123');                 // 123 (cara cepat dengan operator +)
```

Ketika bekerja dengan perhitungan yang melibatkan uang atau presisi tinggi, perlu diperhatikan bahwa JavaScript bisa mengalami masalah presisi floating-point:

```javascript
console.log(0.1 + 0.2);         // 0.30000000000000004
// Solusi: gunakan toFixed() atau kalikan dengan 100 saat perhitungan
console.log((0.1 + 0.2).toFixed(2));  // "0.30"
```

Pemahaman yang baik tentang number dan operator-operatornya sangat penting dalam pemrograman JavaScript, terutama untuk aplikasi yang melibatkan banyak perhitungan matematika. Kalian akan sering menemukan soal soal coding di RPN yang menggunakan operator matematika ini jadi harus dilatih semua syntax operatornya.

## Conditional Statements

Conditional statements dalam JavaScript adalah struktur kontrol yang memungkinkan program untuk mengeksekusi kode yang berbeda berdasarkan kondisi tertentu. Bayangkan ini seperti pengambilan keputusan dalam kehidupan sehari-hari - jika kondisi tertentu terpenuhi, kita melakukan satu hal, dan jika tidak, kita melakukan hal lain.

Bentuk paling dasar dari conditional statement adalah pernyataan "if". Ini seperti mengatakan "jika sesuatu benar, lakukan ini". Misalnya, dalam kode:

```javascript
let usia = 18;
if (usia >= 17) {
    console.log("Anda sudah bisa membuat KTP");
}
```

Di sini, program memeriksa apakah usia lebih besar atau sama dengan 17. Jika benar, pesan akan ditampilkan. Jika tidak, program akan melanjutkan ke baris berikutnya tanpa menampilkan pesan.

Kita juga bisa menambahkan alternatif menggunakan "else", yang akan dijalankan ketika kondisi awal tidak terpenuhi. Ini seperti mengatakan "jika kondisi ini benar, lakukan ini; jika tidak, lakukan itu". Contohnya:

```javascript
let nilai = 75;
if (nilai >= 60) {
    console.log("Anda lulus");
} else {
    console.log("Anda perlu mengulang");
}
```

Untuk situasi yang lebih kompleks, kita bisa menggunakan "else if" untuk memeriksa beberapa kondisi secara berurutan. Ini seperti memiliki serangkaian pertanyaan: "apakah ini benar? jika tidak, apakah itu benar? jika tidak juga, bagaimana dengan yang ini?". Contohnya:

```javascript
let cuaca = "hujan";
if (cuaca === "cerah") {
    console.log("Waktunya piknik!");
} else if (cuaca === "mendung") {
    console.log("Bawalah payung");
} else if (cuaca === "hujan") {
    console.log("Tetap di dalam ruangan");
} else {
    console.log("Cuaca tidak dapat diprediksi");
}
```

JavaScript juga menyediakan cara singkat untuk menulis kondisi sederhana menggunakan operator ternary. Ini berguna ketika kita hanya perlu memilih antara dua nilai berdasarkan kondisi:

```javascript
let umur = 20;
let status = umur >= 18 ? "dewasa" : "remaja";
```

Untuk kasus di mana kita perlu membandingkan satu nilai dengan banyak kemungkinan, kita bisa menggunakan pernyataan "switch". Ini seperti memiliki daftar kemungkinan nilai dan apa yang harus dilakukan untuk masing-masing nilai:

```javascript
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
```

Conditional statements sangat penting dalam pemrograman karena mereka memungkinkan program kita untuk membuat keputusan dan bereaksi terhadap berbagai situasi yang berbeda. Tanpa conditional statements, program kita hanya akan menjalankan instruksi yang sama setiap kali, tidak peduli apa yang terjadi. Dengan conditional statements, kita bisa membuat program yang lebih pintar dan responsif terhadap berbagai kondisi dan input yang berbeda.

## Logic Operator (Gerbang logika)
![image](https://github.com/user-attachments/assets/25bceff3-2ecd-476f-843a-345746542433)

Operator logika dalam JavaScript adalah alat yang memungkinkan kita mengevaluasi dan mengkombinasikan beberapa kondisi. Mari kita pelajari operator-operator logika utama dan bagaimana cara kerjanya.

Operator AND (&&) mengevaluasi apakah kedua kondisi bernilai benar. Bayangkan seperti mengajukan dua pertanyaan, dan kedua jawaban harus "ya" agar hasilnya benar. Misalnya:

```javascript
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
```

Operator OR (||) memeriksa apakah setidaknya satu kondisi bernilai benar. Ini seperti memberikan beberapa opsi, dan jika salah satu terpenuhi, hasilnya benar. Contohnya:

```javascript
let metodePembayaran = "transfer";

// Memeriksa metode pembayaran yang valid
if (metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "e-wallet") {
    console.log("Metode pembayaran diterima");
}

// OR berguna untuk nilai default
let namaPengguna = "";
let displayName = namaPengguna || "Tamu"; // Jika namaPengguna kosong, gunakan "Tamu"
```

Operator NOT (!) membalikkan nilai boolean. Ini seperti mengubah "ya" menjadi "tidak" atau sebaliknya:

```javascript
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
```

Operator logika bisa dikombinasikan untuk membuat kondisi yang lebih kompleks. Penting untuk memahami urutan evaluasinya:

```javascript
let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = true;

// Mengkombinasikan beberapa kondisi
if ((cuaca === "cerah" || cuaca === "berawan") && (waktu === "pagi" && akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging!");
}
```

JavaScript juga memiliki konsep "short-circuit evaluation" yang penting untuk dipahami:

```javascript
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
```

Memahami operator logika dengan baik sangat penting karena mereka adalah fondasi untuk membuat keputusan dalam program. Mereka memungkinkan kita membuat kondisi yang kompleks namun tetap mudah dibaca dan dipahami. 

Silahkan praktek materi ini menggunakan VScode dan nodejs yang kalian sudah set up di part sebelumnya, cobain semua tipe data javscript dan console.log untuk mengetahui resultnya. Semakin banyak kalian menulis code dan mencoba coba code diatas akan semakin terlatih dengan syntax javascript.

***DIHARAPKAN KALIAN SELALU EXPLORE DAN SEARCHING SENDIRI, KARENA PROGRAMMER SERING DITUNTUT MENYELESAIKAN MASALAHNYA SENDIRIAN***

-------------------------------------------------------------------------------------------
video pembelajaran part 3 biar mudah dipahami dari harkon (helper).
[Part 3](https://youtu.be/BdEUm9huqiM)

jangan lupa diketik itu code di videonya, biasakan sering mengetik kalau ingin jadi programmer 🗿

## Other Source
[Javascript Syntax](https://www.w3schools.com/js/js_syntax.asp)
