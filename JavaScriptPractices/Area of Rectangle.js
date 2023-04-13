const prompt = require("prompt-sync")();
//to find area of triangle by taking length and width
do{var result;
const  length = parseFloat(prompt('Enter length: '));
const  width = parseFloat(prompt('Enter width: '));
let area = (length,width)=> {
    result = length * width;
    console.log(result);
}
area(length, width);
var repeat =  prompt('Do you want to calculate area for another rectangle? Y/N ');}
while(repeat != 'N')