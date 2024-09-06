// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


for (let index = 1; index <= 100; index+= 2) {
    if (index%3==0) {
        console.log(index+ " kelipatan 3");
    }
}

for (let index = 1; index <= 100; index+= 5) {
    if (index%6==0) {
        console.log(index+ " kelipatan 6");
    }
}
for (let index = 1; index <= 100; index+= 9) {
    if (index%10==0) {
        console.log(index+ " kelipatan 10");
    }
}