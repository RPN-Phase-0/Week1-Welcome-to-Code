const arr = [5, 3, 8, 2];
for (let i = 0; i < arr.length; i++) {
  // Loop utama
  for (let j = 0; j < arr.length - 1; j++) {
    // Loop perbandingan
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Tukar nilai
    }
  }
}
console.log(arr); // Output: [2, 3, 5, 8]


//? const arr = [5, 3, 8, 2];
//? lenght = 4 length - 1 = 3
  

//* 0. Apakah 0 < 4 (ya),
//*     apakah 0 < 3 (ya)
//*         0. Jika 5 > 3, maka: 5, 3 = 3, 5 (ubah posisi)
//*         1. Jika 3 > 8, tidak!!!
//*         2. Jika 8 > 2, maka: 8, 2 = 2, 8 (ubah posisi)

//TODO hasil: 3, 5, 2, 8

//* 1. Apakah 1 < 4 (ya),
//*     apakah 0 < 3 (ya)
//*         0. Jika 3 > 5, tidak!!
//*         1. Jika 5 > 2, maka: 5, 2 = 2, 5
//*         2. Jika 2 > 8, tidak!!

//TODO hasil: 3, 2, 5, 8

//* 2. Apakah 2 < 4 (ya),
//*     apakah 0 < 3 (ya)
//*         0. Jika 3 > 2, maka: 3, 2 = 2, 3
//*         1. Jika 2 > 5, tidak!!
//*         2. Jika 5 > 8, tidak!!

//TODO hasil: 2, 3, 5, 8


//* 3. Apakah 3 < 4 (ya),
//*     apakah 0 < 3 (ya)
//*         0. Jika 2 > 3, tidak!!
//*         1. Jika 3 > 5, tidak!!
//*         2. Jika 5 > 8, tidak!!

//TODO hasil: 2, 3, 5, 8


//! HASIL AKHIR: 2, 3, 5, 8
        
    

        
    
