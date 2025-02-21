// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

/*
algoritma
1. buat variabel untuk menyimpan nilai bintang, dan var input
2. looping sebanyak input
3. looping kembali untuk menentukan jumlah bintang (misal i = 1 / baris pertama, looping kedua berjalan sebanyak i (1) bintang
4. jika 1 baris (i) sudah selesai, tambahkan enter (\n)

*/

let bintang = "";

for(let i = 1; i <= input; i++){
    for(let j = 1; j <= i; j++){
        bintang += "*";
    }
    bintang += '\n';
}

console.log(bintang);