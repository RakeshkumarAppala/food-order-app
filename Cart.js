import classes from './Cart.module.css'
import { Fragment} from 'react'
import CartItem from './CartItem'

const Cart = props => {
    const dummy = [{id:1,name:'Chicken',price:'500'},{id:1,name:'Chicken',price:'500'}]

    return (
        <Fragment>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
                <div>
                    {dummy.map((each) => (
                        <CartItem id={each.id} name={each.name} price={each.price} />
                    ))}
                </div>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>Rs.500</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['cart-btn-outline']}>Close</button>
                    <button className={classes['cart-btn']}>Order</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart