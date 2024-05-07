// Program untuk menentukan jenis segitiga berdasarkan panjang sisi
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan panjang sisi 1: ", (sisi1) => {

    rl.question("Masukkan panjang sisi 2: ", (sisi2) => {
            
            rl.question("Masukkan panjang sisi 3: ", (sisi3) => {

                checkTriangleType(sisi1, sisi2, sisi3);
                rl.close();
                
            });
        });
    }
);

function checkTriangleType(sisi1, sisi2, sisi3) {

    if (sisi1 === sisi2 && sisi2 === sisi3) {
        console.log("Segitiga tersebut adalah segitiga sama sisi");
    } else if (sisi1 === sisi2 || sisi1 === sisi3 || sisi2 === sisi3) {
        console.log("Segitiga tersebut adalah segitiga sama kaki");
    } else {
        console.log("Segitiga tersebut adalah segitiga sembarang");
    }

}