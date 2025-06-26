import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from './store/CartContext'
import { useContext, useEffect, useState } from 'react'

const Header = () => {
    const [cartAmount, setCartAmount] = useState(0)
    const cartCtx = useContext(CartContext);

    useEffect(() => {
       setCartAmount(cartCtx.items.length);
    }, [cartCtx.items]);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly>Cart ({cartAmount})</Button>
            </nav>
        </header>
    )
}

export default Header