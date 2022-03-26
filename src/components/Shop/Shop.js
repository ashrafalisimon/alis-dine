import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './Shop.css';

const Shop = () => {
    const [foods, setFoods] =useState([]);
    // const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[]);
    // const handleAddToCart =(product)=>{
    //     // console.log(product);
    //     const newCart = [...cart, product];
    //     setCart(newCart);
    //     addToDb(product.id);
    // }
    return (
        <section className='shop-container'>
        <div className="foods-container">
            {
                // foods.map(food=> <Foods 
                //     key={product.id}
                //     product={product}
                //     handleAddToCart ={handleAddToCart}
                //     ></Foods>)
                foods.map(food=> <Foods
                    key = {food.id}
                    food={food}
                ></Foods> )
            }
        </div>
        <div className="summary-container">
            {/* <Cart cart={cart}></Cart> */}
        </div>
    </section>
    );
};

export default Shop;