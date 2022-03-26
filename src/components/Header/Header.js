import React from 'react';
import './Header.css'

const Header = () => {
    return (
       <div>
           <header className='header'>
                <div className='logo'>
                    <h3>Ali's Dine</h3>
                </div>
                <div className='menu-bar'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/oderReview">Oder Review</a>
                </div>
             </header>
             <div className='main-heading'>
                 <h1>Wellcome To Ali's Dine</h1>
             </div>
       </div>
    );
};

export default Header;