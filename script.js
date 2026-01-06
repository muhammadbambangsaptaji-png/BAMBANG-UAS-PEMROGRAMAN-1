const materiData = [
    { p: 1, judul: "Kedudukan & Fungsi Bahasa Indonesia", isi: "Bahasa Indonesia berfungsi sebagai bahasa nasional dan bahasa negara. Sebagai bahasa nasional, ia adalah lambang kebanggaan..." },
    { p: 2, judul: "Sejarah Perkembangan Bahasa", isi: "Bahasa Indonesia berasal dari Bahasa Melayu Riau. Diresmikan pada Sumpah Pemuda 1928..." },
    { p: 3, judul: "Ejaan Bahasa Indonesia (EBI)", isi: "Membahas tentang penggunaan huruf kapital, miring, dan penulisan kata serapan yang benar..." },
    { p: 4, judul: "Diksi (Pilihan Kata)", isi: "Diksi adalah ketepatan pilihan kata untuk menyampaikan gagasan agar mencapai efek tertentu..." },
    { p: 5, judul: "Kalimat Efektif", isi: "Kalimat yang memiliki kemampuan untuk menimbulkan kembali gagasan pada pikiran pendengar atau pembaca..." },
    { p: 6, judul: "Paragraf dan Pengembangannya", isi: "Cara menyusun ide pokok dan ide penjelas menjadi satu kesatuan yang kohesif dan koheren..." },
    { p: 7, judul: "Jenis-Jenis Teks", isi: "Membahas teks narasi, deskripsi, eksposisi, argumentasi, dan persuasi..." },
    { p: 8, judul: "UTS (Ujian Tengah Semester)", isi: "Review materi pertemuan 1-7 dan pelaksanaan ujian." },
    { p: 9, judul: "Karya Ilmiah: Pendahuluan", isi: "Sistematika penulisan bagian awal karya tulis ilmiah seperti latar belakang dan rumusan masalah..." },
    { p: 10, judul: "Kutipan dan Catatan Kaki", isi: "Teknik merujuk sumber informasi agar terhindar dari plagiarisme..." },
    { p: 11, judul: "Daftar Pustaka", isi: "Teknik penulisan referensi menggunakan standar APA atau MLA..." },
    { p: 12, judul: "Resensi Buku", isi: "Cara memberikan penilaian atau ulasan terhadap sebuah karya sastra atau buku non-fiksi..." },
    { p: 13, judul: "Surat Menyurat Resmi", isi: "Struktur penulisan surat dinas, surat lamaran kerja, dan bahasa korespondensi..." },
    { p: 14, judul: "Presentasi Ilmiah", isi: "Teknik berbicara di depan umum dan menyajikan materi menggunakan media visual secara efektif..." }
];

const menuList = document.getElementById('menu-list');
const mainText = document.getElementById('main-text');
const meetingTag = document.getElementById('meeting-tag');

// Fungsi untuk merender menu
function renderMenu() {
    materiData.forEach((materi, index) => {
        const li = document.createElement('li');
        li.textContent = `Pertemuan ${materi.p}`;
        li.onclick = () => showContent(index, li);
        menuList.appendChild(li);
    });
}

// Fungsi menampilkan isi materi
function showContent(index, element) {
    // Hapus class active dari semua menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    // Tambah class active ke yang dipilih
    element.classList.add('active');

    const data = materiData[index];
    meetingTag.textContent = `Materi Pertemuan ke-${data.p}`;
    
    mainText.innerHTML = `
        <div class="fade-in">
            <h3>${data.judul}</h3>
            <p>${data.isi}</p>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
            <p><i>Tugas: Silakan buat resume singkat mengenai materi ${data.judul} ini.</i></p>
        </div>
    `;
}

renderMenu();