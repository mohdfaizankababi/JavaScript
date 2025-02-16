const accountId = 14453
let accountEmail = "faizan@google.com"
var accountPassword ="12345"
let accountState = "Kashmire"

// accountId= 21644 // not allowed

// console.log(accountId);

accountEmail = "faizan@gmail.com" 
accountPassword = "32323232"
accountState = "Jammu and kashmire"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountState])
