import classes from "./Availiblebook.module.css";
import Card from "../UI/Card";
import MealItem from "./bookItem";
import data from '../../data.json'



const Availiblebook = (props) => {
  return (
    <section className={classes.book}>
      <Card>
        <div style={{display : "flex" , flexDirection : "row" , flexWrap : "wrap" , justifyContent: 'center', alignItems: 'center'}}>
          {data.map((book) => {
            return (
              <MealItem
                image = {book.image}
                name={book.name}
                price={book.price}
                description={book.description}
                key={book.id}
                id={book.id}
              />
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default Availiblebook;
