const myarr = [0,1,2,3,4,5]
const myheroes =["arman","rohit"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myarr[1]);
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
//where start and end represent the index of items in that array. The original array will not be modified.
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);
//The splice() method of Array instances changes the contents of an array by 
// replacing existing elements and/or adding new elements in place

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);