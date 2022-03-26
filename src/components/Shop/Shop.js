import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './Shop.css';

const Shop = () => {
    const [foods, setFoods] =useState([]);
    const [cart, setCarts] = useState([]);
    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[]);
    const handleAddToCart =(food)=>{
        // console.log(food);
        const newCart = [...cart, food];
        setCarts(newCart);
    }
    return (
        <section className='shop-container'>
        <div className="foods-container">
            {
                foods.map(food=> <Foods
                    key = {food.id}
                    food={food}
                    handleAddToCart ={handleAddToCart}
                ></Foods> )
            }
        </div>
        <div className="summary-container">
           
            <div className='cart-container'>
                <h2>Selected Items: </h2>
                {cart.map((item) => (
                    <p>{item.name}</p>
                 ))}
                <button >Choose 1 for Me</button>
                <button onClick={0} >Reload Again</button>
            </div>
            
          
        </div>
    </section>
    );
};

export default Shop;