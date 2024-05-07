// Program untuk menentukan jenis segitiga berdasarkan panjang sisi
const sisi1 = parseFloat(prompt("Masukkan panjang sisi 1:"));
const sisi2 = parseFloat(prompt("Masukkan panjang sisi 2:"));
const sisi3 = parseFloat(prompt("Masukkan panjang sisi 3:"));

if (sisi1 === sisi2 && sisi2 === sisi3) {
    console.log("Segitiga tersebut adalah segitiga sama sisi");
} else if (sisi1 === sisi2 || sisi1 === sisi3 || sisi2 === sisi3) {
    console.log("Segitiga tersebut adalah segitiga sama kaki");
} else {
    console.log("Segitiga tersebut adalah segitiga sembarang");
}
