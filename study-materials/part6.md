# Belajar Function | Part 6

pada part kali ini kita akan belajar apa itu function pada javascript ya

fungsi itu semacam block of code yang isinya proses tertentu, misal ada fungsi balikKata ya fungsi tersebut memproses untuk membalikan suatu kata

perlu di ingat, bahwa fungsi itu bisa mengembalikan nilai dan bisa tidak mengembalikan nilai (kalo kata penulis itu mengembalikan nilai = punya nilai)

```js
function test1() {
  return "woi"; // ini fungsi yang punya nilai
}

function test2() {
  console.log("woi"); //ini ga punya nilai tapi dia bisa ngasih output
  //karena ada perintah console.log()
}
```

lalu cara menjalankan fungsi seperti berikut

```js
test1(); //ini menjalankan karena ada ()
test1 //ini ngapain njir????

```

kalian bebas nentuin mau berapa parameter untuk fungsi yang kalian buat
```js
function ntahApaIni(a,b,c,d) {
  //suka suka kalian lah disini mau apa
}

ntahApaIni(1,2,3,4,5)
//kok ada 5, kan d itu sampe 4, sedangkan 5 itu ga ada di parameter?
//tenang saja angka 5 ga akan dianggap
```
point penting dalam belajar function
> - teliti dalam penentuan parameter mau tipe data apa aja
> - jangan lupa kasih () buat jalanin fungsinya
> - penamaan fungsi harus jelas
> - penamaan parameter juga harus jelas

---

vid untuk pemahaman fungsi, yang mungkin kalian butuh, apalagi di menit menit akhir itu ada contoh kompleksnya:

[Belajar Function by RPN](https://youtu.be/qaHT0psosU0)

## Ada yang harus kalian pahami lagi selain Function kali ini
oh iya pada materi function, coba kalian pahami apa itu scope pada pemrograman ya
soalnya scope penting juga untuk dipahami

## Scope

```js
let nama = "andi"; //variabel ini ada pada global scope
//yang mana bisa diakses pada fungsi fungsi yang sejajar

function hello() {
  let hello = "hello "; //variabel ini ada di local scope
//local scope fungsi hello, yang mana akan error kalau variabel hello kita panggil keluar
//dari fungsinya

  console.log(hello + nama1);
}

console.log(helo) //ini akan error wkwk

//simplenya penulis menyebutkan adanya hirarki pada pemrograman
//misal

let nilai = 50

if (nilai >= 50) {
  let hasil = "lulus" //disini bisa deklarasi variabel hasil
} else {
  let hasil = "Tidak lulus" ////disini juga bisa deklarasi variabel hasil
}

console.log(hasil) //namun bila dijalankan ya akan error, karena variabel hasil hanya bisa
//diakses pada local scope if dan else

```

`{` dan `}` pada if else, dan looping,itu akan menghasilkan block scope

```js
//global scope
if (kondisi) {
  //block scope nya si if
} else {
  //block scopenya si else
}
//ini masih global scope
function ntahApa() {
  //local scopenya si fungsi ntahApa
  if (kondisi) {
    //ini makin dalam, yg dinamakan block scope
    //let hello = "woi wkwkw"
  }

  console.log(hello) //error nanti soalnya ga se scope
}
```

solusinya gimana tuh kalo emang pengen manipulasi variabel dalam conditional statement???

berikut solusinya:

```js
let woi = "woi";
function ntahApa() {
  //local scopenya si fungsi ntahApa
  let hello = "";
  if (kondisi) {
    //ini block scope
    hello = "woi wkwkw"
    console.log(hello) //ini ga akan error, ya karena var hello ada di luar scopenya
    let akanError = "hehehe";
  }
  // console.log(akanError) //ini akan error, kenapa? pahami sendiri dah wkwk

  console.log(hello) //ini ga error, soalnya log ini dan var hello berada dalam scope yang sama
  console.log(woi) //ini juga ga error, karena memanggil var woi yang berada di luar/atas/global scope
}
```

Referensi: [Link](https://medium.com/@adhywiranata/bermain-scope-di-javascript-d954e07d05ae)