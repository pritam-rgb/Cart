import React from 'react';
import { render } from '@testing-library/react';

const CartItem= (props) => {
   
    
       const{qty,price,item}= props.product;
       const {product,onClickIncrease,onClickDecrease,onClickDelete}= props;
          
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt='' style={styles.image} src={product.image}/>
                </div>
                <div className='right-block'>
                        <div style={{'color':'#777','fontSize': '25px'}}>Item: {item}</div>
                        <div style={{'color':'Black','fontSize': '25px'}}>Price: {price}</div>
                        <div style={{'color':'cyan','fontSize': '25px'}}>Qty: {qty}</div>
                <div className='cart-item-actions'>
                        
                        
                            {/* Buttons */}
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            src="https://as1.ftcdn.net/jpg/02/01/58/70/500_F_201587024_jEB8rsvrFtd0jwBF2A7oUnZ2KGYYddmC.jpg"
                            onClick={() =>  onClickIncrease(product)}
                        />
                        <img 
                            alt="decrease" 
                            className='action-icons' 
                            src="https://t4.ftcdn.net/jpg/03/30/24/99/240_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg"
                            onClick={() => onClickDecrease(product)}
                        />
                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                            onClick={() =>  onClickDelete(product.id)}
                        />
                        

                    </div>
                </div>


            </div>
        );
    
};

const styles = {
    image: { 
        height: 110,
        width: 110,
        borderRadius: 8,
        backgroundColor: '#777'
    }
};

export default CartItem;
