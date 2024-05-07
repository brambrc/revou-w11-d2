// Program untuk menemukan bilangan Fibonacci terkecil lebih besar dari angka tertentu
const batas = parseInt(prompt("Masukkan angka batas:"));
let fib1 = 0;
let fib2 = 1;
let hasil = 0;

while (hasil <= batas) {
    hasil = fib1 + fib2;
    fib1 = fib2;
    fib2 = hasil;
}

console.log("Bilangan Fibonacci terkecil lebih besar dari " + batas + " adalah: " + hasil);
