const accountId = 14452
let accountEmail = "somanivinay717@gmail.com"
var accountPassword = "98761523"
accountCity = "Mumbai"

let accountState;

// accountId = 123 // not allowed

accountEmail = "abcd@gmail.com"
accountPassword = "habibigo"
accountCity = "Delhi"

/*Prefer not use "var" because it causes issues in block scope and functional scope */

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
