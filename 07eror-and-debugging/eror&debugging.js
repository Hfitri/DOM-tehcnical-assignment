/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
console.log('SOAL NOMOR 1');
console.log ('type eror, merupakan kesalahan yang terjadi saat kita ingin menginput fungsi namun tidak sesuai dengan tipe data tertentu misalnya ingin mengubah number ke string') 
console.log ('Reference eror, merupakan kesalahan yang terjadi ketika kita memberikan refrensi hal ini biasa terjajdi saat variabel belum dideklarasikan')
console.log ('Range eror merupakan kesalahan yang terjadi akibat nilai tidak berada dalam satu eksternal yang valid')
console.log ('Syntax eror merupakan kesalahan pengejaan pada kata kunci atau kesalahan struktur kode yang sedang dijalankan.')  

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log('SOAL NOMOR 2');
console.log ('saat menjalankan kode seperti petunjuk soal, yang terjadi adalah eror')
console.log ('eror tersebut termasuk dalam "refrence eror"')
console.log ('hal ini terjadi karena variabel salaryWithConst harus diinisialisaikan terlebih dahulu')

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;