import {useState } from 'react'
import Header from './Components/Layout/Header'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider'
import Book from './Components/book/book'


function App() {

  const [isCartShown , setisCartShown] = useState(false)

  const cartOpeningHandler = (data) => {
      setisCartShown(data)
  }

  const cartClosingHandler = data => {
    setisCartShown(data)
  }



  return (
    <CartProvider>
     {isCartShown ? <Cart closeCart = {cartClosingHandler}/> : null}
     <Header openCart = {cartOpeningHandler} />
     <Book/>
    </CartProvider>
  );
}

export default App;
