// Program untuk menentukan grade berdasarkan nilai ujian
const nilaiUjian = parseFloat(prompt("Masukkan nilai ujian (0-100):"));

if (nilaiUjian >= 0 && nilaiUjian <= 100) {
    if (nilaiUjian >= 90) {
        console.log("Grade: A");
    } else if (nilaiUjian >= 80) {
        console.log("Grade: B");
    } else if (nilaiUjian >= 70) {
        console.log("Grade: C");
    } else if (nilaiUjian >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
} else {
    console.log("Nilai ujian tidak valid");
}
