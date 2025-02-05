let input = 5 // inisialisasi counter
for (let i = 0; i < input; i++) { // looping baris
    let star = ''; // menampung nilai star
    for (let j = 0; j <= i; j++) { // looping kolom
        star += '*' // variable star akan ditambah dengan '*'
    }
    console.log(star); // cetak star
}

// for (let a = input - 1; a >= 0; a--) {
//     let bintang = '';
//     for (let b = 0; b <= a; b++) {
//         bintang += '*'
//     }
//     console.log(bintang);
// }

// let x = 1; // inisialisasi counter
// while (x <= input) {
//     console.log('*'.repeat(x)); // cetak bintang sebanyak nilai x
//     x++; // tambh nilai x
// }