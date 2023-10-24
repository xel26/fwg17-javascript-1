let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}



// Task a :
let myData = {...data, hobby: "Coding"}
myData.name = "Shella Ananda"
myData.email = "shellaananda2636@gmail.com"
console.log(myData)



// Task b :
const {address : {street, city}} = data
console.log(street)
console.log(city)
