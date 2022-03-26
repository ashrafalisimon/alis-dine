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
        //  console.log(food);
        let newCart = [];
        const exists = cart.find(product => product.id === food.id);
        if(!exists){
            food.item = 1;
            newCart = [...cart, food];
        }
        else{
            const rest = cart.filter(product => product.id !== food.id);
            exists.item = exists.item + 1;
            newCart = [...rest, exists];
        }
        setCarts(newCart);
    }
    return (
        <section className='shop-container'>
        <div className="foods-container">
            {
                foods.map(food=> <Foods
                    key={food.id}
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
                <button>Reload Again</button>
            </div>
            
          
        </div>
    </section>
    );
};

export default Shop;