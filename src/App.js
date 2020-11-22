import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import * as firebase from 'firebase';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[],
      loading : true
    }
    
}; 

      // componentDidMount(){
      //   firebase
      //     .firestore()
      //     .collection('products')
      //     .get()
      //     .then((snapshot) => {
      //       console.log(snapshot );

      //       snapshot.docs.map((doc) => {
      //         console.log(doc.data())
      //       });
      //       const products= snapshot.docs.map((doc) => {
      //         const data = doc.data();
      //         data['id'] = doc.id;
      //         return data;
      //       });

      //       this.setState({
      //         products,
      //         loading :false
      //       })
      //     })
      // }

      componentDidMount(){
        firebase
          .firestore()
          .collection('products')
          .onSnapshot((snapshot) => {
            console.log(snapshot );

            snapshot.docs.map((doc) => {
              console.log(doc.data());
            });
            const products= snapshot.docs.map((doc) => {
              const data = doc.data();
              data['id'] = doc.id;
              return data;
            });

            this.setState({
              products,
              loading :false
            })
          })
      }
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
    const {products,loading}= this.state;
      return (
        <div className="App">
          < Navbar count={this.getCartCount()}/>
            <Cart 
            products={products}
            onClickIncrease={this.handleIncreaseQuantity}
            onClickDecrease={this.handleDecreaseQuantity}
            onClickDelete={this.handlingDeleteQuantity}
            />
            {loading && <h1>Loading Products...</h1>}
          <div style={{paddingLeft : '20px', fontSize: '20px'}}>Total : {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
