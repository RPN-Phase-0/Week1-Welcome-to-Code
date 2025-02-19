# Ujian

***DISINI KALIAN AKAN MEMBUAT ALGORITMA KALIAN SENDIRI SESUAI PERMASALAHAN YANG ADA DIBAWAH***
***KERJAKAN DENGAN SESUAI TEST-CASE NYA***


## Soal 1
```js
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

//ALGORITMA
ALGORITMA BandinkanAngka
    FUNCTION BandingkanAngka(angka1: INTEGER, angka2: INTEGER) <- INTEGER
        DEKLARASI:
            -
        DESKRIPSI:
            IF angka1 < angka2 THEN
                RETURN true
            ELSE IF angka1 > angka2 THEN
                RETURN false
            ELSE
                RETURN -1
            END IF
    ALGORITMA UTAMA
        DEKLARASI:
            -
        DESKRIPSI:
            OUTPUT bandingkanAngka(5, 8)
            OUTPUT bandingkanAngka(5, 3)
            OUTPUT bandingkanAngka(4, 4)
            OUTPUT bandingkanAngka(3, 3)
            OUTPUT bandingkanAngka(17, 2)


//CODE PROGRAM
function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2){
        return true;
    } else if (angka1 > angka2){
        return false;
    } else{
        return -1
    }
}
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

```
## Soal 2
```js
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

//ALGORITMA
ALGORITMA balikKata
    FUNCTION balikKata(kata: STRING) <- STRING
        DEKLARASI:
            result <- STRING
        DESKRIPSI:
            result <- ""
            FOR i FROM LENGTH(kata) - 1 TO 0 STEP -1 DO
                result <- result + kata[i]
            END FOR
            RETURN result
    ALGORITMA UTAMA
        DEKLARASI:
            -
        DESKRIPSI:
            OUTPUT BalikKata("hello")   
            OUTPUT BalikKata("world")   
            OUTPUT BalikKata("12345")   
            OUTPUT BalikKata("racecar")


//CODE PROGRAM
function balikKata(kata) {
    let result = "";
    for(let i=kata.length-1; i>= 0; i--){
        result += kata[i];
    }
    return result;
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

```
## Soal 3
```js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

//ALGORITMA
ALGORITMA KonversiMenit
    FUNCTION konversiMenit(menit: INTEGER) <- STRING
        DEKLARASI:
            jam <- INTEGER
        DESKRIPSI:
            IF menit < 60 THEN
                return "0:",FORMAT_2_DIGIT(TO_STRING(menit))
            ELSE IF menit >= 60 THEN
                jam <- FLOOR(menit/60)
                menit <- menit MOD 60
                RETURN jam,":",FORMAT_2_DIGIT(TO_STRING(menit))
            ELSE
                RETURN "MENIT TIDAK VALID"
            END IF
    ALGORITMA UTAMA
        DEKLARASI:
            -
        DESKRIPSI:
            OUTPUT konversiMenit(63)
            OUTPUT konversiMenit(124)
            OUTPUT konversiMenit(53)
            OUTPUT konversiMenit(88)
            OUTPUT konversiMenit(120)
        
//CODE PROGRAM
function konversiMenit(menit) {
    if(menit < 60){
        return `0:${menit.toString().padStart(2, '0')}`
    } else if (menit >= 60){
        let jam = Math.floor(menit/60);
        menit %= 60;
        return `${jam}:${menit.toString().padStart(2, '0')}`
    } else{
        return "Menit tidak valid"
    }
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
```

## Soal 4
```js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

//ALGORITMA
ALGORITMA xo
    FUNCTION xo(str: STRING) <- BOOLEAN
        DEKLARASI:
            x, o <- INTEGER
        DESKRIPSI:
            FOR i FROM 0 TO LENGTH(str) -1 STEP +1 DO
                IF str[i] = "x" THEN
                    x <- x + 1
                ELSE IF str[i] = "o" THEN
                    o <- o + 1
                END IF
            END FOR
            IF X = O THEN
                RETURN true
            ELSE THEN
                RETURN false
            END IF
    ALGORITMA UTAMA
        DEKLARASI:
            -
        DESKRIPSI:
            OUTPUT xo('xoxoxo')
            OUTPUT xo('oxooxo')
            OUTPUT xo('oxo')
            OUTPUT xo('xxxooo')
            OUTPUT xo('xoxooxxo')


//CODE PROGRAM
function xo(str) {
    let x = 0;
    let o = 0;
    for(let i=0; i<= str.length-1; i++){
        if(str[i] === "x"){
            x += 1;
        } else if (str[i] === "o"){
            o += 1;
        }
    }
    if(x === o){
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
```