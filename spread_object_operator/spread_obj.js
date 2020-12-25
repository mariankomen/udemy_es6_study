let obj_1 = {
    host: "localhost",
    port: 3301,
    user: "admin"
}

let obj_2 = {
    user: "roman",
    password: "11223344"
}
let db = 'firebase';
let role = 'user';
// let res = Object.assign({}, obj_1, obj_2)
let obj_3 = {role,
    ...obj_1,
    ...obj_2,
    db,
    func(){
    console.log("Hello")
    }
}

console.log(obj_3);

