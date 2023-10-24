const printSegitiga = 5
const type = typeof printSegitiga
console.log(type)

if(type == "number") {
    for (let i = printSegitiga; i >= 1; i--){

        let segitiga = ''
    
        for(let j = 1; j <= i; j++){
            segitiga += j + ' '
        }
    
        console.log(segitiga)
        segitiga = ''
    }
}else{
    console.log("Data harus number")
}