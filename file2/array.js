//  ARRAYS //

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["IronMan", "Spiderman","Hulk", "Thor"]
const myArray2 = new Array(1, 2, 3, 4)

// console.log(myHeroes[0]);

// Array methods //

myHeroes.push("CaptainAmerica")
myArray2.push(6, 7, 8)
myHeroes.pop()

// myArray2.unshift(15)
myArray2.shift()
// console.log(myArray2.includes(10));
// console.log(myArray2.indexOf(4));

const myArr3 = myArr.join()
// console.log(myArr3);
// console.log(typeof (myArr3));

// console.log("A", myArray2);

const Array4 = myArray2.slice(1,4)
// console.log(Array4);
// console.log("B", myArray2);


const Array5 = myArray2.splice(1,4)
// console.log(Array5);
// console.log("C", myArray2);
// console.log(Array5);


const marvel_heroes = ["Spiderman", "IronMan", "CaptainAmerica", "Thor"]
const DC_heroes = ["Superman", "FLash", "Batman", "Aquaman"]

// marvel_heroes.push(DC_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]);

const allHeroes = marvel_heroes.concat(DC_heroes)
// console.log(allHeroes);

const newHeroes = [...marvel_heroes, ...DC_heroes]
// console.log(newHeroes);

const newArrays = [1, 2, 3,[4, 5, 6], 7, 8, 9,[1, 2,[4, 5, 9]]]
const array8 = newArrays.flat(Infinity)

// console.log(array8);

// console.log(Array.isArray("Vinay"));
// console.log(Array.from("Vinay"));

let score1 = 150
let score2 = 239
let score3 = 567

console.log(Array.of(score1, score2, score3));







 



