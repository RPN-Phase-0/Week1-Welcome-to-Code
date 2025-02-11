# Belajar Looping | Part 3

## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// menghitung maju
console.log("LOOPING PERTAMA");
let i = 1;
while (i <= 10) {
  console.log(`Looping menghitung maju ke ${i}`);
  i++;
}

console.log("LOOPING KEDUA");
// menghitung mundur
let j = 10;
while (j >= 1) {
  console.log(`Lopping menghitung mundur ke ${j}`);
  j--;
}
```

## Soal 2. Melakukan Looping Menggunakan For

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// menghitung maju
console.log("LOOPING PERTAMA");
for (let i = 1; i <= 10; i++) {
  console.log(`Looping menghitung maju ke ${i}`);
}

// menghitung mundur
console.log("LOOPING KEDUA");
for (let j = 10; j >= 1; j--) {
  console.log(`Lopping menghitung mundur ke ${j}`);
}
```

## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`angka genap: ${i}`);
  } else [console.log(`angka ganjil: ${i}`)];
}
```

## Soal 4. counter kelipatan

```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("Pertambahan 2");
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`kelipatan 3 ${i}`);
  }
}

console.log("Pertambahan 5");
for (let j = 1; j <= 100; j += 5) {
  if (j % 6 === 0) {
    console.log(`kelipatan 6 ${j}`);
  }
}

console.log("Pertambahan 9");
for (let k = 1; k <= 100; k += 9) {
  if (k % 10 === 0) {
    console.log(`kelipatan 10 ${k}`);
  }
}
```

## Soal 5. Bintang asteriks

```js
// Problem buatlah bintang seperti berikut
let input = 5;
let pattern = "";

for (let i = 0; i <= input; i++) {
  for (j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);

//hasilnya
//*
//**
//***
//****
//*****
```

---

Tips pengerjaan ada di video berikut :
[Looping](https://youtu.be/kyobpgoqx2c)

[Materi Looping](../../study-materials/part5.md)
