let _ = require('lodash');
let array = [1, 2, 3, 4];
let a = 3;
let array2 = [2,3]

//_.chunk function
let splitedarray = '';
splitedarray = _.chunk(array, 2);       //dividing into chunks of 2
console.log("Splitted Array Chunks ==>", splitedarray);          
//creating new server and then using chunk

let server = require('lodash');
let splitedArray = server.chunk(array2, 3);

//concat function
let concatenatedArray = _.concat(array,a, array2);
console.log("Concatenated Arrays ==>", concatenatedArray);

//difference function
let DifferencedArray = _.difference(array, array2);
console.log("Difference between Arrays ==>", DifferencedArray);

//findindex
var users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
 ];
 
 var result = _.findIndex(users, function(user) { return user.active; });
 console.log(result);
 result = _.findIndex(users, ['active', true]);
 console.log(result);
