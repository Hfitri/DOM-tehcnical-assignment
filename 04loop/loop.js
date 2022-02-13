/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

function angkaPrima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}
for( var n = 2;  n < 100;  n++ ) {
        if( angkaPrima(n) ) {
  console.log(n);
 }
}

/// Expected Result 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;

/// EDIT HERE


let i = 1;
while (primeCounter < 50) {
    i++;
    var eliminasi = false;
    for (let n = 2; n <= i; n++) {
        if (i%n==0 && i!==n) {
            eliminasi = true;
        }
    }
    if (eliminasi == false) {
                primeCounter++;  // 2 3 5 7 .. 
                fiftiethPrime = i;
    }
}
console.log(fiftiethPrime)

/// Expected Result 229

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let h = 0;

/// EDIT HERE

do {
  h++;
    if(h % 2 == 1) {
        oddCounter++;
    if(oddCounter == 50) {
        fiftiethOdd = h;
        console.log(fiftiethOdd);
            }
        }
    } 
while (oddCounter < 50);


/// Expected Result 99
