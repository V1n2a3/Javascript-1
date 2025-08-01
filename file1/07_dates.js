// Dates 

let mydate = new Date()
// console.log(mydate);

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let CreatedDate = new Date(2026 , 9, 6, 13, 45, 56)
let CreatedDate = new Date("2025-09-06")
// console.log(CreatedDate.toLocaleString());
// console.log(CreatedDate.toLocaleString());

// Months start from 0 in Javascript //
 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let AstralDate = new Date()
// console.log(AstralDate.getMonth());
// console.log(AstralDate.getDay());

AstralDate.toLocaleString('defualt', {
    weekday: 'long',
})

















