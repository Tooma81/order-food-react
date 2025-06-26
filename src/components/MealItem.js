import { useContext } from 'react'
import CartContext from './store/CartContext'
import Button from './UI/Button'

const MealItem = (props) => {
    const { id, name, price, description, image } = props.meal;

    const cart = useContext(CartContext);

    const formattedPrice = new Intl.NumberFormat("de-DE", {style: "currency",
        currency: "EUR"}).format(price)

    const handleAddToCart = () => {
        cart.addMeal({
            id,
            name,
            price,
            description,
            image
        });
        console.log('Added to cart:', name);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${image}`)} alt={name} />
                <h3>{name}</h3>
                <p className="meal-item-description">{description}</p>
                <p className="meal-item-price">{formattedPrice}</p>
                <div className="meal-item-actions">
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </div>
            </article>
        </li>       
    )
}

export default MealItem