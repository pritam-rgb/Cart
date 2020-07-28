import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';



class App extends React.Component{
  constructor(){
    super();
    this.state={
       products:[ 
        {
        item: 'Mobile Phone',
        price: 999,
        qty: 1,
        image: 'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 1
        },
        {
            item: 'Watch',
            price: 99,
            qty: 1,
            image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            id: 2
        },
        {
            item: 'Laptop',
            price: 999,
            qty: 1,
            image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            id: 3
        },
    ]
    }
    
}; 
        handleIncreaseQuantity = (product) =>{
          console.log("Checking the handler",product);
          const {products}= this.state;
          const index= products.indexOf(product);
          products[index].qty +=1;
          this.setState({
              products
          })
        };

        handleDecreaseQuantity = (product) =>{
          console.log('Checking decrease quantity function',product);
          const {products}= this.state;
          const index= products.indexOf(product);
          if(products[index].qty > 0){
              products[index].qty -=1;
          }else{
              window.alert('You have reached max limit')
              return
          }
          this.setState({
              products
          })

        };

        handlingDeleteQuantity = (id) => {
          console.log('Testing delete')
          const {products}= this.state;
          const items= products.filter((item) => item.id !== id);
          console.log(items)

          
          this.setState({
              products: items
          })

        }

        getCartCount = () => {
            const {products} = this.state;
            let count = 0;
          products.forEach((product) => {
              count +=product.qty;
            })
          return count;
        }

        getCartTotal = (product) => {
          const {products}= this.state;
          let Total= 0;
          products.map((product) => {
            Total = Total + product.qty*product.price;
          })
          return Total;
        }

  
  render(){  
    const {products}= this.state;
      return (
        <div className="App">
          < Navbar count={this.getCartCount()}/>
            <Cart 
            products={products}
            onClickIncrease={this.handleIncreaseQuantity}
            onClickDecrease={this.handleDecreaseQuantity}
            onClickDelete={this.handlingDeleteQuantity}
            />
          <div style={{paddingLeft : '20px', fontSize: '20px'}}>Total : {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
