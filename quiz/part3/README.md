# Belajar Looping | Part 3

## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// Jawaban :

// Looping Pertama

let i = 0;

console.log('LOOPING PERTAMA \n');

while (i < 10) {
	i++;
	console.log(`${i} - Caffein > Soda`);
}

// KASIH SPACE SIRR
console.log('');

// Looping kedua

let j = 10;

console.log('LOOPING KEDUA \n');

while (j > 0) {
	console.log(`${j} - Soda < Caffein`);
	j--;
}

// Output Looping Pertama :
LOOPING PERTAMA

1 - Caffein > Soda
2 - Caffein > Soda
3 - Caffein > Soda

// Output Looping  Kedua :

LOOPING KEDUA

10 - Soda < Caffein
9 - Soda < Caffein
8 - Soda < Caffein


```

## Soal 2. Melakukan Looping Menggunakan For

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// Jawaban :

// Looping Pertama

console.log('LOOPING PERTAMA \n');

for (let i = 0; i < 10; i++) {
	console.log(`${i} - Caffein > Soda`);
}

// KASIH SPACE SIRR
console.log('');

// Looping kedua

console.log('LOOPING KEDUA \n');

for (let j = 10; j > 0; j--) {
	console.log(`${j} - Soda < Caffein`);
}

// Output Looping Pertama :
LOOPING PERTAMA

1 - Caffein > Soda
2 - Caffein > Soda
3 - Caffein > Soda

// Output Looping  Kedua :

LOOPING KEDUA

10 - Soda < Caffein
9 - Soda < Caffein
8 - Soda < Caffein

```

## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// Jawaban :

console.log('Ganjil ge nap \n');

// Looping Angka 1 - 100

for (let i = 1; i <= 100; i++) {
	// Validasi Angkanya Genap atau Ganjil
	if (i % 2 === 0) {
		console.log(`${i} Genap`);
	} else {
		console.log(`${i} Ganjil`);
	}
}

// Output :
1 Ganjil
2 Genap
3 Ganjil
4 Genap
5 Ganjil
6 Genap
```

## Soal 4. counter kelipatan

```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
```

## Soal 5. Bintang asteriks

```js
// Problem buatlah bintang seperti berikut
let input = 5;
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
