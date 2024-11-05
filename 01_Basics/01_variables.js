const accountId = 112233
let accountEmail = "kingo@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 263748  // not allowed
accountEmail = "sajib@gmail.com"
accountPassword = "54321"
accountCity = "Jessore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])