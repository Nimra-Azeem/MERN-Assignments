/*
//Duplicating all object parameters (hard coding)
let Object={
    name:"Nimra",
    age:23,
    gender: "Female"
}
const duplicateUser = (user) =>{
     var duplicate = user;
   console.log(duplicate);
}
duplicateUser(Object);
*/
//Duplicating all object parameters using loop
let Object3 = {
    name: "Nimra",
    age: 23,
    gender: "Female"
}
let Duplicate3 = {};
for (let key in Object3) {
  Duplicate3[key] = Object3[key];
    console.log(Duplicate3[key]);
}
/*
//Dupicating object using spread
let Object2={
    name:"Nimra",
    age:23,
    gender: "Female"
}
let Duplicate2 = {...Object2};
console.log(Duplicate2);
*/
