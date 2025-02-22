// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


console.log("pertambahan 2:");
for (let epep = 1; epep <= 100; epep += 2) {
    if (epep % 3 === 0) {
        console.log(epep + " - kelipatan 3");
    }
}

console.log("\npertambahan 5:");
for (let pabji = 1; pabji <= 100; pabji += 5) {
    if (pabji % 6 === 0) {
        console.log(pabji + " - kelipatan 6");
    }
}
console.log("\npertambahan 9:");
for (let ikangorengduaditambahayamditambahsapisamabeligaramdanbelicabe5kilobuatmasakmalamnanti = 1; ikangorengduaditambahayamditambahsapisamabeligaramdanbelicabe5kilobuatmasakmalamnanti <= 100; ikangorengduaditambahayamditambahsapisamabeligaramdanbelicabe5kilobuatmasakmalamnanti += 9) {
    if (ikangorengduaditambahayamditambahsapisamabeligaramdanbelicabe5kilobuatmasakmalamnanti % 10 === 0) {
        console.log(ikangorengduaditambahayamditambahsapisamabeligaramdanbelicabe5kilobuatmasakmalamnanti + " - kelipatan 10");
    }
}
