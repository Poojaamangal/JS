const accountid = 14453
let account_email= "poojamangal110@gmail.com"
var account_pass = "12345"
account_city = "jaipur"
/* prefer not use var because of issue in block scope and functional cope
*/
account_email = "poojamangal03@gmail.com"
account_pass ="pooja@09"
account_city="bhopal"
console.log(accountid)
console.table([accountid,account_email,account_pass,account_city])