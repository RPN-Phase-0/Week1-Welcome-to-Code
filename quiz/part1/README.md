# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut

## Soal 1:

```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

1. Melakukan Validasi untuk variable Nama, bila kosong akan diberikan peringatan "Nama wajib diisi !"

2. Validasi Role,Jika role-nya tidak dipilih / kosong maka akan memberi output "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

3. Jika rolenya isi dengan role yang tersedia maka akan memberikan output yang sesuai dengan rolennya :
    Ksatria : `halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu! `

    Tabib : `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`

    Penyihir : `halo Penyihir ${nama} , ciptakan kajaiban yang membantu kemenanganmu!`

let nama = 'Zaky',
	role = 'Ksatria';

if (nama.length <= 0 || nama === '') return console.log('Nama wajib di isi!');

switch (role) {
	case 'Ksatria':
		console.log(
			`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
		);
		break;
	case 'Tabib':
		console.log(
			`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`
		);
		break;
	case 'Penyihir':
		console.log(
			`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
		);
		break;
	default:
		console.log(
			'tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada'
		);
}



//code disini gunakan console.log untuk outputnya

Kedua variable diisi = "Hallo Ksatria Zaky, kamu dapat menyerang dengan senjatamu!"

----------------------------
jika nama kosong = "Nama wajib di isi!"

rolenya kosong = "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

role Ksatria = `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`

role Tabib = `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`

role Penyihir = `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`

-----------------------------


```

## Soal 2

```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 'februari'; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

// Deklarasi Variable
let hari = 21;
bulan = 1;
tahun = 1945;

// Validasi Bulan

switch (bulan) {
	case 1:
		bulan = 'Januari';
		break;
	case 2:
		bulan = 'Februari';
		break;
	case 3:
		bulan = 'Maret';
		break;
	case 4:
		bulan = 'April';
		break;
	case 5:
		bulan = 'Mei';
		break;
	case 6:
		bulan = 'Juni';
		break;
	case 7:
		bulan = 'Juli';
		break;
	case 8:
		bulan = 'Agustus';
		break;
	case 9:
		bulan = 'September';
		break;
	case 10:
		bulan = 'Oktober';
		break;
	case 11:
		bulan = 'November';
		break;
	case 12:
		bulan = 'Desember';
		break;
	default:
		bulan = 'Bulan yang anda masukkan tidak ada';
		break;
}

// Output

console.log(`${hari} ${bulan} ${tahun}`);
// Output :
21 Januari 1945
```

---

video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor](https://youtu.be/-YlMePibR6Y)

_sisanya kalian googling aja ya ges yak_
