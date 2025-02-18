# Belajar Looping | Part 5

***SELAMAT DATANG DI GERBANG KEPUTUSASAAN,***
***LOOPING ADALAH GERBANG TERSEBUT***

Belajar looping dalam JavaScript penting karena memungkinkan eksekusi blok kode berulang kali tanpa menulis kode yang sama secara manual. Looping digunakan untuk menghemat waktu, mengurangi kesalahan, dan menangani struktur data seperti array atau objek. Di JavaScript, terdapat beberapa jenis loop yang bisa dipilih berdasarkan kebutuhan.

Pemilihan jenis loop tergantung pada kasus penggunaan. For loop dan for...of cocok untuk array, while untuk kondisi dinamis, dan for...in untuk objek. Selalu pastikan kondisi loop dapat terpenuhi untuk menghindari infinite loop.

point yang harus dipahami adalah:
- Pelajari Indexing pada String dan Array
- Flow Looping
- Arah Looping
- Harus ada yang membuat looping berhenti (kecuali kebutuhan infinite loop khusus)
- Jauhi Infinite Loop kalau tidak perlu
- Permainan Kondisi pada looping
- Memahami Flow Nested Loop (KUNCI UTAMA)

looping biasanya sering bersama dengan tipe data array, angka, dan string.
yang paling populer sudah jelas combo **Looping + Array** 

lalu sering bertemu dengan yang namanya method **length** pada tipe data string dan array di javascript
dan disambung dengan indexing pada tipe data tersebut

kata kunci pada indexing adalah
> - index selalu berawal dari 0, ga mungkin yang lain
> - kalau mau menyentuh item/element/huruf paling kanan atau terakhir gunakan `length - 1` pada index

pengalaman menulis tentang memahami looping itu butuh waktu kisaran berminggu minggu, dipadukan dengan challenge/tantangan berupa quiz/soal pemrograman yang mengharuskan pelajar menggunakan looping untuk menjawab quiz/soal pemrograman tersebut.


## Introduction Looping

### **1. Konsep Dasar Looping**  
Looping adalah proses mengulang eksekusi blok kode selama kondisi tertentu terpenuhi. Bayangkan robot yang mengangkat kotak dari truk sampai tidak ada kotak tersisa. Setiap iterasi (perulangan) adalah "satu kali angkat kotak", dan kondisi berhenti adalah "truk kosong".

**Visualisasi:**  
```
[Start]  
  ↓  
[Kondisi?] → True → [Eksekusi Blok Kode] → [Update Variabel]  
  ↓ False  
[End]
```

---

### **2. For Loop**  
Digunakan saat jumlah iterasi diketahui. Prosesnya terstruktur:  
1. **Inisialisasi:** Menyiapkan variabel penghitung.  
2. **Kondisi:** Memeriksa apakah iterasi boleh lanjut.  
3. **Update:** Menambah/mengurangi nilai penghitung.

**Contoh Visual:**  
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}
```
**Alur Eksekusi:**  
```
i=0 → 0 < 3? ✅ → Log 0 → i++ (i=1)  
i=1 → 1 < 3? ✅ → Log 1 → i++ (i=2)  
i=2 → 2 < 3? ✅ → Log 2 → i++ (i=3)  
i=3 → 3 < 3? ❌ → STOP
```

---

### **3. While Loop**  
Loop berjalan selama kondisi `true`, tanpa jaminan iterasi minimal. Cocok untuk kasus dengan kondisi dinamis (misal: membaca data sampai "selesai").

**Visualisasi:**  
```
[Start]  
  ↓  
[Kondisi?] → True → [Eksekusi Kode]  
  ↓ False        ↖       |  
[End]               [Update Variabel]
```

**Contoh:**  
```javascript
let sandi = "";
while (sandi !== "1234") {
  sandi = prompt("Masukkan sandi:"); // Ulangi sampai sandi benar
}
```

---

### **4. Do...While Loop**  
Blok kode dijalankan **setidaknya sekali** sebelum kondisi diperiksa. Contoh: memastikan prompt muncul minimal 1x.

**Visualisasi:**  
```
[Start]  
  ↓  
[Eksekusi Kode] → [Update Variabel]  
  ↓  
[Kondisi?] → True → Ulangi  
  ↓ False  
[End]
```

**Contoh:**  
```javascript
let angka;
do {
  angka = prompt("Masukkan angka > 10:"); 
} while (angka <= 10);
```

---

### **5. For...Of Loop (Iterasi Nilai)**  
Mengiterasi nilai dari objek iterable (array, string, dll). Bayangkan conveyor belt yang mengantar item satu per satu.

**Contoh Visual:**  
```javascript
const buah = ["🍎", "🍌", "🍊"];
for (const b of buah) {
  console.log(b); // Output: 🍎, 🍌, 🍊
}
```
**Alur:**  
```
[🍎] → [🍌] → [🍊] → [Selesai]
```

---

### **6. For...In Loop (Iterasi Properti Objek)**  
Mengiterasi properti enumerable dari objek. Misal, membuka laci-laci dalam lemari dan melihat isinya.

**Contoh:**  
```javascript
const mobil = { merek: "Toyota", tahun: 2020 };
for (const key in mobil) {
  console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
}
```

---

### **7. Kontrol Loop: Break & Continue**  
- **`break`**: Menghentikan loop sepenuhnya (seperti tombol darurat).  
- **`continue`**: Melompati iterasi saat ini (seperti melewati langkah yang tidak perlu).

**Contoh Visual dengan `break`:**  
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Berhenti di iterasi ke-3
  console.log(i); // Output: 1, 2
}
```
**Alur:**  
```
1 → 2 → ⛔ (break saat i=3)
```

---

### **Visualisasi Infinite Loop**  
Loop tak berakhir terjadi jika kondisi selalu `true` tanpa update variabel. Contoh:  
```javascript
let i = 0;
while (i < 5) { // ❌ Lupa i++
  console.log(i);
}
```
**Visualisasi:**  
```
🌀 [0] → [0] → [0] → ... (terus menerus)
```

---

### **Kapan Menggunakan Setiap Loop?**  
| Tipe Loop       | Use Case                          |  
|-----------------|-----------------------------------|  
| `for`           | Iterasi terprediksi (array, angka)|  
| `while`         | Kondisi kompleks/tidak pasti      |  
| `do...while`    | Validasi input (min 1x eksekusi)  |  
| `for...of`      | Nilai array/string                |  
| `for...in`      | Properti objek                    |  

---

### **Tips Visualisasi**  
1. **Gunakan console.log**: Jalankan kode langkah-per-langkah di terminal, selalu pasang console.log untuk melihat perubahan pada variabel didalam loop.
2. **Gambar Flowchart**: Sketsa alur loop di kertas.  
3. **Analoginya**: Bayangkan loop seperti playlist musik yang diulang sampai lagu habis.  

Dengan memahami alur dan visualisasi, Kalian bisa menghindari kesalahan umum (seperti infinite loop) dan memilih jenis loop yang tepat!

---

### Latihan Soal Looping
Kita akan belajar cara implementasi konsep Looping di sebuah coding problems. Ini akan berguna untuk kalian melatih logic dan algoritma, karena looping ini senjata kalian untuk mengerjakan soal soal di RPN

SOAL : 
Buatlah perulangan 1-100 dengan pertambahan counter 1. Di dalam perulangan:  
- Jika angka **kelipatan 4**, tampilkan "FOUR"  
- Jika angka **kelipatan 7**, tampilkan "SEVEN"  
- Jika angka **kelipatan 4 dan 7**, tampilkan "FOURSEVEN"  
- Jika tidak memenuhi kondisi di atas, tampilkan angka itu sendiri  

**Contoh Output:**  
```
1  
2  
3  
FOUR  
5  
6  
SEVEN  
FOUR  
...  
28 (FOURSEVEN)  
```

---

**Solusi code:**
```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
    console.log("FOURSEVEN");
  } else if (i % 4 === 0) {
    console.log("FOUR");
  } else if (i % 7 === 0) {
    console.log("SEVEN");
  } else {
    console.log(i);
  }
}
```

**Penjelasan:**  
1. **Prioritas Kondisi**:  
   - Cek kelipatan 4 dan 7 terlebih dahulu karena ini kasus khusus yang harus diprioritaskan  
   - Jika dicek belakangan, angka 28 akan terdeteksi sebagai "FOUR" atau "SEVEN" saja  

2. **Modulo Operator**:  
   - `i % 4 === 0` untuk deteksi kelipatan 4  
   - `i % 7 === 0` untuk deteksi kelipatan 7  
   - `i % 28 === 0` untuk deteksi kelipatan 4 dan 7 (KPK 4 & 7 = 28)  

3. **Output Unik**:  
   - Angka 28 → "FOURSEVEN"  
   - Angka 8 → "FOUR"  
   - Angka 14 → "SEVEN"  
   - Angka 3 → 3  

**Cara Menjalankan:**  
1. Simpan kode dalam file `modulo-loop.js`  
2. Jalankan di terminal:  
```bash
node modulo-loop.js
```
---

## Nested Loop 💀
Nested loop adalah struktur perulangan di dalam tubuh perulangan lain. Setiap iterasi dari **loop luar** (outer loop) akan menjalankan **loop dalam** (inner loop) secara penuh.  

Visualisasi:
```
Loop Luar (i=0 → i<3)  
   │  
   ├── Iterasi i=0:  
   │     Loop Dalam (j=0 → j<2) → j=0, j=1  
   │  
   ├── Iterasi i=1:  
   │     Loop Dalam (j=0 → j<2) → j=0, j=1  
   │  
   └── Iterasi i=2:  
         Loop Dalam (j=0 → j<2) → j=0, j=1  
```

---

### *1. Contoh Sederhana**  
**Kode:**  
```javascript
for (let i = 0; i < 3; i++) {       // Outer loop
  console.log(`Outer: ${i}`);
  
  for (let j = 0; j < 2; j++) {    // Inner loop
    console.log(`  Inner: ${j}`);
  }
}
```

**Output:**  
```
Outer: 0  
  Inner: 0  
  Inner: 1  
Outer: 1  
  Inner: 0  
  Inner: 1  
Outer: 2  
  Inner: 0  
  Inner: 1  
```

**Penjelasan:**  
- Loop luar berjalan **3 kali** (i = 0, 1, 2).  
- Setiap iterasi loop luar, loop dalam berjalan **2 kali** (j = 0, 1).  
- Total iterasi = 3 (outer) × 2 (inner) = **6 iterasi**.

---

### **2. Use Case Nested Loop**  
#### **a. Matriks/Grid**  
Mengakses elemen array multidimensi (contoh: 3x3 matrix):  
```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < 3; row++) {         // Loop baris
  for (let col = 0; col < 3; col++) {       // Loop kolom
    console.log(matrix[row][col]); 
  }
}
```
**Output:**  
```
1, 2, 3, 4, 5, 6, 7, 8, 9  
```

#### **b. Pola Bintang**  
Membentuk pola segitiga:  
```javascript
let pattern = "";
for (let i = 1; i <= 5; i++) {           // Loop baris
  for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
```
**Output:**  
```
*  
**  
***  
****  
*****  
```

#### **c. Bubble Sort**  
Contoh algoritma pengurutan sederhana:  
```javascript
const arr = [5, 3, 8, 2];
for (let i = 0; i < arr.length; i++) {         // Loop utama
  for (let j = 0; j < arr.length - 1; j++) {   // Loop perbandingan
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Tukar nilai
    }
  }
}
console.log(arr); // Output: [2, 3, 5, 8]
```

---

### **3. Jenis-Jenis Nested Loop**  
- **For dalam For** (paling umum).  
- **While dalam For** (untuk kondisi dinamis di inner loop).  
- **Do-While dalam While** (jarang, tapi mungkin).  

**Contoh While dalam For:**  
```javascript
for (let i = 1; i <= 3; i++) {
  console.log(`Iterasi ke-${i}`);
  
  let j = 1;
  while (j <= 2) {
    console.log(`  Sub-iterasi ke-${j}`);
    j++;
  }
}
```

---

### **4. Visualisasi Kompleksitas**  
Nested loop memiliki **kompleksitas waktu O(n²)** jika kedua loop bergantung pada input yang sama.  
**Contoh:**  
```javascript
for (let i = 0; i < n; i++) {       // O(n)
  for (let j = 0; j < n; j++) {     // O(n)
    // Operasi O(1)
  }
}
// Total: O(n × n) = O(n²)
```

---

### **5. Tips & Best Practice**  
1. **Hindari Nested Loop Dalam** (>2 level) untuk mencegah kompleksitas tinggi.  
2. **Gunakan Fungsi Terpisah** untuk inner loop jika logika terlalu rumit.  
3. **Break/Continue** bisa digunakan untuk mengontrol aliran, tetapi hati-hati dengan scope.  
4. **Optimasi dengan Cache** nilai yang sering diakses (misal: `array.length`).  

---

### **6. Common Mistakes**  
- **Variable Shadowing**:  
  ```javascript
  for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) { // ❌ Variabel i ter-shadow
      console.log(i);
    }
  }
  ```

- **Infinite Loop**:  
  ```javascript
  for (let i = 0; i < 5; i++) {
    while (true) { // ❌ Tidak ada kondisi berhenti
      console.log(i);
    }
  }
  ```

---

## Latihan Soal Nested Loop
Disini kita akan belajar menggunakan nested loop dalam coding problems, mungkin keliatan susah banget untuk mempelajarinya. 

Tapi, kalau kalian fokus ikutin step by step dan mencobanya langsung di terminal kalian, Nested Loop ini tidak terlalu rumit.

Kuncinnya adalah latihan menggunakan indexing dan fokus pada perubahan variable dari inner loop sama outer loop.

SOAL :  
Buat program untuk menampilkan semua bilangan prima dari 1 hingga 100.  
**Bilangan prima** adalah bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11, dst.).

---

### **Solusi dengan Nested Loop:**  
```javascript
for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
  let isPrime = true;                  // Flag untuk menKaliani bilangan prima

  for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
    if (i % j === 0) {                 // Jika i habis dibagi j
      isPrime = false;                 // Bukan bilangan prima
      break;                           // Keluar dari loop dalam
    }
  }

  if (isPrime) {                       // Jika isPrime tetap true
    console.log(i);                    // Tampilkan bilangan prima
  }
}
```

---

### **Penjelasan Detail:**

1. **Loop Utama (`i`):**  
   - Loop ini mengiterasi angka dari 2 hingga 100 (`i = 2 → i <= 100`).  
   - Angka 1 **bukan** bilangan prima, jadi kita mulai dari 2.  

2. **Flag `isPrime`:**  
   - Variabel ini digunakan untuk menKaliani apakah angka `i` adalah bilangan prima.  
   - Awalnya di-set `true` (asumsi `i` adalah prima).  

3. **Loop Dalam (`j`):**  
   - Loop ini mengiterasi pembagi dari 2 hingga `i-1` (`j = 2 → j < i`).  
   - Jika `i` habis dibagi `j` (`i % j === 0`), maka `i` **bukan** bilangan prima.  
   - Set `isPrime = false` dan hentikan loop dalam dengan `break`.  

4. **Cek `isPrime`:**  
   - Jika `isPrime` tetap `true` setelah loop dalam selesai, berarti `i` adalah bilangan prima.  
   - Tampilkan `i` menggunakan `console.log`.

---

### **Visualisasi Proses:**

#### **Contoh: Mengecek Apakah 5 adalah Bilangan Prima**
```
Loop Utama (i = 5):  
   │  
   ├── Loop Dalam (j = 2):  
   │     5 % 2 = 1 → Tidak habis dibagi  
   │  
   ├── Loop Dalam (j = 3):  
   │     5 % 3 = 2 → Tidak habis dibagi  
   │  
   └── Loop Dalam (j = 4):  
         5 % 4 = 1 → Tidak habis dibagi  

   Setelah loop dalam selesai:  
   isPrime = true → 5 adalah bilangan prima  
```

#### **Contoh: Mengecek Apakah 6 adalah Bilangan Prima**
```
Loop Utama (i = 6):  
   │  
   ├── Loop Dalam (j = 2):  
   │     6 % 2 = 0 → Habis dibagi  
   │     isPrime = false  
   │     break (hentikan loop dalam)  

   Setelah loop dalam selesai:  
   isPrime = false → 6 bukan bilangan prima  
```

---

### **Output Program:**
```
2  
3  
5  
7  
11  
13  
17  
19  
23  
29  
31  
37  
41  
43  
47  
53  
59  
61  
67  
71  
73  
79  
83  
89  
97  
```

---

### **Optimasi:**
Untuk meningkatkan efisiensi, kita bisa membatasi loop dalam hingga `√i` (akar kuadrat dari `i`), karena jika `i` tidak habis dibagi oleh bilangan hingga `√i`, maka `i` pasti bilangan prima.  

**Kode Optimasi:**  
```javascript
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) { // Hanya cek hingga √i
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
```

### **Latihan Tambahan (Optional):**
1. Modifikasi program untuk menampilkan **bukan bilangan prima** dari 1 hingga 100.  
2. Hitung **jumlah bilangan prima** dari 1 hingga 100.  
3. Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.  

Dengan memahami loop dan nested loop, Kalian bisa menangani kasus kompleks seperti pengolahan data multidimensi, algoritma sorting, dan generasi pola. Latih kemampuan dengan mencoba variasi pola dan algoritma!

video tentang looping by harkon
[Looping](https://youtu.be/6zB1lF3vkFE)
