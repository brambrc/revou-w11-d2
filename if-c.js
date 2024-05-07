// Program untuk menentukan diskon berdasarkan total belanja
const totalBelanja = parseInt(prompt("Masukkan total belanja (dalam rupiah):"));

if (totalBelanja >= 100000) {
    console.log("Selamat! Anda mendapatkan diskon sebesar 10%");
    console.log("Total yang harus dibayar: " + (totalBelanja * 0.9) + " rupiah");
} else if (totalBelanja >= 50000) {
    console.log("Selamat! Anda mendapatkan diskon sebesar 5%");
    console.log("Total yang harus dibayar: " + (totalBelanja * 0.95) + " rupiah");
} else {
    console.log("Maaf, tidak ada diskon untuk total belanja Anda");
}
