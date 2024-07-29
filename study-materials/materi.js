// Looping

// tips arah > untuk pertambahan arah < untuk pengurangan

// while()
// let i = 0;
// while(i < 5){
//     console.log(i)
//     i++
// }

//for()
// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let nama = 'rudy';
// for (let i = 0; i < nama.length; i++){
//     console.log(nama[i]);
// }

// let name = 'pani';
// result ='';
// for (let i = name.length-1; i >= 1; i--){
// result += name[i];
// }
// console.log(result);

// nested loop

// for (i = 0; i < 3;i++ ){
//     for(let o= 0; o <9; o++){
//         console.log(o);
//     }
//     console.log('longkap pilar'); // merupakan sebuah longkapan dari setiap pilarnya
// }
/*
Nested Looping merupakan sebuah loop di dalam loop
maksudnya adalah, loop pertama itu sebagai pilar untuk mengulang berapa kali pilar tersebut
loop kedua adalah jumlah dari isi dipilarnya, jika i nya saya set 2 maka pilarnya ada 2, dan jika o 
saya set 6 maka isi dari pilarnya adalah 6
*/

// counter pada looping

// let i = 0;
// while (i < 100){
//     console.log(i)
//     i+=2;
// }

// looping bersarang if else

// let i = 0;
// while(i<50){
//     if(i % 2 === 0 ){
//         console.log(`${i}  adalah genap`)
//     }else{
//         console.log(`${i} adalah ganjil`)
//     }
// i++;
// }



/*
FIZZBUZZ PROBLEM

jika i === kelipatan 3 maka yang muncul akan fizz
jika i === kelipatan 5 maka yang muncul akan buzz
jika i === kelipatan 3 dan 5 maka yang muncul fizzbuzz
jika i bukan kelipatan 3 atau 5 maka yanng muncul hanya angka
*/

// for(let i=0; i<100;i++){
//     if(i % 3 === 0 && i % 5 === 0 ){
//         console.log('FizzBuzz')
//     }else if (i % 3 === 0 && i % 5 !==0){
//         console.log('Fizz')
//     }else if(i % 5 === 0 && i % 3 !==0){
//         console.log('Buzz')
//     }else{
//         console.log(i);
//     }
// };

//continue and break
/*
continue untuk mengskip sebuah barisan
break untuk memberhentikan barisan
*/
// continue

// for(i = 0; i < 10 ; i++){
//     if( i === 8){
//         console.log('angka ini akan terskip dan melanjutkan ke angka berikutnya');
//         continue;
//     }
// console.log(i)
// }

//break
// for(i = 0; i < 10 ; i++){
//     if( i === 8){
//         console.log('angka akan terhenti di angka'+" " + i);
//         break;
//     }
// console.log(i)
// }

//function()
// menjalankan fungsi
function hello(){
    return 'HelloWorld'
    // fungsi ini memiliki nilai "HelloWorld" karena retrun memberikan nilai ke fungsi
}
console.log(hello());
// jika perintah console.log(hello) maka fungsi tidak akan menunjuakan outputnya


function test (){
    console.log('tester');
}
// test();
// fungsi test akan menampilkan output tester
// jika fungsi test di panggil lagi ke console.log maka yang terjadi akan undeiend
console.log(test());
// kenapa undefiend?? karena fungsi test tidak memiliki return yang akan menghasilkan nilai

// Parameter pada fungsi
let penjumlahan = function
( /* ini merupakan parameter, anda bebas membuat parameter sebanyak" nya*/angka1, angka2){
    return angka1 + angka2 /* parameter dibuat nilai dengan return*/
}
console.log(penjumlahan(1,2)); /* fungsi dijalankan dengan menampilkan hasil dari nilai yang di*/ 
// apa maksud kode diatas? 