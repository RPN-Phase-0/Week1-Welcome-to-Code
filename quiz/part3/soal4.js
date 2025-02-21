// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.


// Kelipatan 3
let i = 1
while(i <= 100) {
  if(i % 3 === 0) {
    console.log(`${i} kelipatan 3`)
    i+= 2
  } else {
    console.log(i)
    i++
  }
}

// Kelipatan 6
let j = 1
while(j <= 100) {
  if(j % 6 === 0){
    console.log(`${j} kelipatan 6`)
    j+= 5
  } else {
    console.log(j)
    j++
  }
}

// Kelipatan 10
let z = 1 
while(z <= 100) {
  if(z % 10 === 0) {
    console.log(`${z} kelipatan 10`)
    z += 9
  } else {
    console.log(z)
    z++
  }
}