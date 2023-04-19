

var  object1={
    name:"Nimra",
    age:23
}
//function to duplicate object
const duplicate = (object)=>{
     var duplicateobj={}
     duplicateobj=object;
    return duplicateobj;
    console.log(object);
    console.log(duplicateobj);
}
duplicate(object1);
