let users = [
    {
        firstName: "Nimra",
        lastName: "Azeem",
        age: 23,
        gender: "Female",
        lastOrderDate: "2023-01-01",
        totalOrder: 2
    },
    {
        firstName: "Saba",
        lastName: "Bashir",
        age: 23,
        gender: "Female",
        lastOrderDate: "2023-01-04",
        totalOrder: 11
    },
    {
        firstName: "Hira",
        lastName: "Naz",
        age: 24,
        gender: "Female",
        lastOrderDate: "2022-01-11",
        totalOrder: 5
    },
    {
        firstName: "Hira",
        lastName: "Faisal",
        age: 25,
        gender: "Female",
        lastOrderDate: "2023-04-01",
        totalOrder: 5
    },
    {
        firstName: "Shehroze",
        lastName: "Azeem",
        age: 20,
        gender: "Male",
        lastOrderDate: "2023-03-01",
        totalOrder: 6
    }, {
        firstName: "Farhan",
        lastName: "Azeem",
        age: 27,
        gender: "Male",
        lastOrderDate: "2023-05-01",
        totalOrder: 13
    }, {
        firstName: "Baria",
        lastName: "Nasir",
        age: 24,
        gender: "Female",
        lastOrderDate: "2022-01-01",
        totalOrder: 14
    }, {
        firstName: "Fatima",
        lastName: "Nasir",
        age: 29,
        gender: "Female",
        lastOrderDate: "2022-05-01",
        totalOrder: 26
    }, {
        firstName: "Ramsha",
        lastName: "Malik",
        age: 23,
        gender: "Female",
        lastOrderDate: "2023-06-01",
        totalOrder: 22
    }, {
        firstName: "Shanzay",
        lastName: "Gul",
        age: 23,
        gender: "Female",
        lastOrderDate: "2023-07-01",
        totalOrder: 5
    }
]

//Q1: add 1 to all ages
let addedAges = users.map(add1ToAges = (element) => {
    return element.age + 1;
})
console.log(addedAges);

//Q2 : returns array of all users with total order greater than a number
let filteredArrayFunction = (users, num) => {

    let filterCallback = (element) => {
        return (element.totalOrder > num ? true : false);
    }
    return users.filter(filterCallback)
}
let filteredUsers = filteredArrayFunction(users, 15);
console.log(filteredUsers);

//Q3: First user with orders greater than a given number
let findArrayFunction = (users, num) => {
    let findCallback = (element) => {
        return (element.totalOrder > num ? true : false);
    }
    return users.filter(findCallback);
}
let firstUserwithGreaterOrders = findArrayFunction(users, 25);
console.log(firstUserwithGreaterOrders);

//Q4: total orders of all users

let addOrders = (total, num) => {
    return total + num.totalOrder;
}
let TotalOrder = users.reduce(addOrders, 0);
console.log(TotalOrder);

//Q5: sort array by last Order date
console.log(users.sort((first, second) => {
    return Date.parse(first.lastOrderDate) - Date.parse(second.lastOrderDate);
}));

//Q6: sort array in descending order of totalorders
console.log(users.sort((first, second) => {
    return second.totalOrder - first.totalOrder;
}));
