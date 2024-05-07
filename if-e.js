// Program untuk menentukan hari dalam seminggu berdasarkan angka (1-7)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan angka hari: ", (angkaHari) => {
        
            checkDay(angkaHari);
            rl.close();
        
        }
    );

function checkDay(angkaHari) {
    
        if (angkaHari >= 1 && angkaHari <= 7) {
            if (angkaHari === 1) {
                console.log("Hari: Senin");
            } else if (angkaHari === 2) {
                console.log("Hari: Selasa");
            } else if (angkaHari === 3) {
                console.log("Hari: Rabu");
            } else if (angkaHari === 4) {
                console.log("Hari: Kamis");
            } else if (angkaHari === 5) {
                console.log("Hari: Jumat");
            } else if (angkaHari === 6) {
                console.log("Hari: Sabtu");
            } else {
                console.log("Hari: Minggu");
            }
        } else {
            console.log("Angka hari tidak valid");
        }
    
    }
