import React from 'react';
import { render } from '@testing-library/react';
import CartItem from './CartItem';


const Cart = (props) => {
 
        const {products}= props;
        return(
            <div className='cartItems'>
                {products.map((items) => {
                 return(  
                < CartItem
                    product={items} 
                    onClickIncrease={props.onClickIncrease}
                    onClickDecrease={props.onClickDecrease}
                    onClickDelete={props.onClickDelete}
                    key={items.id}
                />
                 )
            })}
                
             

            </div>
        )
    
};

export default Cart;
