//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//varibael bisa menampung tipe data string (text), integer/number, boolean, array, object,

let nama = 'bryan';//string
let umur = 22;//number
let apakahBenar = true; //boolean
let uang = 5000.5 // number namun ada koma

//operator arimatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'sisa bagi/modulus');

//disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika, 'pertambahan dengan variabel'); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika, 'pengurangan menggunakan varabel'); //10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika, 'pembagian dengan variabel'); // 0.5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika, 'perkalian menggunakan variabel'); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika, 'modulus menggunakan variabel'); // 10

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname) //NaN

//alur pembacaan code
//untuk membaca code kalian harus membaca dari kiri ke kanan, dana atas ke bawah
//contoh

let number = 20;
console.log(number +10); //30
number = 10;
console.log(number + 10); // 10+10 = 20
number = false;
console.log(number + 10); //10 karena false = 0,
number = true;
console.log(number+ 10); //11 karena true = 11,

//membaca error
//error itu jangan buat kalian takut, but you have to fear if no error occur in programming
//becasue in work, if a feature work properly but there is a bug but no error, it makes programmer crazy
//throw up to looking for error or where the error lies

//contoh error
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya'; 

// shortcut for auto comment ctrl + /

//tips : selalu teliti, dana kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan
//kareana ngoding itu adalah habit