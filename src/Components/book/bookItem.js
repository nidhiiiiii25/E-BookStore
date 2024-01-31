import classes from "./bookItem.module.css";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import MealItemForm from "./bookItemForm";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹ ${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    console.log("Adding")
    cartCtx.addItem({
      id: props.id,
      image : props.img,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card sx={{ maxWidth: 250, margin: '10px', height: '400px',  }}>
          <CardMedia
            sx={{ height: 140 }}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
          <CardActions style={{ marginTop: 'auto', justifyContent: 'center' }}>
            <MealItemForm id={props.id} addItem={addItemToCart} />
          </CardActions>
        </Card>
      </div>
    </li>
  );
};

export default MealItem;
