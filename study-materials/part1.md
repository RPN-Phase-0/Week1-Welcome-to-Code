# Hello World | Apa Saja yang Harus Disiapkan? | Part 1

Hi para siswa nolep, disini pembelajaran menggunakan javascript sebagai tools belajar fundamental pemrograman awal kalian

***INGAT INI BUKAN BELAJAR BIKIN WEB NAMUN BELAJAR NGODING***

***Jadi siap siap untuk merasakan mual, burnout dan sering garuk kepala sampai rambut rontok***

terkait apa saja yang harus disiapkan adalah:

- [Download Git](https://git-scm.com/downloads)
- [Bikin akun Github](https://github.com/)
- [Download VSCode](https://code.visualstudio.com/download)
- [Download NodeJS](https://nodejs.org/en)

# Apa itu Git ? 

Mungkin pertama" kalian akan bingung apa itu git dan kenapa pemula langsung belajar git ? 

apasih fungsi git ini sebenarnya ? 

Trus kenapa materi dan resource belajar ini ada di git ? (seperti yang kalian baca readme.md skrg)

Oke jadi disini kita akan mulai step awal untuk belajar instagramnya para developer yaitu Git (version control) dan Github tools yang kita pakai.

Git itu adalah sistem kontrol versi (version control system) yang sangat populer digunakan oleh para programmer untuk mengelola dan melacak perubahan pada kode program mereka. Bayangin Git seperti "mesin waktu" untuk kode kalian, yang memungkinkan kalian untuk:

![image](https://github.com/user-attachments/assets/0a94508d-0368-4ee7-9de4-c29762ff85f1)


### Menyimpan riwayat perubahan kode
Seperti halnya Google Docs yang menyimpan riwayat editan dokumen, Git menyimpan setiap perubahan yang kalian buat pada kode. Ini memungkinkan kalian untuk kembali ke versi     sebelumnya jika ada kesalahan.

### Berkolaborasi dengan tim
Git memungkinkan beberapa programmer bekerja pada proyek yang sama tanpa mengganggu pekerjaan satu sama lain. Setiap orang bisa membuat "cabang" (branch) sendiri untuk         mengerjakan fitur baru.

### Mencadangkan kode
Kode kalian akan aman tersimpan di repositori Git (biasanya di platform seperti GitHub atau GitLab), sehingga tidak akan hilang meski komputer Kalian rusak.

----------------------------------------------------
Nah ada banyak tools platform git sebenarnya, tapi disini gua akan jelasin cuman dari 2 ini aja. karena 2 ini yang sangat populer :
### GitHub (yang kita pakai)
- Platform Git paling populer yang dimiliki oleh Microsoft
- Menawarkan banyak fitur gratis dan kolaborasi
- Sangat cocok untuk proyek open source
- Memiliki fitur tambahan seperti GitHub Actions untuk otomatisasi
- Interface yang ramah pengguna dan dokumentasi lengkap


### GitLab
- Menawarkan solusi self-hosted (bisa diinstal di server sendiri)
- Memiliki fitur CI/CD (Continuous Integration/Continuous Deployment) bawaan
- Cocok untuk perusahaan yang membutuhkan kontrol penuh
- Tersedia versi gratis dan berbayar


## Git Cheatsheet
Inilah contoh list command yang akan dipakai untuk mengelola git kalian.

![image](https://github.com/user-attachments/assets/a7c923a2-2d6b-41ef-aed1-7d9af1271d23)

## Instalasi Git 
Untuk windows, kalian bisa langsung download installer nya di link : https://git-scm.com/downloads/win

![image](https://github.com/user-attachments/assets/2ebdbad9-db87-48e0-a9a3-bc1f7577f66a)

Ikutin aja step" install nya dari installer , setelah install kalian bisa cek apakah git sudah terinstall dengan command:
`git --version`

jangan lupa restart cmd nya dulu baru pake command diatas

kalau sudah, bisa lanjut ke tahap selanjutnya untuk Buat akun github👨🏻‍🌾

----------------------------------------------------

## Buat akun github

Untuk buat akun github kalian bisa ke website githubnya dan langsung klik sign up untuk sampe tampilan seperti ini :

![image](https://github.com/user-attachments/assets/393c1267-9316-4948-a4ae-c4462afbf170)

Setelah itu ikutin instruksi untuk buat akunnya sampai selesai.

Jika sudah selesai, kalian akan langsung redirect ke dashboard github akun kalian seperti ini :

![image](https://github.com/user-attachments/assets/082daac9-9ecf-4ab5-936d-7b3e689bb0ea)

untuk sekarang step github sampai buat akun saja, nanti kita lanjut di part 4 untuk buat repo pertama kalian dan commit pertama di git.

# Daftar RPN (Fork Repo Pertama)

Sekarang kalian perlu melakukan Fork pada repo week1 phase 0 dan melakukan pull request untuk monitoring progress tugas kalian di komunitas RPN.

Fork repository di GitHub adalah proses membuat salinan independen dari repository milik orang lain ke akun GitHub kita sendiri. Ini merupakan fitur penting dalam pengembangan software kolaboratif. Mari saya jelaskan lebih detail:

Konsep Dasar Fork:
1. Fork menciptakan salinan lengkap repository asli, termasuk semua file, commit history, dan branches
2. Repository hasil fork akan muncul di akun GitHub Kalian dengan referensi ke repository asli
3. Kalian memiliki kontrol penuh atas repository hasil fork dan dapat melakukan perubahan tanpa mempengaruhi repository asli

Kegunaan Fork:
1. Berkontribusi ke proyek open source - Fork memungkinkan Kalian mengusulkan perubahan melalui Pull Request
2. Menggunakan proyek yang ada sebagai starting point untuk proyek baru Kalian
3. Bereksperimen dengan kode tanpa mempengaruhi proyek asli
4. Menyimpan snapshot dari proyek yang mungkin berubah di masa depan

## Step by step Fork Repository Phase0 week1 

Pertama kalian pergi ke repo : https://github.com/RPN-Phase-0/Week1-Welcome-to-Code

dan dipojok kanan atas ada button "fork", klik button forknya

<img width="1728" alt="Screenshot 2025-02-20 at 21 11 07" src="https://github.com/user-attachments/assets/99d14b8b-48f3-47fc-a59b-c9b245c18ed4" />

setelah itu kalian akan masuk kedalam section pembuatan fork untuk repo week1 welcome to code.

langsung saja kalian bisa klik button hijau dibawah "Create Fork".

![image](https://github.com/user-attachments/assets/085aa132-49c5-4812-b9bc-f1dcd1d42984)

Setelah kalian klik create fork, github akan melakukan progress fork repository rpn ke akun github kalian.

Hasilnya, kalian akan punya bentuk repo Week1-Welcome-to-Code didalam akun kalian sendiri

![image](https://github.com/user-attachments/assets/d9a9bc58-84cb-42dd-8f46-869c48150bcc)

Setelah melakukan fork, Kalian bisa:
1. Clone repository hasil fork ke komputer lokal
2. Membuat perubahan dan melakukan commit
3. Push perubahan ke repository fork Kalian
4. Membuat Pull Request ke repository (Submit tugas)

Copy link hasil fork repo kalian 

![image](https://github.com/user-attachments/assets/c826bdf0-8e16-45c8-b93e-078249b5704a)

setelah itu paste link fork repo kalian ke dalam channel discord rpn di #daftar-sini

![image](https://github.com/user-attachments/assets/8b0a73ae-4f6f-4cdb-8f26-09a602943ba4)

Next stepnya kita akan set up Programming Editor menggunakan VSCode
# VSCode  
![image](https://github.com/user-attachments/assets/0f51172b-e366-409c-9ddd-5f9380f74974)

Programming editor adalah software khusus yang dirancang untuk menulis dan mengedit kode program. Kalau kalian sering liat programmer" lagi kerja dan tampilan dilaptopnya ada gambar diatas itu adalah tampilan dari salah satu programming editor yaitu VSCode.

Editor ini memiliki fitur-fitur yang membantu programmer seperti:
- Syntax highlighting (pewarnaan kode)
- Auto-completion (saran kode otomatis)
- Error detection (pendeteksi kesalahan)
- Code formatting (penataan kode)
- File management (manajemen file)

Ada berbagai macam programming editor yang umum dipakai orang, contohnya Vscdoe, IntelliJ, VIM dan old editor yang sering kalian temuin diperkuliahan notepad++.

Nah disini kita pakai Vscode, VSCode salah satu programming editor yang sangat populer yang dibuat Microsoft. Beberapa keunggulan VSCode:

- Gratis dan open source
- Ringan tapi powerful
- Mendukung banyak bahasa pemrograman
- Memiliki marketplace dengan ribuan extension/plugin
- Fitur debugging yang bagus
- Terintegrasi dengan Git
- Terminal terintegrasi
- Tampilan yang bisa dikustomisasi
- Dukungan IntelliSense untuk suggestion code
- Update rutin dengan fitur-fitur baru

VSCode sangat direkomendasikan untuk pemula karena mudah digunakan namun tetap memiliki fitur lengkap untuk pengembangan profesional.

Kalian bisa langsung ke website vscodenya dan download installer VSCode di laptop kalian

https://code.visualstudio.com/download

![image](https://github.com/user-attachments/assets/8cd227be-e952-48e2-8313-9123010a5e03)

Setelah kalian install VSCode, Kalian bisa buat folder belajar pertama kalian di folder atau dokumen kalian (bebas direktorinya dimana saja).

Disini contoh gue buat new Folder didalam direktori "programming" 

![image](https://github.com/user-attachments/assets/5a4f0d16-c21d-479b-8a0b-69ae92f024ba)


trus isi nama folder belajar pertama kalian

![image](https://github.com/user-attachments/assets/d14dfb2e-7808-4b38-9413-fd8e960d0320)

Setelah selesai buat folder (pastikan direktorinya yang kalian tau), kalian bisa buka foldernya di Aplikasi VSCode

Buka Open Folder di VSCode

![image](https://github.com/user-attachments/assets/cdbf2ac0-7df5-44bf-b05e-0b5e71f08884)


Arahkan ke folder yang sudah kalian buat

![image](https://github.com/user-attachments/assets/3c61c199-f123-4f54-b481-9842e5c9ee11)

Nah sekarang kalian sudah di direktori belajar-pertama, environtment ini bakal jadi folder untuk membuat file" ngoding kalian.

![image](https://github.com/user-attachments/assets/1c732bad-5f60-4885-8965-cae4c814282d)

Sekarang kita bisa lihat integrated terminal VSCode sudah mengarah ke direktori belajar-pertama, kita tinggal install bahasa pemrograman nodejs untuk running code pertama kalian di VSCode ini.

Kalian bisa test dengan `CTRL + ~` , dan tampilan terminal sudah mengarah ke direktori belajar-pertama

![image](https://github.com/user-attachments/assets/d0667d21-96cc-4323-82e7-ea3c9d123ee7)


Set Up VSCode selesai, terakhir kalian bisa langsung lanjut ke step instalasi nodejs dan buat Hello World pertama

# Node JS
Disini kalian sebenarnya akan belajar syntax javascript, tapi akan lebih baik kalau gua jelasin dulu apa perbedaanya javascript dengan node js.

JavaScript adalah bahasa pemrograman yang awalnya diciptakan untuk membuat website menjadi interaktif dan berjalan di browser. JavaScript memungkinkan developer untuk membuat fitur-fitur seperti validasi form, animasi, update konten dinamis, dan interaksi pengguna di halaman web. Bahasa ini menjadi sangat populer karena kemudahannya untuk dipelajari dan kemampuannya dalam memanipulasi HTML dan CSS.

Node.js adalah runtime environment yang memungkinkan JavaScript untuk berjalan di server (di luar browser). Dengan Node.js, JavaScript yang awalnya hanya bisa digunakan untuk frontend (sisi client) kini bisa digunakan juga untuk backend (sisi server), memungkinkan pengembangan aplikasi web full-stack dengan satu bahasa pemrograman. Node.js sangat efisien dalam menangani banyak koneksi secara bersamaan dan cocok untuk membuat aplikasi real-time seperti chat, streaming, atau API.

![image](https://github.com/user-attachments/assets/55b0ef93-0036-49d6-89af-95a7b9f976a0)

Jadi NodeJS ini salah satu tools runtime javascript , agar kita bisa running code javascript ini di sisi server. Karena pengenalan Syntax JS di RPN ini metodenya menggunakan scripting test dari terminal, kalian bakal sering running code" javascript langsung di integrated terminal VSCode menggunakan node js.

## Instalasi Node JS
Untuk Instalasi Nodejs, kalian bisa langsung ke website nya node js dan download installernya seperti biasa.

Ada banyak cara untuk instalasi node js, bisa dari package manager seperti brew, fnm, docker atau prebuilt installernya dri node js.

Kita pilih prebuilt installernya node js, karena ini yang paling mudah untuk para pemula

![image](https://github.com/user-attachments/assets/580e652b-e976-47f8-a9d1-72ebe5826b64)

Kalian ikutin instruksi installernya seperti biasa sampai selesai.

Setelah sudah selesai, kita bisa langsung cek apakah nodejs sudah terinstall bisa dengan command berikut
`node -v`

nah jalanin command ini dimana ? yes, jalanin nya di integrated terminal VSCode yang kita buka tadi sebelumnya.

Tapi di restart dlu VSCodenya (Close dan buka ulang direktori belajar-pertama) dan buka integrated terminal.

Karena nodejs baru terinstall kita harus restart VSCode terlebih dahulu.

Setelah dibuka terminalnya, bisa langsung ketik node -v untuk memastikan nodejs sudah terinstall di PC kalian.

![image](https://github.com/user-attachments/assets/bcd90472-d6fb-4487-8f45-d0a7d9c5d05a)

Instalasi NodeJS selelesai. Next, saatnya buat Hello World Pertama kalian


# Hello World Pertama
Saat nya buat script JS pertama kalian di Environtment yang sudah kita set up dari course pertama ini.

Klik kanan dibagian area left bar VSCode dan buat file "helloworld.js"

![image](https://github.com/user-attachments/assets/e9aa2f74-5e03-41da-b39a-522e3d49c8d2)

buat file helloworld.js 

.js ini extension dari javascript, otomatis VSCode bakal membaca file itu sebagai file javascript

![image](https://github.com/user-attachments/assets/c7b49a85-8429-4c73-b340-22a61a39ddb3)


Tulis code `console.log("Hello World!")` di line pertama kalian 

dan jangan lupa save editor setelah kalian ketik line nya (ctrl + save)

![image](https://github.com/user-attachments/assets/278735f3-2b92-46e7-9fab-19ab20d92b0a)

Jalankan Hello World petama kalian dengan running code js di integrated terminal

dengan cara -> node (namafile)

jadi tulis -> node helloworld.js

setelah itu enter

![image](https://github.com/user-attachments/assets/e7e65cda-38d9-468b-8a1c-29cc174addaa)

Congrats!!! ini adalah experience ngoding pertama kalian. Hello World ini sangat krusial bagi para pemula, disinilah gerbang start kalian untuk belajar menjadi Software Engineer.

# Submit Tugas RPN (PR Pertama)

Pull Request (PR) adalah fitur di GitHub yang memungkinkan Kalian mengusulkan perubahan kode dari repository fork atau branch Kalian ke repository utama. Ini adalah cara utama untuk berkolaborasi dalam pengembangan software. Mari saya jelaskan secara detail:

Konsep Dasar Pull Request:
1. PR memungkinkan Kalian menunjukkan perubahan yang telah Kalian buat dan meminta maintainer repository untuk mereview dan mengintegrasikan perubahan tersebut
2. PR bisa berisi penambahan fitur, perbaikan bug, atau peningkatan dokumentasi
3. PR memfasilitasi diskusi dan review kode sebelum perubahan digabungkan ke repository utama

Langkah membuat Pull Request:
1. Buat branch baru atau fork repository
2. Lakukan perubahan dan commit ke branch/fork Kalian
3. Push perubahan ke GitHub
4. Kunjungi repository asli di GitHub
5. Klik "New Pull Request"
6. Pilih branch sumber (branch Kalian) dan branch tujuan
7. Isi judul dan deskripsi PR dengan jelas
8. Submit Pull Request

Best Practice Pull Request:
1. Buat judul yang deskriptif dan jelas
2. Berikan deskripsi yang menjelaskan:
   - Apa yang diubah
   - Mengapa perubahan diperlukan
   - Bagaimana cara menguji perubahan
3. Tambahkan screenshot jika ada perubahan visual
4. Pastikan kode sudah ditest dengan baik
5. Respond terhadap review dan feedback dengan sopan

Proses Review Pull Request:
1. Maintainer akan mereview perubahan kode
2. Mereka bisa memberikan komentar atau meminta perubahan
3. Kalian bisa melakukan update berdasarkan feedback
4. Setelah disetujui, PR akan di-merge ke repository utama (Case di RPN PR kalian tidak perlu di merge)

Status Pull Request:
- Open: PR masih dalam proses review
- Closed: PR ditolak atau tidak dilanjutkan
- Merged: PR diterima dan digabungkan ke repository utama


## Clone Tugas Pertama 

Bagi yang belum cloning repository nya di local, kalian wajib melakukan clone repo terlebih dahulu. Agar kalian bisa mengerjakan tugas tugas RPN di laptop kalian sendiri.

pergi ke repo fork kalian (hasil fork diatas) : https://github.com/zexoverz/Week1-Welcome-to-Code (contoh)

Setelah itu klik bagian button hijau (code), nanti kalian bisa copy command cloning repository fork week1.


<img width="1728" alt="Screenshot 2025-02-20 at 21 29 46" src="https://github.com/user-attachments/assets/99a80190-4991-449e-8ece-a7c4f511db1e" />

Setelah kalian copy, kalian balik lagi ke vscode . Buka terminal vs code dan tulis command git clone [paste]

contohnya seperti ini :

`git clone https://github.com/zexoverz/Week1-Welcome-to-Code.git`

Disini gua masih didalam folder belajar-pertama, jadi kita akan memasukan cloningan repo week1 kedalam belajar-pertama.

Kalian bebas mau cloning di folder mana aja di local kalian. Cuman gua disini mencontohkan memakai folder belajar-pertama.

![image](https://github.com/user-attachments/assets/c2703baa-cf70-4d7f-9c07-1b98ab1c45f9)

Nah, setelah selesai cloning. Maka kalian punya folder git repo Week1-Welcome-to-Code

![image](https://github.com/user-attachments/assets/598b12b4-1bed-4630-b4d3-e0fb63ef7e67)

lakukan change directory ke dalam repo Week1-Welcome-to-Code , dengan command:

`cd Week1-Welcome-to-Code/`

nah sekarang kalian sudah didalam directory week1.

Kalo cara gua untuk mengerjakan, kalian tinggal memasuki quiz quiz yang mau kalian kerjain. Misalkan disini gua mau ngerjain quiz part 1.

kita tinggal masuk kedalem part 1

`cd quiz/part1`

dan buat file soal.js nya didalam folder itu 

![image](https://github.com/user-attachments/assets/c1dc57a9-69e4-4f2c-aec3-ec24b9b194fd)

setelah itu kalian copas quiz nya kedalam file js yang sudah kalian buat.

![image](https://github.com/user-attachments/assets/61674df1-bb43-447a-b318-37fe0a538927)

Nah disini kalian sudah bisa mengerjakan quiz nya!.

## Submit Tugas

setelah kalian melakukan perubahan pada code, dan menyelesaikan quiznya.

maka git local kalian wajib melakukan commit & push ke dalam repo fork kalian.

contohnya disini gua tambahin line : `//CONTOH SOAL SELESAI`

![image](https://github.com/user-attachments/assets/922bb36a-6e77-4a09-8ebe-6e48110d09a9)

Kalau kalian sadar, VS Code kita menandakan warna hijau pada soal1.js yang baru saja dibuat.
ini adalah bentuk perubahan history yang di versioning oleh git.

Sekarang waktunya commit & push perubahannya , agar fork repo kalian mempunyai versi yang sesuai dengan local kalian.

sebelum kita push kalian harus konfigurasi git profile di local :

`git config --global user.name "Username github"`
`git config --global user.email emailKalian@github.com`

![image](https://github.com/user-attachments/assets/7bcc03da-331c-4a5d-9c7c-34d442643314)


setelah konfigurasi selesai kalian bisa lanjut untuk commit & push.

Ketik command :

`git add .` -> melakukan penambahan perubahan ke staging (finalisasi)

`git commit -m "Submit tugas pertama"` -> Memasukan peurbahan staging ke dalam hashcode (commit)

`git push origin main` -> push commit ke dalam branch main (fork repo).

Disini gua contohkan push ke main branch, best practicenya kalian membuat branch sendiri terpisah (optional).

setelah kalian push, maka hasilnya seperti ini :

![image](https://github.com/user-attachments/assets/a8561f8c-e864-4429-9b3b-9cd6a782f948)

sekarang buka github kalian dan pergi ke link fork repo week1.

di contoh gua : https://github.com/zexoverz/Week1-Welcome-to-Code

nah kalian bisa pergi ke tab "Pull Requests" dan klik button hijau New Pull Request

![image](https://github.com/user-attachments/assets/57688261-8860-405c-b8bd-f14ba7f737c3)

setelah itu github akan otomatis melakukan komparasi terhadap fork repo kalian dengan repo asli RPN.

selanjutnya tinggal klik create pull request

![image](https://github.com/user-attachments/assets/ee7db659-44e1-4938-81bc-d5ea7045f600)


Isi title dengan username/nama kalian. setelah itu klik create pull request

![image](https://github.com/user-attachments/assets/57f509e9-c944-40b6-a007-52d17a5e6c09)

Congrats, kalian sudah submit tugas pertama di RPN

![image](https://github.com/user-attachments/assets/da84dfc3-b10e-42fb-ae2a-07b857a2befa)

selanjutnya, kalian tidak perlu lagi PR untuk submit soal kedua atau part 2 di week1.
kalian tinggal ulangi saja proses commit & push nya.

dan kalian bisa lihat history pengumpulan tugas kalian di PR bagian commits

![image](https://github.com/user-attachments/assets/486bb8ef-d985-4da1-b9ad-beb7dc1fa6c4)

Nah disinilah para mentor akan mereview tugas kalian menggunakan sistem pull request dari github.
Mentor juga bakal ngasih feedback berupa comment di PR kalian.

Kalian akan melakukan Fork & PR ulang, jika kalian sudah lanjut ke week2. 

Karena RPN memisahkan 1 Repo = 1 Week.

Jadi jika Phase 0 punya 4 Week , maka kalian harus fork 4 repo dan 4 PR.

`Welcome to RPN World, Let's Code ALL CHALLANGES !!!`

----------------------------------------------------
video tutorial materi ini, biar lebih paham: [Part 1](https://youtu.be/2zpsV_00pWc)
