const mapel = [                                                                  // 1. membuat data mapel dengan array of object
    {
        namaMapel: "MTK",
        nilai: 80
    },
    {
        namaMapel: "Bahasa Indonesia",
        nilai: 90
    },
    {
        namaMapel: "Bahasa Inggris",
        nilai: 89
    },
    {
        namaMapel: "IPA",
        nilai: 69
    }
]

let totalNilai = 0                                                                  // 2. deklarasi variable = untuk menyimpan total nilai

for(let i = 0; i < mapel.length; i++){                                              // 3. melooping data mapel
    if(typeof mapel[i].nilai !== "number"){                                         // 4. pengkondisian = jika nilai mapel bukan number maka hentikan program dan tampilkan pesan tersebut
        return console.log(`Nilai mapel ${mapel[i].namaMapel} harus diisi`)
    }

    if(mapel[i].nilai > 100 || mapel[i].nilai < 0){                                 // 5. pengkondisian = jika nilai mapel lebih dari 100 atau kurang dari 0 maka hentikan program dan tampilkan pesan tersebut
        return console.log(`Nilai mapel ${mapel[i].namaMapel} diluar batas`)
    }

    totalNilai += mapel[i].nilai                                                    // 6. tiap nilai di tambahkan ke variable totalNilai 
}

let rataRata = totalNilai / mapel.length                                            // 7. menghitung rata-rata dengan hasil total nilai di bagi panjang data array mapel
rataRata = Math.round(rataRata)                                                     // 9. membulatkan nilai rata-rata desimal ke yang terdekat jika hasil rata-rata adalah desimal yang tidak ada di pengkondisian

    let grade = ""                                                                  // 10. deklarasi variable yang akan di isi nilai grade
    if(90 <= rataRata && rataRata <= 100){                                          // 11. pengkondisian = jika rata-rata antara 90-100 maka grade A
        grade = "A"
    }else if(80 <= rataRata && rataRata <= 89){                                     // 12. pengkondisian = jika rata-rata antara 80-89 maka grade B
        grade = "B"
    }else if(70 <= rataRata && rataRata <= 79){                                     // 13. pengkondisian = jika rata-rata antara 70-79 maka grade C
        grade = "C"
    }else if(60 <= rataRata && rataRata <= 69){                                     // 14. pengkondisian = jika rata-rata antara 60-69 maka grade D
        grade = "D"
    }else{                                                                          // 15. pengkondisian = jika rata-rata antara 0-59 maka grade E
        grade = "E"
    }

    console.log(                                                                    // 16. menampilkan output rata-rata dan grade
        `                                                                   
        Rata-rata = ${rataRata}
        Grade = ${grade}
    `)
