
import './App.css';
import { useState, useEffect, useRef } from "react";

let Cards = () => {
    let ItemsList = [
        { id: "womens' bags", instock: true , quantity : 1, price: 5, src: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2034456/2023/1/3/d6db5d7f-1276-48a1-aaae-320295b5cece1672747669801-DressBerry-Blue-Solid-Shoulder-Bag-6691672747669374-1.jpg", alt: "Women Bag" },
        { id: "Mens' Wallets", instock: true,quantity : 1,  price: 1, src: "https://cdn.shopify.com/s/files/1/1124/8462/products/Judas-Mens-Wallet-Darkgrey-JULKE_256x@3x.jpg?v=1622880871", alt: "Mens' Wallet" },
        { id: "School bags",  instock: true,quantity : 1, price: 3, src: "https://static-01.daraz.pk/p/cc90f9ef7d7db29e48a0a1d2ac2a0051.jpg", alt: "School Bag" },
        { id: "Suitcases",  instock: false, quantity : 1, price: 10, src: "https://alburhanluggage.com/wp-content/uploads/2022/11/hardsides-luggage-bag-dark-grey-3-1000x1000.jpeg", alt: "Suitcase" }
    ]
    const [cart, setCart] = useState([]);
    const cartTotal = useRef(0);
    const addToCart = (elementID) => {
        let ItemsListCopy = [...ItemsList];
        let newlist = ItemsListCopy.filter((cartItem) => cartItem.id == elementID);
        console.log(newlist)
        console.log(ItemsList)
        let updatedCart = [...cart];
        updatedCart.push(...newlist)
        setCart(updatedCart);
    };

    const RemovefromCart = (cart, elementID) => {
        let DeletedCart = [...cart];
        let finde = (element, index) => {
            if (element.id == elementID) {
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
        let lastElement = cart[cart.length - 1];
        if (lastElement)
            cartTotal.current = cartTotal.current + lastElement.price;
    }, [cart]);


    const images = ItemsList.map((element) => {
        if(element.instock)
        return (
            <div>
                <div className="card-body mx-10 my-2">
                    <img className="card-img-top"
                        src={element.src} alt={element.alt} height="300" width="50" />
                    <button className="btn btn-primary" onClick={()=>{addToCart(element.id)}}>+</button>
                    <span className="card-title">{element.id}</span>
                    < span className="card-text">{element.price}</span>
                    <button className="btn btn-primary mx-2 my-2" onClick={()=>RemovefromCart(cart,element.id)}>-</button>
                </div>
            </div>
        )
    });
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 text-secondary mx-5 my-5">
                    <h1>Bags & Wallets</h1>
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
                    <h1>Total bill: {cartTotal.current}</h1>
                </div>
            </div>
        </div>
    );
}
export default Cards;
