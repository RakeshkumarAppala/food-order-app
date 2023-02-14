import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const {id} = props;
    return (
        <div className={classes['item-input-card']}>
            <div>
                <label for={id} className={classes['input-label']} >Quantity</label>
                <input type="number" id={id} className={classes['input-text']} min='1' defaultValue={1} />
            </div>
            <button className={classes['input-btn']}>Add</button>
        </div>
    )
}

export default MealItemForm;