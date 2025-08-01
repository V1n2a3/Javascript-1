const mysym = Symbol("key 1")

const Jsuser = {
    name: "Vinay",
    "full name": "Vinay Somani",
    [mysym]:"mykey1",
    age: 23,
    location: "Mumbai",
    email: "abcsder@gmail.com",
    isLoggedIn : false,
    lastLoginDay:["Tuesday","Friday"]
}

// console.log(Jsuser["email"]);
// console.log(Jsuser[mysym]);

Jsuser.email = "amncks@hgamil.com"
// Object.freeze(Jsuser)
Jsuser.email = "qwerty@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello gamer");
}

Jsuser.greetingOne = function(){
    console.log(`hello gamer, ${this.name}`);
    
}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingOne());

const TinderUser = {}

TinderUser.Id = "123455"
TinderUser.name = "Vinay"
TinderUser.isLoggedIn = false

// console.log(TinderUser);

const regularuser = {
    email:"vin@gmail.com",
    fullname:{
        username:{
            firstname: "Vinay",
            lastname: "Somani"
        }
    }    

}

// console.log(regularuser.fullname.username);

const obj1 = {1:"a", b :"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);






