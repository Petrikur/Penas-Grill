import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to Pena's Grill!</h2>
      <p>
        Pick your favourite meal from our wide selection of available meals
        and enjoy a delicious lunch at restaurant or home!
      </p>
      <p>
        All our meals are cooked with high-quality ingredients and
         by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
