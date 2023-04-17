let users = [
    { 
        firstName: "Nimra",
        lastName: "Azeem",
        age: 23,
        gender: "Female",
        lastOrderDate : "01/01/2023",
        totalOrder: 2
    },
    { 
        firstName: "Saba",
        lastName: "Bashir",
        age: 23,
        gender: "Female",
        lastOrderDate : "02/01/2023",
        totalOrder: 11
    },
    { 
        firstName: "Hira",
        lastName: "Naz",
        age: 24,
        gender: "Female",
        lastOrderDate : "05/01/2023",
        totalOrder: 5
    },
    { 
        firstName: "Hira",
        lastName: "Faisal",
        age: 25,
        gender: "Female",
        lastOrderDate : "11/01/2023",
        totalOrder: 5
    },
    { 
        firstName: "Shehroze",
        lastName: "Azeem",
        age: 20,
        gender: "Male",
        lastOrderDate : "22/01/2023",
        totalOrder: 6
    },{ 
        firstName: "Farhan",
        lastName: "Azeem",
        age: 27,
        gender: "Male",
        lastOrderDate : "29/01/2023",
        totalOrder: 13
    }, { 
        firstName: "Baria",
        lastName: "Nasir",
        age: 24,
        gender: "Female",
        lastOrderDate : "29/08/2022",
        totalOrder: 14
    },{ 
        firstName: "Fatima",
        lastName: "Nasir",
        age: 29,
        gender: "Female",
        lastOrderDate : "29/04/2022",
        totalOrder: 22
    },{ 
        firstName: "Ramsha",
        lastName: "Malik",
        age: 23,
        gender: "Female",
        lastOrderDate : "29/12/2022",
        totalOrder: 22
    },{ 
        firstName: "Shanzay",
        lastName: "Gul",
        age: 23,
        gender: "Female",
        lastOrderDate : "29/09/2022",
        totalOrder: 5
    }
]
//Q1: add 1 to all ages
let addedAges = users.map(add1ToAges = (element)=>{
return element.age + 1;
})
console.log(addedAges);

