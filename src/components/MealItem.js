const MealItem = (props) => {
    const { name, price, description, image } = props.meal;

    const formattedPrice = new Intl.NumberFormat("de-DE", {style: "currency",
        currency: "EUR"}).format(price)

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${image}`)} alt={name} />
                <h3>{name}</h3>
                <p className="meal-item-description">{description}</p>
                <p className="meal-item-price">{formattedPrice}</p>
                <div className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </li>       
    )
}

export default MealItem