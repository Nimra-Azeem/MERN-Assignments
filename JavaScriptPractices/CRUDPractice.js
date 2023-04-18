let shirts = [
    {
        id: 1,
        size: "Medium",
        color: "red",
        price: 1000,
        fabric: "cotton"
    },
    {
        id: 2,
        size: "large",
        color: "yellow",
        price: 1800,
        fabric: "cotton"
    },
    {
        id: 3,
        size: "small",
        color: "blue",
        price: 2200,
        fabric: "Jeans"
    }
]

//to create new object
let newShirt = {
        id: 4,
        size: "small",
        color: "black",
        price: 1200,
        fabric: "cotton"
}
let creatObj = (newItem) =>{
    shirts.push(newItem);
}
creatObj(newShirt);
//Read an object based on id
const readObject = (shirts, SearchId) =>{
    const CallBackFunction = (array)=>{
        return (array.id == SearchId? true:false)
        }
        return shirts.find(CallBackFunction);
}
console.log(readObject(shirts, 3));

//Update an object based on id
let changeShirt = {
    price: 1900,
    fabric: "cotton"
}
const updateObject = (SearchId, object) => {
    const getObject = (shirts, SearchId) =>{
        const CallBackFunction = (array)=>{
            return (array.id == SearchId? true:false)
            }
            return shirts.find(CallBackFunction);
}
let foundIndex = getObject(shirts,SearchId);
let UpdatedObject = {
    ...(foundIndex),
    ...changeShirt
}
console.log("Before Update",foundIndex);
foundIndex = UpdatedObject;
console.log("After Update",foundIndex);
}
updateObject(3,changeShirt);

//Delete Object Function
const deleteObject = (deleteIndex) => {
    const SearchObj = (shirts, deleteIndex) => {
        const CallBackFunction = (array) => {
            if (array.id == deleteIndex) {
                shirts.splice(foundObject, 1);
                return true;
            }
            return false;
        }
    }
}
deleteObject(3);
console.log(shirts);