function bandingkanAngka(angka1, angka2) {
    if (angka1 === angka2) { // jika angka1 = angka 2, return -1
        return -1;
    } else if (angka2 > angka1) { // jika angka2 > angka1, return true
        return true;
    } else { // jika angka1 > angka2, return false
        return false;
    }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
