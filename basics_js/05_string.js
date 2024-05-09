const name="pooja"
const Class = "B.Tech"
console.log(`my name is ${name} student of  ${Class}`);


const gamename = new String("poojadb")
console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())

const newstr = gamename.substring(0,4)
console.log(newstr)

const newr = gamename.slice(-5,4)
console.log(newr)

//trim is used for removing whitespace


const newn = "     mangal  "
console.log(newn)
console.log(newn.trim())

const url = "https://linktr.ee/poojamangal03"
console.log(url.replace('.ee','se'))
