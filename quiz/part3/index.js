console.log('LOOPING PERTAMA');
let i = 2;
while (i <= 20) {
    console.log(i + ' - I love coding');
    i += 2;
}

console.log('LOOPING KEDUA');
i = 20;
while (i >= 2) {
    console.log(i + ' - I will become superman');
    i -= 2;
}

console.log('LOOPING PERTAMA');
for (let i = 1; i <= 10; i++) {
    console.log(i + ' - I love mama');
}

console.log('LOOPING KEDUA');
for (let i = 10; i >= 1; i--) {
    console.log(i + ' - I will become superman');
}

console.log('ANGKA GANJIL & GENAP');
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + ' - GENAP');
    } else {
        console.log(i + ' - GANJIL');
    }
}

console.log('KELIPATAN 3 (pertambahan 2)');
for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' - 3 kelipatan 3');
    }
}

console.log('KELIPATAN 6 (pertambahan 5)');
for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + ' - 6 kelipatan 6');
    }
}

console.log('KELIPATAN 10 (pertambahan 9)');
for (let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + ' - 10 kelipatan 10');
    }
}

console.log('BINTANG ASTERIKS');
let input = 5;
for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
}
