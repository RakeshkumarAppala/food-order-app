import classes from './Header.module.css'
import React from 'react'
import mealsImage from '../../Assets/meals.jpg'
import CartBtn from './CartBtn'

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes['header-card']}>
                <h1>ReactMeals</h1>
                <CartBtn />
            </header>
            <div className={classes['main-img']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </React.Fragment>
    )
}

export default Header