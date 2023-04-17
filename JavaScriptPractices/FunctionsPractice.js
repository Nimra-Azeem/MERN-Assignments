let Array = [2, 3, 1, 4, 5];
//sorting array
console.log(Array.sort());
//array.map function to find square of array elements
let array2 = Array.map(FindSquare = (element) => {
    return element *= element;
})
console.log(array2);
//

//array.find function to find a word in array of words
let array3 = ["Nimra", "Ramsha", "Saba"];
let found = array3.find(search = (word)=>{
    return(array3 == word? true :false );
})
console.log(found);