// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
for (i = 1; i <= 100; i += 2){
    if( i % 3 === 0) {
        console.log(i, 'kelipatan 3');
    };
};

for(i = 1; i <= 100; i += 5) {
    if(i % 6 === 0) {
        console.log(i, 'kelipatan 6');
    };
};

for(i = 1; i <= 100; i += 9) {
    if(i % 10 === 0) {
        console.log(i, 'kelipatan 10');
    };
};

