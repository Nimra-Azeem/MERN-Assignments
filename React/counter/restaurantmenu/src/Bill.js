import './App.css';
import { useState, useEffect, useRef } from "react";

let Bill = () => {
    let ItemsList = [
        { id: "Item1", name: "Pan Cake", addToBill: true, quantity: 1, price: 1 },
        { id: "Item2", name: "Tower Burger", addToBill: true, quantity: 1, price: 3 },
        { id: "Item3", name: "Alfredo Pasta", addToBill: false, quantity: 1, price: 4 }
    ]
    const [Bill, setBill] = useState([]);
    const [Orders, setOrders] = useState([]);
    const [totalBill, settotalBill] = useState(0);
    const [userCount, setuserCount] = useState(0);
    const [addToBill, setaddToBill] = useState("");

    const allItems = ItemsList.map((element) => {
        return (
            <li><input type="checkbox" id="addedToBill" onChange={(e) => { setaddToBill(e.target.value); }} /> {element.name}    ${element.price}</li>
        )
    });

    const TotalBill = Bill.map((element) => {
        if (element.addToBill)
            return (
                <li> {element.name}             ${element.price}</li>
            )
    });

    const TotalOrders = Orders.map((element) => {
        return (
            <li>User {userCount}       $ {element.bill}</li>
        )
    });
    const handleSubmit = (obj) => {
        obj.preventDefault();
        const output = (obj? "Name":"End")
       const newobj = {
        id : "item" + {userCount},
        name: obj.name,
        addToBill:obj,
        quantity:1,
        price:1
       }
       console.log("New Object ==>" ,{newobj});
    setuserCount(userCount+1);
    };
    // useEffect(() => {
    //     console.log("Added Item");

    // },addToBill)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Available items</h2>
                <ul><li> </li>{allItems}</ul>
                <input type="submit" value="Confirm Bill" />
            </form>
            <h2>Total Bill</h2>
            <ul><li> </li>{TotalBill}</ul>
            <h2>Total Orders</h2>
            <ul><li> </li>{TotalOrders}</ul>
        </div >
    );
}
export default Bill;
