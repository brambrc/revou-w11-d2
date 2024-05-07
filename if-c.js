const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan total belanja: ", (totalBelanja) => {
    
        checkDiscount(totalBelanja);
        rl.close();
    
    }
);

function checkDiscount(totalBelanja) {

    if (totalBelanja >= 100000) {
        console.log("Selamat! Anda mendapatkan diskon sebesar 10%");
        console.log("Total yang harus dibayar: " + (totalBelanja * 0.9) + " rupiah");
    } else if (totalBelanja >= 50000) {
        console.log("Selamat! Anda mendapatkan diskon sebesar 5%");
        console.log("Total yang harus dibayar: " + (totalBelanja * 0.95) + " rupiah");
    } else {
        console.log("Maaf, tidak ada diskon untuk total belanja Anda");
    }

}  
