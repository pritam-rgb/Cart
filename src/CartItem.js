import React from 'react';
import { render } from '@testing-library/react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            item: 'Mobile Phone',
            price: 999,
            qty: 1,
            image: ''
        }
        
    };

    increaseQuantity= () => {
        // Form- of declaring setState


        // this.setState({
        //     qty: this.state.qty +1,
        //     price: this.state.price +999
        // })

        //Form-II of declaring setState

        this.setState((prevState) =>{
            return  {
                    
                qty: prevState.qty +1,
                price: prevState.price +999

                }
            
        });
        
    }

    decreaseQuantity= () => {
        
        this.setState((prevState) =>{
            if(prevState.qty){
            return  {
                    
                qty: prevState.qty -1,
                price: prevState.price -999

                }
            }else{
                window.alert('You have reached max limit');
            }
            
        });
        
    }
    render(){
       const{item,price,qty,image}= this.state;
          
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt='' style={styles.image}/>
                </div>
                <div className='right-block'>
                        <div style={{'color':'#777','font-size': '25px'}}>Item: {item}</div>
                        <div style={{'color':'Black','font-size': '25px'}}>Price: {price}</div>
                        <div style={{'color':'cyan','font-size': '25px'}}>Qty: {qty}</div>
                <div className='cart-item-actions'>
                        
                        
                            {/* Buttons */}
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            src="https://as1.ftcdn.net/jpg/02/01/58/70/500_F_201587024_jEB8rsvrFtd0jwBF2A7oUnZ2KGYYddmC.jpg"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className='action-icons' 
                            src="https://t4.ftcdn.net/jpg/03/30/24/99/240_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className='action-icons' 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                            
                        />
                        

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
        borderRadius: 8,
        backgroundColor: '#777'
    }
};

export default CartItem;
