const printSegitiga = 5                               // 1. deklarasi variable printSegitiga dan inisialisasi variable dengan angka 5


if(isNaN(printSegitiga)) {                            // 2. memeriksa input printSegitiga bukan sebuah number. jika bernilai true maka akan menampilkan pesan tersebut
    console.log("Data harus number")
}else{                                                // 3. jika bernilai false yang berarti input printSegitiga merupakan number. maka akan menjalankan loopingan tersebut
    for (let i = printSegitiga; i >= 1; i--){

        let segitiga = ''                             // 4. deklarasi variable segitiga = untuk menyimpan hasil loopingan kedua yang menghasilkan data baris ke samping
    
        for(let j = 1; j <= i; j++){
            segitiga += j + ' '
        }
    
        console.log(segitiga)
        segitiga = ''
    }
}


// 5. alur loopingan yang saya pahami :

/*
for pertama di mulai dari 5. lalu masuk ke for kedua
for kedua di mulai dari 1
karena 1 memenuhi kondisi tambahkan 1 ke variable segitiga
lalu 1 di increment menjadi 2 dan masih memenuhi kondisi tambahkan 2 ke variable segitiga
lalu 2 di increment menjadi 3 dan masih memenuhi kondisi tambahkan 3 ke variable segitiga
lalu 3 di increment menjadi 4 dan masih memenuhi kondisi tambahkan 4 ke variable segitiga
lalu 4 di increment menjadi 5 dan masih memenuhi kondisi tambahkan 5 ke variable segitiga
lalu 5 di increment menjadi 6 dan tidak memenuhi kondisi lagi 
jadi lanjut ke console.log kemudian variable segitiga di kosongkan kembali
lalu kembali ke for pertama

                                                                                jadi hasil di baris pertama = 1 2 3 4 5

di for pertama 5 di decrement menjadi 4. lalu masuk ke for kedua
for kedua di mulai dari 1
karena 1 memenuhi kondisi tambahkan 1 ke variable segitiga
lalu 1 di increment menjadi 2 dan masih memenuhi kondisi tambahkan 2 ke variable segitiga
lalu 2 di increment menjadi 3 dan masih memenuhi kondisi tambahkan 3 ke variable segitiga
lalu 3 di increment menjadi 4 dan masih memenuhi kondisi tambahkan 4 ke variable segitiga
lalu 4 di increment menjadi 5 dan tidak memenuhi kondisi lagi
jadi lanjut ke console.log kemudian variable segitiga di kosongkan kembali
lalu kembali ke for pertama

                                                                                jadi hasil di baris kedua = 1 2 3 4 

di for pertama 4 di decrement menjadi 3. lalu masuk ke for kedua
for kedua di mulai dari 1
karena 1 memenuhi kondisi tambahkan 1 ke variable segitiga
lalu 1 di increment menjadi 2 dan masih memenuhi kondisi tambahkan 2 ke variable segitiga
lalu 2 di increment menjadi 3 dan masih memenuhi kondisi tambahkan 3 ke variable segitiga
lalu 3 di increment menjadi 4 dan tidak memenuhi kondisi lagi
jadi lanjut ke console.log kemudian variable segitiga di kosongkan kembali
lalu kembali ke for pertama

                                                                                jadi hasil di baris ketiga = 1 2 3 

di for pertama 3 di decrement menjadi 2. lalu masuk ke for kedua
for kedua di mulai dari 1
karena 1 memenuhi kondisi tambahkan 1 ke variable segitiga
lalu 1 di increment menjadi 2 dan masih memenuhi kondisi tambahkan 2 ke variable segitiga
lalu 2 di increment menjadi 3 dan tidak memenuhi kondisi lagi
jadi lanjut ke console.log kemudian variable segitiga di kosongkan kembali
lalu kembali ke for pertama

                                                                                jadi hasil di baris keempat = 1 2 

di for pertama 2 di decrement menjadi 1. lalu masuk ke for kedua
for kedua di mulai dari 1
karena 1 memenuhi kondisi tambahkan 1 ke variable segitiga
lalu 1 di increment menjadi 2 dan tidak memenuhi kondisi lagi
jadi lanjut ke console.log kemudian variable segitiga di kosongkan kembali
lalu kembali ke for pertama

                                                                                jadi hasil di baris kelima = 1 

di for pertama 1 di decrement menjadi 0
karena tidak memenuhi kondisi lagi loopingan berhenti
output hasil :
1 2 3 4 5 
1 2 3 4
1 2 3
1 2
1
*/