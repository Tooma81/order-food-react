import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from './store/CartContext'
import Modal from './UI/Modal'
import { useContext, useEffect, useState } from 'react'

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [cartAmount, setCartAmount] = useState(0)
    const [priceTotal, setPriceTotal] = useState(0.00)
    const cartCtx = useContext(CartContext);

    const handleCheckout = () => {
        cartCtx.clearMeals()
        setShowModal(false)
    }

    useEffect(() => {
       setCartAmount(cartCtx.items.reduce((sum, item) => sum + item.quantity, 0));
    }, [cartCtx.items]);

    useEffect(() => {
        setPriceTotal(cartCtx.items.reduce((sum, item) => 
        sum + item.quantity * parseFloat(item.price), 0));
    }, [cartCtx.items]);

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <img src={logo}/>
                    <h1>React Food Order App</h1>
                </div>
                <nav>
                    <Button textOnly onClick={() => setShowModal(true)}>
                        Cart ({cartAmount})
                    </Button>
                </nav>
            </header>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <h2>Your Cart</h2>
                {
                    cartCtx.items.map((item) => (
                        <p>{item.name} - {item.quantity}</p>
                    ))
                }
                <h2>{priceTotal} €</h2>
                <Button textOnly onClick={() => setShowModal(false)}>Close</Button>
                <Button onClick={handleCheckout}>Checkout</Button>
            </Modal>
        </>
    )
}

export default Header