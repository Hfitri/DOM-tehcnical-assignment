/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
console.log("Scope merupakan alur dari variabel dalam Javascript atau sering juga disebut konsep dalam flow data variabel. jumlah variavel dalam scope pada Javascript yang pertama ada golbal scope, global scope merupakan suatu variabel yang bisa diakses di mana pun dalam suatu file dan harus dideklarasikan bersama dengan blok.Javascript kemudian local scope, local scope merupakan bentuk  untuk mendeklarasikan suatu variabel block seperti function, conditional, looping. jadi berdasarkan definisi di atas local scope hanya dapat diakses dalam block saja dan apabila variabel tidak berada dalam blok maka tidak dapat diakses"); 

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan ditampilkan di dalam console.log adalah  "Mariah"
/// - karena sebelum melakukan console.log terdapat metode split yang mana split akan mengembalikan array baru tanpa mengubah string aslinya yaitu "John Watson" maka yang akan tampil di console.log adalah "Mariah"
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));