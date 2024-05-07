//
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Masukkan angka batas:", (angkaBatas) => {
    const batas = parseInt(angkaBatas);
    let fib1 = 0;
    let fib2 = 1;
    let hasil = 0;

    while (hasil <= batas) {
        hasil = fib1 + fib2;
        fib1 = fib2;
        fib2 = hasil;
    }

    console.log("Bilangan Fibonacci terkecil lebih besar dari " + batas + " adalah: " + hasil);
    rl.close();

}
);