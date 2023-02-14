import classes from './CartItem.module.css'

const CartItem = props => {
    return (
        <div className={classes['cart-item']}>
            <div>
                <h2 className={classes['counter-btn']}>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{`Rs.${props.price}`}</span>
                    <span className={classes.amount}>x 1</span>
                </div>
            </div>
            <div>
                <button className={classes['counter-btn']}>+</button>
                <button className={classes['counter-btn']}>-</button>
            </div>
        </div>
    )
}

export default CartItem