import React from 'react';
import { render } from '@testing-library/react';

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div>Item</div>
                    <div>999</div>
                    <div>Qty: 1</div>
                    <div className='cart-item-actions'>
                        
                        <div className='action-icons'>
                            {/* Buttons */}
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

const styles = {
    image: { 
        height: 110,
        width: 110,
        borderRadius: 8
    }
}

export default CartItem;
