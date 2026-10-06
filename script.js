/* ==================== BAGIAN 1 ==================== */

// (1) Array of object : data matakuliah
const dataMatakuliah = [
  { kode: "14823372", nama: "STATISTIKA DAN PROBABILITAS",    sks: 2, nilai: "AB", bobot: 3.50 },
  { kode: "SIF102",   nama: "PEMROGRAMAN BERORIENTASI OBJEK", sks: 4, nilai: "A",  bobot: 4.00 },
  { kode: "SIF103",   nama: "INTERAKSI MANUSIA KOMPUTER",     sks: 3, nilai: "AB", bobot: 3.50 },
  { kode: "SIF104",   nama: "ALGORITMA DAN STRUKTUR DATA",    sks: 3, nilai: "AB", bobot: 3.50 },
  { kode: "SIF105",   nama: "TEKNOLOGI INFORMASI DAN APLIKASI BISNIS BERKEMBANG", sks: 3, nilai: "AB", bobot: 3.50 },
  { kode: "SIF106",   nama: "SISTEM BASIS DATA",              sks: 2, nilai: "B",  bobot: 3.00 },
  { kode: "SIF106",   nama: "ARSITEKTUR DAN ORGANISASI KOMPUTER", sks: 3, nilai: "AB", bobot: 3.50 }
];

// Array of object : rekap semester
const dataSemester = [
  { semester: "Semester 1", sks: 18, ip: 3.31, ipk: 3.31 },
  { semester: "Semester 2", sks: 20, ip: 3.53, ipk: 3.42 },
  { semester: "Semester 3", sks: 23, ip: null, ipk: 3.42 }
];

// (2) Function
function hitungTotalSks(daftar) {
  let total = 0;
  for (const mk of daftar) { total += mk.sks; }
  return total;
}

function hitungIP(daftar) {
  if (daftar.length === 0) return 0;
  let totalPoin = 0;
  daftar.forEach(function (mk) { totalPoin += mk.bobot * mk.sks; });
  return totalPoin / hitungTotalSks(daftar);
}

function cariMatakuliah(daftar, kataKunci) {
  const kata = kataKunci.trim().toLowerCase();
  if (kata === "") return daftar;
  return daftar.filter(function (mk) {
    return mk.nama.toLowerCase().includes(kata) || mk.kode.toLowerCase().includes(kata);
  });
}

function filterNilai(daftar, huruf) {
  if (huruf === "semua") return daftar;
  return daftar.filter(function (mk) { return mk.nilai === huruf; });
}

function tentukanPredikat(ip) {
  if (ip >= 3.50 && ip <= 4.00) return "Sangat Memuaskan";
  else if (ip >= 2.50) return "Memuaskan";
  else if (ip >= 2.00) return "Cukup";
  return "Kurang";
}

// (4) Hasil di Console
console.log("=== BAGIAN 1 : HASIL PENGOLAHAN DATA ===");
console.table(dataMatakuliah);
console.log("Total SKS :", hitungTotalSks(dataMatakuliah));
console.log("IP        :", hitungIP(dataMatakuliah).toFixed(2));
console.log("Predikat  :", tentukanPredikat(hitungIP(dataMatakuliah)));

/* ==================== BAGIAN 2 : DOM ==================== */

const warnaBadge = { "A": "bg-nilai-a", "AB": "bg-nilai-ab", "B": "bg-nilai-b" };

// (1) Render tabel dengan createElement
function renderTabel(daftar) {
  const tbody = document.getElementById("isiTabelNilai");
  tbody.innerHTML = "";

  if (daftar.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.className = "text-center text-muted py-4";
    td.textContent = "Matakuliah tidak ditemukan.";
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    daftar.forEach(function (mk, i) {
      const tr = document.createElement("tr");

      const tdNo = document.createElement("td");
      tdNo.textContent = i + 1;

      const tdKode = document.createElement("td");
      tdKode.textContent = mk.kode;

      const tdNama = document.createElement("td");
      tdNama.className = "text-start";
      tdNama.textContent = mk.nama;

      const tdSks = document.createElement("td");
      tdSks.textContent = mk.sks;

      const tdNilai = document.createElement("td");
      const span = document.createElement("span");
      span.className = "badge badge-nilai " + (warnaBadge[mk.nilai] || "bg-secondary");
      span.textContent = mk.nilai;
      tdNilai.appendChild(span);

      const tdBobot = document.createElement("td");
      tdBobot.textContent = mk.bobot.toFixed(2);

      tr.append(tdNo, tdKode, tdNama, tdSks, tdNilai, tdBobot);
      tbody.appendChild(tr);
    });
  }
  perbaruiStatistik(daftar);
}

// Ringkasan statistik (template literal)
function perbaruiStatistik(daftar) {
  const el = document.getElementById("infoStatistik");
  const ip = hitungIP(daftar);
  el.innerHTML = `
    Menampilkan <strong>${daftar.length}</strong> matakuliah •
    Total <strong>${hitungTotalSks(daftar)}</strong> SKS •
    IP : <strong>${ip.toFixed(2)}</strong> •
    Predikat : <strong>${tentukanPredikat(ip)}</strong>`;
}

// Tabel semester (template literal)
function renderSemester() {
  const tbody = document.getElementById("isiTabelSemester");
  tbody.innerHTML = dataSemester.map(function (s) {
    const ipTampil = s.ip === null ? "-" : s.ip.toFixed(2);
    const kelas    = s.ip === null ? 'class="table-info fw-bold"' : "";
    return `
      <tr ${kelas}>
        <td>${s.semester}</td><td>${s.sks}</td><td>${ipTampil}</td><td>${s.ipk.toFixed(2)}</td>
      </tr>`;
  }).join("");
}

// (2) Interaksi : search + filter
const inputCari  = document.getElementById("inputCari");
const pilihNilai = document.getElementById("pilihNilai");

function terapkanFilter() {
  const hasilCari = cariMatakuliah(dataMatakuliah, inputCari.value);
  renderTabel(filterNilai(hasilCari, pilihNilai.value));
}
inputCari.addEventListener("input", terapkanFilter);   // Interaksi 1
pilihNilai.addEventListener("change", terapkanFilter); // Interaksi 2

// Interaksi 3 : toggle mode gelap (classList, bukan style inline)
const tombolMode = document.getElementById("tombolMode");
if (tombolMode) { // pengaman: tidak crash jika tombol dihapus dari HTML
  tombolMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const gelap = document.body.classList.contains("dark-mode");
    tombolMode.classList.toggle("btn-outline-light", gelap);
    tombolMode.classList.toggle("btn-outline-info", !gelap);
    tombolMode.innerHTML = gelap
      ? '<i class="bi bi-sun-fill me-1"></i>Mode Terang'
      : '<i class="bi bi-moon-stars-fill me-1"></i>Mode Gelap';
  });
}

// (3) Form tambah : validasi + preventDefault
const formTambah = document.getElementById("formTambahMK");
formTambah.addEventListener("submit", function (event) {
  event.preventDefault();

  const fKode  = document.getElementById("inputKode");
  const fNama  = document.getElementById("inputNamaMK");
  const fSks   = document.getElementById("inputSks");
  const fNilai = document.getElementById("inputNilai");
  let valid = true;

  if (fKode.value.trim() === "")      { fKode.classList.add("is-invalid");  valid = false; } else fKode.classList.remove("is-invalid");
  if (fNama.value.trim().length < 4)  { fNama.classList.add("is-invalid");  valid = false; } else fNama.classList.remove("is-invalid");

  const sksBaru = Number(fSks.value);
  if (isNaN(sksBaru) || sksBaru < 1 || sksBaru > 6) { fSks.classList.add("is-invalid"); valid = false; } else fSks.classList.remove("is-invalid");

  if (fNilai.value === "")            { fNilai.classList.add("is-invalid"); valid = false; } else fNilai.classList.remove("is-invalid");

  if (!valid) return;

  const bobotBaru = fNilai.value === "A" ? 4.00 : (fNilai.value === "AB" ? 3.50 : 3.00);

  dataMatakuliah.push({
    kode : fKode.value.trim().toUpperCase(),
    nama : fNama.value.trim().toUpperCase(),
    sks  : sksBaru,
    nilai: fNilai.value,
    bobot: bobotBaru
  });

  formTambah.reset();
  inputCari.value = "";
  pilihNilai.value = "semua";
  renderTabel(dataMatakuliah);

  const pesan = document.getElementById("pesanSukses");
  pesan.classList.remove("d-none");
  setTimeout(function () { pesan.classList.add("d-none"); }, 3000);
});

// Form modal kontak (opsional, ada pengaman)
const formKontak = document.getElementById("formKontak");
if (formKontak) {
  formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const fNama  = document.getElementById("kontakNama");
    const fEmail = document.getElementById("kontakEmail");
    const fPesan = document.getElementById("kontakPesan");
    const info   = document.getElementById("infoKontak");
    let valid = true;

    if (fNama.value.trim() === "") { fNama.classList.add("is-invalid"); valid = false; } else fNama.classList.remove("is-invalid");

    const emailOk = fEmail.value.includes("@") && fEmail.value.includes(".");
    if (!emailOk) { fEmail.classList.add("is-invalid"); valid = false; } else fEmail.classList.remove("is-invalid");

    if (fPesan.value.trim().length < 10) { fPesan.classList.add("is-invalid"); valid = false; } else fPesan.classList.remove("is-invalid");

    if (!valid) {
      info.textContent = "Periksa kembali isian Anda (pesan minimal 10 karakter).";
      info.classList.remove("d-none", "alert-success");
      info.classList.add("alert-danger");
      return;
    }

    info.textContent = `Terima kasih, ${fNama.value.trim()}! Pesan Anda telah dikirim.`;
    info.classList.remove("d-none", "alert-danger");
    info.classList.add("alert-success");
    formKontak.reset();
  });
}

// Animasi reveal
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add("aktif");
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

// ---------- RENDER AWAL (Cara 2) ----------
// JS langsung menimpa baris statis HTML dengan render dari array.
// Karena isinya sama persis, tampilan tabel tetap menampilkan semua nilai.
renderTabel(dataMatakuliah);
renderSemester();