// Program untuk mencari bilangan prima di antara dua angka
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan batas bawah: ", (batasBawah) => {

    rl.question("Masukkan batas atas: ", (batasAtas) => {
        
        findPrimeNumbers(batasBawah, batasAtas);
        rl.close();
        
    });
});
console.log("Bilangan prima di antara " + batasBawah + " dan " + batasAtas + ":");

// Fungsi untuk mengecek apakah sebuah bilangan prima
function isPrime(number) {
    
}

// Loop untuk mencari bilangan prima dan mencetaknya
for (let i = batasBawah; i <= batasAtas; i++) {
    
}
