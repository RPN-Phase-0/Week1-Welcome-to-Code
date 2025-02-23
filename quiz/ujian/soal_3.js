// ## Soal 3


// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60)
    let minute = Math.floor(menit % 60)

    return jam + ':' + String(minute).padStart(2,0)
}

console.log(konversiMenit(119))

// contoh 4.7 
// Math.floor = di bulatkan kebawah result = 5
// Math.Ceil = di bulatkan ke atas result = 4
// Math.Round = Pembulatan biasa result = 5

