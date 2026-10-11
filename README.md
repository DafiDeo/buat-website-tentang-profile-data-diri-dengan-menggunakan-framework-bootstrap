# 👤 Website Profile Data Diri dengan Bootstrap

🌐 **Website Profile Data Diri**

Project pembelajaran HTML, CSS, Bootstrap, JavaScript DOM, dan jQuery.

## 📖 Tentang Project

Project ini merupakan latihan membuat website profil data diri menggunakan HTML, CSS, framework Bootstrap, JavaScript (DOM), dan jQuery.

Dimulai dari membuat halaman web yang terstruktur, responsif, dan menarik dengan Bootstrap (**Tugas Individu 1**), kemudian dikembangkan menjadi website interaktif dengan menerapkan prinsip DOM (**Tugas Individu 2**). Fitur yang diterapkan meliputi data dari *array of object*, pencarian dan filter real-time, penambahan dan penghapusan data, validasi form, serta efek animasi menggunakan jQuery.

Website dapat dijalankan melalui GitHub Pages.

👉 **Buka Demo Website:** [Klik di sini](https://dafideo.github.io/buat-website-tentang-profile-data-diri-dengan-menggunakan-framework-bootstrap/)

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| 🟧 HTML5 | Membuat struktur halaman web |
| 🎨 CSS3 | Mengatur dan menyesuaikan tampilan |
| 🟪 Bootstrap 5.3.8 | Membantu membuat layout dan komponen responsif |
| ⭐ Bootstrap Icons | Menambahkan ikon pada website |
| 🟨 JavaScript (DOM) | Menampilkan data, menangani event, dan melakukan validasi form |
| ⚡ jQuery 3.7.1 | Membuat efek animasi `fadeOut()` dan `fadeIn()` serta event delegation |

## 📂 Struktur Project

```text
Project/
├── Profile_Data_Diri.html
├── style.css
├── script.js
├── bootstrap-5.3.8-dist.
└── bootstrap-icons-1.13.1
```

## ✨ Fitur Website

### 🖼️ Tampilan — Tugas Individu 1

- Navbar responsif dengan menu navigasi.
- Hero section dengan foto profil dan badge informasi.
- Kartu informasi nama, NBI, program studi, dan prestasi akademik.
- Tabel nilai mata kuliah dengan badge warna berdasarkan nilai huruf.
- Kartu IPK dengan progress bar dan rekap per semester.
- Modal form kontak.
- Footer dengan tautan media sosial.

### ⚙️ Fitur Interaktif — Tugas Individu 2

| Fitur | Teknologi | Keterangan |
|---|---|---|
| 🔍 Pencarian real-time | JavaScript DOM (`addEventListener`) | Mencari mata kuliah berdasarkan nama atau kode |
| 🎚️ Filter nilai huruf | JavaScript DOM (`addEventListener`) | Menyaring tabel berdasarkan nilai A, AB, atau B |
| ➕ Tambah mata kuliah | JavaScript DOM (`preventDefault`) | Menambahkan data melalui form dengan validasi input |
| 🗑️ Hapus mata kuliah | jQuery (`on`, `fadeOut`) | Menghapus baris tabel dengan efek memudar |
| 🌙 Mode gelap | JavaScript DOM (`classList.toggle`) | Mengganti tema terang dan gelap |
| 📬 Validasi form kontak | JavaScript DOM (`is-invalid`) | Memeriksa nama, email, dan pesan |
| 💬 Notifikasi sukses | jQuery (chaining) | Menampilkan notifikasi dengan `fadeIn()`, `delay()`, dan `fadeOut()` |
| 🖥️ Log konsol | JavaScript | Menampilkan hasil pengolahan data, seperti total SKS, IP, dan predikat |

## 🧠 Konsep yang Dipraktikkan

- **Array of object:** Menyimpan data mata kuliah dan rekap semester.
- **Function:** Menghitung total SKS, IP (rata-rata tertimbang), melakukan pencarian, filter, dan menentukan predikat.
- **Perulangan dan array method:** Menggunakan `for...of`, `forEach()`, dan `filter()`.
- **Operator:** Menggunakan operator perbandingan dan logika.
- **DOM manipulation:** Menggunakan `createElement()`, `querySelector()`, dan `innerHTML` dengan template literal.
- **Event handling:** Menggunakan `addEventListener()` pada JavaScript dan `on()` pada jQuery untuk event delegation.
- **Validasi form:** Menggunakan `preventDefault()` dan `classList` untuk mengelola validasi tanpa mengandalkan style inline.
- **jQuery effects:** Menggunakan `fadeOut()`, `fadeIn()`, `delay()`, traversing dengan `closest()`, dan chaining.

## 🚀 Cara Menjalankan

1. Download atau clone repository ini.
2. Buka file `Profile_Data_Diri.html` menggunakan browser.
3. Tekan `F12`, lalu buka tab **Console** untuk melihat hasil pengolahan data.
4. Coba fitur pencarian mata kuliah, filter nilai, tambah dan hapus mata kuliah, serta pergantian mode gelap.



<div align="center">

© 2026 — **Dafi Deo Ananda Nurrokhim** · NBI 1482500040

</div>
