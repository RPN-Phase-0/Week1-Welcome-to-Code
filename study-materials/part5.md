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

Disini gue akan jelasin konsep dasar looping dan implementasi varasi dari beberapa looping.
---

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
video tentang looping by harkon
[Looping](https://youtu.be/6zB1lF3vkFE)
