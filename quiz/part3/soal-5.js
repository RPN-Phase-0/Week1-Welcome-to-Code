// Problem buatlah bintang seperti berikut

/**
 * ! Logic
 * * Menambahkan satu variabel dengan tipe data kosong
 * * Melakukan looping dengan kondisi (i = 0; i < input; i++)
 * * Akan melakukan looping sampai kondisi < 5
 * * di dalam nya maka akan mencetak Bintang sampai 5
 * ! Selesai
 */

let input = 5;
let text = "";

//hasilnya
//*
//**
//***
//****
//*****

for (let i = 0; i < input; i++) {
  console.log((text += "*"));
}
