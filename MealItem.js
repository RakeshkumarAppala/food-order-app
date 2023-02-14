import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const {id, name, description, price} = props;
    return (
        <div className={classes['meal-item-card']}>
            <div>
                <h3 className={classes['item-name']}>{name}</h3>
                <p className={classes['item-desc']}>{description}</p>
                <h3 className={classes['item-amt']}>{`Rs.${price}`}</h3>
            </div>
            <MealItemForm id={id}/>
        </div>
    )
}

export default MealItem;