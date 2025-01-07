import {useState} from 'react';
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from './components/Cart'
import CartItem from './types/CartItemInterface';



const App = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [cartList,  setCartList] = useState<Array<CartItem> | null>(null)

  return (
    <div className="mx-6 pb-7 md:mx-16 ">
      <div className='max-w-[1110px] mx-auto'>
        <Header items={cartList} setIsCartActive={setIsCartActive}/>
        {isCartActive ? <Cart cartList={cartList} setCartList={setCartList} setIsCartActive={setIsCartActive}/> : ''}
        <ProductCard setCartList={setCartList}/>
      </div>
    </div>
  )
}

export default App