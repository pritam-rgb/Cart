import React from 'react';
import { render } from '@testing-library/react';

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt='product' style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{'color':'#777','font-size': '25px'}}>Item: xyz</div>
                    <div style={{'color':'Black','font-size': '25px'}}>Price: 999</div>
                    <div style={{'color':'cyan','font-size': '25px'}}>Qty: 1</div>
                    <div className='cart-item-actions'>
                        
                        <div style={{'display': 'inline-flex'}}className='action-icons'>
                            {/* Buttons */}
                            <div><img alt="increase" className='action-icons' src="https://as1.ftcdn.net/jpg/02/01/58/70/500_F_201587024_jEB8rsvrFtd0jwBF2A7oUnZ2KGYYddmC.jpg"/></div>
                            <div><img alt="decrease" className='action-icons' src="https://t4.ftcdn.net/jpg/03/30/24/99/240_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg"/></div>
                            <div><img alt="delete" className='action-icons' src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/></div>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
};

const styles = {
    image: { 
        height: 110,
        width: 110,
        borderRadius: 8
    }
}

export default CartItem;
