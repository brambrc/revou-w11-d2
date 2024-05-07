const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan yang ingin dipangkatkan: ", (bilangan) => {
    const angka = parseInt(bilangan);
    rl.question("Masukkan pangkat: ", (pangkat) => {
        const pangkatAngka = parseInt(pangkat);
        
        let hasil = 1;
        let counter = 0;

        console.log(`Hasil ${angka} pangkat ${pangkatAngka} adalah:`);
        
        while (counter < pangkatAngka) {
            // hasil *= angka;
            hasil = hasil * angka;
            counter++;
        }

        console.log(hasil);
        rl.close();
    });
});

//Kondisi Start Program # Loop Pertama
// hasil = 1, counter = 0, angka = 2, pangkatAngka = 3
// counter < pangkatAngka -> 0 < 3 | TRUE
// hasil = 1 * 2 = 2, 
// counter = 1

//Kondisi Loop #2
// hasil = 2, counter = 1, angka = 2, pangkatAngka = 3
// counter < pangkatAngka -> 1 < 3 | TRUE
// hasil = 2 * 2 = 4,
// counter = 2

//Kondisi Loop #3
// hasil = 4, counter = 2, angka = 2, pangkatAngka = 3
// counter < pangkatAngka -> 2 < 3 | TRUE
// hasil = 4 * 2 = 8,
// counter = 3

//Kondisi Loop #4
// hasil = 8, counter = 3, angka = 2, pangkatAngka = 3
// counter < pangkatAngka -> 3 < 3 | FALSE
// Keluar dari Loop
// Output hasil = 8