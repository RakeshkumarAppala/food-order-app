import classes from './CartBtn.module.css'
import CartIcon from '../Cart/CartIcon'
import Cart from '../Cart/Cart'

const CartBtn = () => {
    return (
        <button className={classes['cart-btn']}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default CartBtn