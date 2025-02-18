function bandingkanAngka(angka1, angka2) { 
    return angka1 < angka2 ? true : (angka1 > angka2 ? false : -1);
}

// using ternary condition 

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false