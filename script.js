const menu = document.querySelectorAll(".menu");

const nama = document.getElementById("nama");
const kelas = document.getElementById("kelas");

const progres = document.getElementById("progres");
const aktifitas = document.getElementById("aktifitas");
const dokumen = document.getElementById("dokumen");
const statistik = document.getElementById("statistik");

const welcome = document.querySelector(".welcome");

// Menghapus warna sebelumnya
function resetWarna() {
    progres.classList.remove("highlight-blue");
    aktifitas.classList.remove("highlight-blue");
    dokumen.classList.remove("highlight-blue");
    statistik.classList.remove("highlight-blue");
}

// Fungsi scroll
function scrollKe(element) {
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Fungsi tombol menu
menu.forEach(function(item) {

    item.addEventListener("click", function(e) {

        e.preventDefault();

        menu.forEach(function(link) {
            link.classList.remove("active");
        });

        this.classList.add("active");

        resetWarna();

        const halaman = this.dataset.page;

        // HOME
        if (halaman === "home") {

            nama.textContent = "Nama Mahasiswa";
            kelas.textContent = "Kelas SI-3X";

            scrollKe(document.querySelector(".header"));

        }

        // MAHASISWA
        else if (halaman === "mahasiswa") {

            nama.textContent = "Renita Afsari";

            scrollKe(welcome);

        }

        // KELAS
        else if (halaman === "kelas") {

            kelas.textContent = "Kelas SI-3E";

            

        }

        // AKTIFITAS
        else if (halaman === "aktifitas") {

            progres.classList.add("highlight-blue");
            aktifitas.classList.add("highlight-blue");

            

        }

        // STATISTIK
        else if (halaman === "statistik") {

            statistik.classList.add("highlight-blue");

        }

        // DOKUMEN
        else if (halaman === "dokumen") {

            dokumen.classList.add("highlight-blue");

            scrollKe(dokumen);

        }

        // SETTINGS
        else if (halaman === "settings") {

            scrollKe(document.querySelector(".header"));

        }

        // SIGN OUT
        else if (halaman === "signout") {
            const konfirmasi = confirm("Yakin mau Sign Out, Renita?");

            if (konfirmasi) {
        alert("Kamu berhasil Sign Out!");
        }

    return;
}
        });

    });

