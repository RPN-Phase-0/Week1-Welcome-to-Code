console.log("Hello World!")
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Contoh Penggunaan:
console.log(cekGenapGanjil(20)); //Output: "GENAP"
console.log(cekGenapGanjil(17)); //Output: "Ganjil"

let produk = {
    nama: "Laptop", //string
    harga: 15000000, //number
    stok: 5, //number
    spesifikasi: ["i7", "16GB RAM"], //array
    tersedia: true, //boolean
    getInfo: function() { //function
        return `${this.nama} - Rp${this.harga}`;
    }
};
//menggunakan berbagai tipe data
if (produk.stok > 0 && produk.tersedia) {
    console.log(produk.getInfo());
    console.log("Spesifikasi:", produk.spesifikasi.join(", "));
}

let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = true;

// Mengkombinasikan beberapa kondisi
if ((cuaca === "cerah" || cuaca === "berawan") && (waktu === "pagi" && akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging!");
}