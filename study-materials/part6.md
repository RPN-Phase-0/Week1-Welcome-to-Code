# Belajar Function | Part 6

pada part kali ini kita akan belajar apa itu function pada javascript ya

Fungsi di JavaScript itu seperti **kotak ajaib** yang bisa menerima input (*parameters*), mengolahnya, lalu *melemparkan* output (*return*)—atau enggak!

Fungsi bisa dibilang semacam block of code yang isinya proses tertentu, misal ada fungsi balikKata ya fungsi tersebut memproses untuk membalikan suatu kata

perlu di ingat, bahwa fungsi itu bisa mengembalikan nilai dan bisa tidak mengembalikan nilai (kalo kata penulis itu mengembalikan nilai = punya nilai)


## Function Deep-Dive: Parameters, Return, & Secret Superpowers! 

Disini gua akan menjelaskan sifat sifat fungsi dan super power nya.

### **1. Parameters: Bahan Mentah untuk Fungsi**  
Parameters adalah *variabel lokal* yang kita definisikan di dalam tanda kurung `()`. Mereka ibarat **bahan-bahan** untuk membuat jus apel 🍹:  

```js
function buatJus(apel, gula) {
    return `Jus ${apel} apel + ${gula} sendok gula 🍎!`;
}

console.log(buatJus(5, 2)); // Output: "Jus 5 apel + 2 sendok gula 🍎!"
```

**Catatan:**  
- Parameter bisa **berbagai tipe data** (number, string, array, bahkan fungsi lain!).  
- Jika argumen *kurang* atau *lebih*, JavaScript tidak error. Contoh:  
  ```js
  buatJus(3); // Parameter 'gula' jadi `undefined` → "Jus 3 apel + undefined sendok gula 🍎!"
  ```

---

### **2. Return: Fungsi yang "Menghasilkan" Nilai**  
Keyword `return` berfungsi untuk **mengembalikan nilai** dan *menghentikan eksekusi fungsi*. Kalau tidak ada `return`, fungsi akan mengembalikan `undefined`:  

```js
function cekApelSegar(jumlah) {
    if (jumlah > 0) {
        return true; // 🍎 Segar!
    }
    return false; // 🍏 Busuk...
}

console.log(cekApelSegar(5)); // true
```

**Contoh fungsi tanpa return (tapi tetap berguna):**  
```js
function logApel() {
    console.log("Apel sedang diproses... 🍎");
}

logApel(); // Output: "Apel sedang diproses... 🍎"
// Tapi nilai baliknya `undefined`!
```

---

### **3. Sifat Unik Fungsi Lainnya 🦄**  

#### **a. First-Class Citizens**  
Fungsi bisa diperlakukan seperti **variabel biasa**: disimpan di variabel, jadi parameter, atau bahkan jadi nilai return!  

```js
// Fungsi sebagai variabel
const potongApel = function(jumlah) {
    return jumlah * 4; // 1 apel dipotong jadi 4 🍴
};

// Fungsi sebagai parameter (higher-order function)
function prosesApel(apel, action) {
    return action(apel);
}

console.log(prosesApel(3, potongApel)); // 12
```

#### **b. Default Parameters**  
Kasih nilai default jika argumen tidak diberikan:  
```js
function buatPieApel(apel = 5) {
    return `Pie dengan ${apel} apel 🥧`;
}

console.log(buatPieApel()); // "Pie dengan 5 apel 🥧"
```

#### **c. Arrow Function (ES6)**  
Syntax lebih singkat untuk fungsi sederhana:  
```js
// Bentuk biasa
const hitungApel = function(n) { return n + 1; };

// Arrow function
const hitungApel = n => n + 1; 

console.log(hitungApel(2)); // 3
```

---

### **4. Scope: Aturan "Zona" Variabel**  
Variabel di dalam fungsi (*local scope*) tidak bisa diakses dari luar. Tapi variabel di *global scope* bisa diakses dari dalam fungsi:  

```js
let totalApel = 10; // Global scope

function kurangiApel() {
    let apelDikurangi = 2; // Local scope
    totalApel -= apelDikurangi;
    console.log(totalApel); // 8
}

console.log(apelDikurangi); // Error! Variabelnya cuma ada di dalam fungsi
```

---

### **🚀 Tips Penting!**  
- **Nama Fungsi & Parameter Harus Jelas!**  
  ```js
  // ❌ Buruk
  function x(a, b) { ... }
  
  // ✅ Baik
  function hitungTotalApel(jumlahAwal, tambahan) { ... }
  ```  
- **Gunakan `return` untuk fungsi yang perlu menghasilkan nilai** (e.g., perhitungan, validasi).  
- **Hindari *side effects*** (ubah data global) di fungsi sebisa mungkin, kecuali memang diperlukan.
- teliti dalam penentuan parameter mau tipe data apa aja
- jangan lupa kasih () buat jalanin fungsinya

Dengan memahami fungsi, kamu bisa menulis kode yang **modular**, **reusable**, dan **mudah di-debug**! 🎉

video untuk pemahaman fungsi, yang mungkin kalian butuh, apalagi di menit menit akhir itu ada contoh kompleksnya:
[Belajar Function by Harkon RPN](https://youtu.be/qaHT0psosU0)

Referensi: [Link](https://medium.com/@adhywiranata/bermain-scope-di-javascript-d954e07d05ae)
