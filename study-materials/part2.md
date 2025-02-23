# Belajar Algoritma | Part 2
![image](https://github.com/user-attachments/assets/ebf3ef00-59da-4667-9ebe-93ec955e6154)

Tujuan menjadi programmer adalah memecahkan masalah. Role ini sebenarnya tidak menulis kode saja, tapi memecahkan suatu masalah dunia menggunakan solusi IT.
code hanyalah tools untuk programmer berbicara dengan komputer, otak sebenarnya untuk masalah tersebut ada di programmer itu sendiri. problem" ini perlu di breakdown oleh programmer dan dicari flow/rencana untuk kita solve, dan cara solving problemnya adalah dengan menggunakan algoritma.

Programmer akan berfikir keras untuk membuat algoritma agar bisa menyelesaikan masalah yang mereka temukan. Algoritma ada banyak macamnya, setiap masalah" IT bisa disolve dengan berbagai kombinasi algoritma. 

Banyak sekali orang menyepelekan materi algoritma ini, terhilat seperti remeh dengan flowchart" ga jelas atau algoritma deskriptif yang menyusahkan kita. Tapi sebenarnya, justru algoritma kunci utama dalam otak programmer.

Kalian bisa saja ngoding tanpa algoritma, dengan menghafal syntax yang ada. Kalian bisa saja membuat website tanpa tahu apa itu algoritma. Dengan html , css , javascript kalian bisa design website semau kalian.

Tapi, ketika kalian menemukan real case problem di dunia nyata dan perlu di solve dengan IT , otak kalian pasti tidak akan bisa mencernanya. 

### **KENAPA ?**

coba saja pecahkan masalah shortest path ini , mencari jarak terdekat secara otomatis menggunakan kepala kalian sendiri.

<img src="https://github.com/user-attachments/assets/ac36286f-1df4-4093-9ad4-400a5d3788b1" width="650">


YA KALIAN TIDAK AKAN BISA MELAKUKANNYA JIKA TIDAK TAHU ALGORITMA !

bahkan tanpa ngoding pun dan hanya memecahkan masalahnya saja di pikiran kita, manusia akan susah sekali memecahkan masalah ini jika tidak tahu algoritmanya.

RPN ini menjunjung tinggi foundation dan logic. Cara berfikir kalian akan sangat diasah disini dan algoritma adalah segalanya bagi kita.

## Apa itu algoritma ? 

Algoritma adalah urutan langkah-langkah yang sistematis dan terdefinisi dengan jelas untuk menyelesaikan suatu tugas atau masalah. Algoritma sangat penting dalam dunia ilmu komputer dan matematika, serta menjadi dasar dari teknologi modern.

Konsep algoritma sebenarnya sudah ada sejak zaman prasejarah. Misalnya, matematikawan Babilonia kuno menggunakan algoritma aritmatika, seperti algoritma divisi, sekitar tahun 2500 SM.

Algoritma pertama kali ditemukan oleh Muhammad ibn Musa al-Khawarizmi, seorang ilmuwan Muslim yang ahli dalam bidang matematika, astronomi, astrologi, dan geografi.
Al-Khawarizmi lahir di Khwarezmia (sekarang Uzbekistan) sekitar tahun 780. Ia menulis buku tentang bilangan Hindu-Arab dalam bahasa Arab yang kemudian diterjemahkan ke dalam bahasa Latin dengan judul “Algoritmi de numero Indorum”. Kata Latin "algoritmi" inilah yang diterjemahkan ke dalam bahasa Inggris sebagai "algorithm".

Respect to Muhammad ibn Musa al-Khawarizmi :) , dia yang membuat semua teknologi maju seperti saat ini.

Oke disini kalian pertama" akan belajar namanya algoritma secara deskriptif

penulisan algoritma bertujuan untuk kamu yang pemula bisa menyalurkan beban otak kamu ke dalam note algoritma, yang mana itu akan membantu kamu dalam visualisasi suatu proses logika pemrograman

contoh algoritma secara deskriptif

```
cara memasukan baju ke mesin cuci
misal mesin cuci hanya muat 3 baju saja
lalu kita butuh mencuci 4 baju

langkah awal
kita masukan 3 baju sekaligus ke mesin cuci tersebut
kalau kita memasukan 4 baju sekaligus maka akan ada peringatan dari mesin cucinya

lalu kalau sudah memasukan 3 baju atau kurang dari itu
baju yang kotor dikurangi baju yang masuk ke mesin cuci tersebut

lalu lakukan hal tersebut sampai baju kotornya habis
```

contoh visual algoritma diatas :

<img src="https://github.com/user-attachments/assets/ceffb79a-7763-4353-8a18-a2cdb35c0a12" width="900">


Ya seperti halnya kalian melakukan pencucian baju setiap hari, sebenarnya algoritma banyak terjadi dibagian" hidup kita. Dan secara ga sadar kalian selalu membuat algoritma dalam pemakaian waktu sehari hari. Misal,

algoritma daily activity :

- Bangun pagi jam 6
- Mandi, bersih"
- jam 8am - 9am gym
- jam 10am baca buku
- jam 11am - 5pm working hour

pada dasarnya algoritma bisa digambarkan 1 set instruksi yang kalian lakukan untuk menyelesaikan masalah.

Dan setiap algoritma kalian bisa custom sesuai dengan permasalahan kalian , misalnya jam 10 kalian mempunya 2 kondisi.

jika gym nya terlalu kecapean maka jadwal jam 10 baca buku akan diskip untuk break.

algoritma bisa menjadi bercabang dan melakukan 2 kondisi :

algoritma daily activity

- Bangun pagi jam 6
- Mandi, bersih"
- jam 8am - 9am gym

Jika gym terlalu kecapean -> break

Jika gym tidak terlalu cape -> jam 10am baca buku

- jam 11am - 5pm working hour

Kombinasi berfikir instruksi inilah senjata kalian untuk memecahkan suatu masalah real world nantinya dengan skillset coding.

## Algoritma dasar dalam pemrograman

Sekarang gua akan jelasin contoh implementasi algoritma dalam pemrograman.

Misalnya, kita ingin membuat code program untuk mengecek apakah sebuah angka adalah genap atau ganjil.

Ya, secara rumus matematikan kalian pasti berfikir seperti ini :

- Menggunakan operator modulo (%) untuk mengecek sisa bagi
- Jika sisa bagi dengan 2 adalah 0, maka angka tersebut genap

2 step inilah sebenarnya sudah menjadi pondasi algoritma dan cara berifkir kita untuk menyelesaikan masalah pengecekan angka genap dan ganjil.

Sekarang kita terapkan dalam bentuk flowchart agar terlihat lebih jelas visualisasi algoritma untuk mengecek angka genap dan ganjil.

Nah flowchart itu apa sih ? 

Flowchart atau diagram alir adalah representasi visual dari sebuah proses atau algoritma yang menggunakan simbol-simbol yang saling terhubung dengan panah untuk menunjukkan langkah-langkah dan alur prosesnya.

Komponen utama dalam flowchart:

Simbol Dasar:

- Oval/Terminal (⭕) - Menandakan awal atau akhir proses
- Persegi Panjang (▭) - Menunjukkan proses atau aksi
- Diamond (◇) - Mewakili keputusan/kondisi (Ya/Tidak)
- Parallelogram (⏢) - Menandakan input/output
- Panah (→) - Menunjukkan arah aliran proses


Kegunaan Flowchart:

- Memvisualisasikan logika program
- Memudahkan pemahaman proses
- Membantu menemukan kesalahan dalam proses
- Dokumentasi sistem atau program
- Alat komunikasi antara programmer dan user

ini adalah contoh visual flowchart dari algoritma pengecekan angka ganjil dan genap

<img src="https://github.com/user-attachments/assets/8b53bf7e-b06f-4119-be5c-fac6935ad8e5" width="800">

## Implementasi code

Sekarang kita sudah punya algoritma atau instruksi untuk mengecek angka ganjil dan genap. Saatnya kita pakai algoritma ini dalam code kita.

```js
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Contoh penggunaan:
console.log(cekGenapGanjil(4));  // Output: "Genap"
console.log(cekGenapGanjil(7));  // Output: "Ganjil"
```

Disini kita mendefinikan fungsi cekGenapGanjil, setelah itu kita buat conditional statements untuk mengecek params (angka) , apakah angka ini Genap atau Ganjil dengan rumus algoritma yang sudah kita buat tadi.

Mungkin bagi kalian yang baru belajar ngoding masih bingung melihat syntax code javscript ini. 

Tapi nanti seiring kalian mengikuti pembelajaran ini akan mudah memahaminya. 

kombinasi ALGORITMA X SYNTAX JS = Power Scale Logic 

Logic inilah yang membuat cara berifikir kalian lebih dalam dan menyatu dengan flow code pemrograman.

Kalau kalian jalankan code ini maka hasil dari terminal adalah :

![image](https://github.com/user-attachments/assets/ade6631f-b23e-4666-91f2-503be8bdb41d)

output akan seperti ini karena 

cekGenapGanjil(4) -> parameter angka 4 adalah Genap
cekGenapGanjil(7) -> parameter angka 7 adalah Ganjil


## Next Level (Code Algorithm)

Pasti kalian pernah sesekali mendengar ada Algoritma-algoritma seperti Dijkstra, Sorting, Searching dan lainnya.
Nah algoritma ini adalah implementasi spesifik dari konsep algoritma yang sudah kalian pelajari, tapi dirancang untuk menyelesaikan masalah-masalah khusus dalam pemrograman.

Algoritma ganjil genap tadi sebenarnya itu konsep dasar dan instruksi dasar untuk masalah ganjil genap saja dan itu sudah ada rumus pasti.

Sedangkan, adabeberapa set algoritma yang bisa kita pakai berulang kali dan kita bisa custom sendiri penggunaanya sesuai masalah pemrograman yang mau kita solve. 

Mari gua jelasin: 

### 1.Dijkstra Algorithm
Ini adalah algoritma untuk mencari jalur terpendek dalam sebuah graph

Contoh penggunaan nyata:
- Google Maps mencari rute tercepat
- Jaringan internet mencari jalur tercepat untuk mengirim data
- Game mencari jalan terpendek untuk karakter bergerak


### 2.Sorting Algorithms (Algoritma Pengurutan)
Bubble Sort, Quick Sort, Merge Sort, dll . Digunakan untuk mengurutkan data

Contoh penggunaan:
- Mengurutkan daftar nama
- Mengurutkan harga dari terendah ke tertinggi
- Mengurutkan nilai siswa

### 3.Searching Algorithms (Algoritma Pencarian)
Linear Search, Binary Search. Digunakan untuk mencari data

Contoh:
- Mencari kontak di HP
- Mencari produk di e-commerce
- Mencari file di komputer

Kenapa Penting?

`Efisiensi`: Setiap algoritma punya kelebihan dalam situasi tertentu

- Quick Sort lebih cepat untuk data besar
- Bubble Sort lebih mudah diimplementasi untuk data kecil

`Optimasi`: Memilih algoritma yang tepat bisa:

- Menghemat waktu proses
- Menghemat penggunaan memori
- Meningkatkan performa aplikasi

`Problem Solving`: Algoritma-algoritma ini adalah solusi teruji untuk masalah umum

- Tidak perlu "menemukan roda kembali"
- Sudah dioptimasi oleh para ahli
- Menjadi dasar untuk pengembangan solusi yang lebih kompleks

Dengan memahami algoritma dasar, Kalian akan lebih mudah memahami dan mengimplementasikan algoritma-algoritma yang lebih kompleks ini sesuai kebutuhan dalam pengembangan aplikasi Kalian.

Algoritma kompleks ini akan kalian pelajari di phase 1 nanti !. 

-------------------------------------------------------
## Other Source

[Apa itu algoritma pemrograman by WPU](https://youtu.be/uqVJc9lLknA?si=-_BqdNZQS5xcCQrd)

[Computer Science Basics: Algorithms by LearnFree](https://www.youtube.com/watch?v=kM9ASKAni_s&t=37s)

[Algorithms by geeksforgeeks](https://www.geeksforgeeks.org/fundamentals-of-algorithms/)
