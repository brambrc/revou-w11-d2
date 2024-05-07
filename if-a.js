// Program untuk menentukan apakah suatu bilangan positif, negatif, atau nol
const bilangan = parseInt(prompt("Masukkan suatu bilangan:"));

if (bilangan > 0) {
    console.log("Bilangan tersebut adalah positif");
} else if (bilangan < 0) {
    console.log("Bilangan tersebut adalah negatif");
} else {
    console.log("Bilangan tersebut adalah nol");
}
