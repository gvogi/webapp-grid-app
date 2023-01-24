const numbers = [45, 2, 56, 15]
numbers.forEach(function (x) {
    console.log(x)
})

const data = [
    { username: "admin", name: "admin", surname: "xxxx" },
    { username: "user1", name: "name1", surname: "surname1", email: "user1mail" },
    { username: "user2", name: "name2", surname: "surname2" }
]

data.forEach(function (val) {
    console.log(val.username, val.name);
})
