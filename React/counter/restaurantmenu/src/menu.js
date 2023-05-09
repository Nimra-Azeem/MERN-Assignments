
import './App.css';
import { useState, useEffect, useRef } from "react";

let Menu = () => {
    let ItemsList = [
        { id: "Item1", name: "Pan Cake", addedToCart: true, quantity: 1, price: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10UE-Z0S2OElwdYfG1L5Z3jeT4hT-54CXcw&usqp=CAU", alt: "Pan Cake" },
        { id: "Item2", name: "Fajita Pizza", addedToCart: false, quantity: 1, price: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96Q37y-eJ2PvQIIHHnvXObZAX3sUQnXErvw&usqp=CAU", alt: "Fajita Pizza" },
        { id: "Item3", name: "Tower Burger", addedToCart: true, quantity: 1, price: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFPID36hwr8P7ie5nP2SywnLz_xFNgqWdeQ&usqp=CAU", alt: "Tower Burger" },
        { id: "Item4", name: "Alfredo Pasta", addedToCart: false, quantity: 1, price: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYa2bcDqSs-eLExqTJyJLkIA6WRLlSTFfdJg&usqp=CAU", alt: "Alfredo Paste" },
    ]
    const [cart, setCart] = useState([]);
    const cartTotal = useRef(0);
    const addToCart = (element) => {
        let updatedCart = [...cart];
        updatedCart.push(element);
        setCart(updatedCart);
    };

    const RemovefromCart = (RemovedObj) => {
        let DeletedCart = [...cart];
        let finde = (element, index) => {
            if (element.id == RemovedObj.id) {
                DeletedCart.splice(index, 1);
                setCart(DeletedCart);
                return true;
            }
            return false;
        }
        return DeletedCart.find(finde);
    }

    useEffect(() => {
        console.log("cart  ===> ", cart);
        let sum = 0;
        cartTotal.current = sum;
        cart.forEach(item=> {
            sum += item.price;
        });
          console.log("Total  ===> ", cartTotal.current);
          cartTotal.current = sum;
    }, [cart]);

    const images = ItemsList.map((element) => {
        return (
            <div>
                <div className="card-body mx-10 my-2">
                    <img className="card-img-top"
                        src={element.src} alt={element.alt} height="300" width="50" />
                    <span className="card-title">{element.name}</span>
                    <p className="card-text"><b>Price:</b> ${element.price}</p>
                    <button className="btn btn-primary" onClick={() => { addToCart(element) }}>Add to Cart</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={() => RemovefromCart(element)}>Remove from cart</button>
                </div>
            </div>
        )
    });
    const CartItems = ItemsList.map((element) => {
        if (element.addedToCart)
            return (
                <div>
                    <div className="card-body mx-10 my-2">
                        <ul>
                            <h3><li><span className="card-title">{element.id} : ${element.price} </span></li></h3>
                        </ul>
                    </div>
                </div>
            )
    });
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 text-secondary mx-5 my-5">
                    <h1>Fast Food Items</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-secondary ">
                    <div className="d-flex justify-content-around">
                        {images}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-secondary mx-5 my-5">
                    <h1>Your Cart {cartTotal.current}</h1>
                    {CartItems}
                </div>
            </div>
        </div>
    );
}
export default Menu;
