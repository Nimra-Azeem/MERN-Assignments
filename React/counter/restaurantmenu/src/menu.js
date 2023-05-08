
import './App.css';
import { useState, useEffect, useRef } from "react";

let Menu = () => {
    let ItemsList = [
        { id: "Item1", name: "Pan Cake", addedToCart: true, quantity: 1, price: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10UE-Z0S2OElwdYfG1L5Z3jeT4hT-54CXcw&usqp=CAU", alt: "Pan Cake" },
        { id: "Item2", name: "Fajita Pizza", addedToCart: false, quantity: 1, price: 2, src: "data:image/jpeg;base64,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", alt: "Fajita Pizza" },
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
