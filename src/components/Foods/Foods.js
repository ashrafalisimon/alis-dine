import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Foods.css';

const Foods = (props) => {
    const {food, handleAddToCart} =  props;
    const {name,price, img, ratings} = food;
    return (
        <div className='card'>
           <div className="imgBox">
                <img src={img} alt="" />
            </div>
            <div className="contentBox">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Rating: {ratings} Star </p>
            </div>
            <button onClick={()=> handleAddToCart(food)} className='card-btn' > <span>Add to Card</span>  
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Foods;