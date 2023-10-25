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
let newData = {
    ...data,
    name: "Shella Ananda",
    email: "shellaananda2636@gmail.com",
    hobby: "Coding",
}

console.log(data)
console.log(newData)



// Task b :
const {address: {street, city}} = newData
console.log(street)
console.log(city)