// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

/*
algoritma

1. siapkan variabel angka1 dan angka2
2. jika angka1 lebih kecil dari angka2, return true
3. jika angka1 lebih besar dari angka2, return false
4. jika angka1 sama dengan angka2 maka return -1
5. tampilkan hasil
*/

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        return true;
    } else if (angka1 > angka2) {
        return false;
    } else {
        return -1;
    }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false