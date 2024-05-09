// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)

console.log(null >0 )
console.log(null ==0 )
console.log(null >= 0 )

console.log(undefined >0 )
console.log(undefined == 0 )
console.log(undefined >= 0 )

// try to avoid these type of syntax
//for ==== (strict checking)
console.log("2" === 2);

//stack(primitive),heap(non-primitive)

let user1 = {
    email:"pooja@gmail.com",
    upi :"user@ybl"
}
let user2 = user1
user2.email="mangal@gmail.com"

console.log(user1.email)
console.log(user2.email)
