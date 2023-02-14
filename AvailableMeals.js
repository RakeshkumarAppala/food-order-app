import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const meals_list = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    return (
        <div className={classes['available-meals-card']}>
            {meals_list.map((meal_item) => (
                <MealItem key={meal_item.id} id={meal_item.id} name={meal_item.name} description={meal_item.description} price={meal_item.price} />
            ))}
        </div>
    )
}

export default AvailableMeals