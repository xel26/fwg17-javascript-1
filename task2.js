const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if(mtk !== null && bahasaIndonesia !== null && bahasaInggris !== null && ipa !== null){
    let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
    console.log(rataRata)
    rataRata = Math.round(rataRata)

    let grade
    if(90 <= rataRata && rataRata <= 100){
        grade = "A"
    }else if(80 <= rataRata && rataRata <= 89){
        grade = "B"
    }else if(70 <= rataRata && rataRata <= 79){
        grade = "C"
    }else if(60 <= rataRata && rataRata <= 69){
        grade = "D"
    }else if(0 <= rataRata && rataRata <= 59){
        grade = "E"
    }

    console.log(`
        Rata-rata = ${rataRata}
        Grade = ${grade}
    `)
}else{
    console.log("isi semua nilai!")
}