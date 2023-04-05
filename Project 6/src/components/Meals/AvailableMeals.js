import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';



let DUMMY_MEALS = [
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
  const [meallist,setMealList]=useState([])
  const meal_list = (arr) => {
    setMealList(arr)
  }
  useEffect(() => {
    const meals=async () => {
  
      const response = await fetch('https://reactprojects-2f555-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
      const data = await response.json()
      const l = Array()
      console.log(data)
      for (let i in data) {
        l.push(data[i])
      }
      meal_list(l)
      
    }
   meals()

  },[])
  
  // const meallistDisplay=meallist.map((meal)=>{console.log(meal)})
  const mealsList =meallist.map((meal) => (
    
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />

  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
