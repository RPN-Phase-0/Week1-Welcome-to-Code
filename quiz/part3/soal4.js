console.log('Kelipatan 3');
for (let i = 1; i <= 100; i += 2) { // perulangan 1-100 dengan pertambahan counter sebanyak 2
    if (i % 3 === 0) { // jika i % 3 = 0, hasilnya kelipatan 3
        console.log(`${i} - kelipatan 3`); // cetak nilai i
    }
}

console.log('Kelipatan 6');
for (let j = 1; j <= 100; j += 5) { // perulangan 1-100 dengan pertambahan counter sebanyak 5
    if (j % 6 === 0) { // jika j % 6 = 0, hasilnya kelipatan 6
        console.log(`${j} - Kelipatan 6`); // cetak nilai j
    }
}

console.log('Kelipatan 10');
for (let k = 1; k <= 100; k += 9) { // perulangan 1-100 dengan pertumbuhan counter sebanyak 9
    if (k % 10 === 0) { // jika k % 10 = 0, hasilnya kelipatan 10
        console.log(`${k} - Kelipatan 10`) // cetak nilai k
    }
}