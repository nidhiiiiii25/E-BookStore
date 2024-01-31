import classes from "./Availiblebook.module.css";
import Card from "../UI/Card";
import MealItem from "./bookItem";
import data from '../../data.json';
import VtuData from '../../vtudata.json';
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




const Availiblebook = (props) => {

  const [dataused , setdataused] = React.useState(data)
  return (
    <section className={classes.book}>
      
  <Tabs  aria-label="basic tabs example" style={{marginBottom : "10px" }}>
    <Tab label="Home"  onClick={() => setdataused(data)}  />
    <Tab label="VTU"  onClick={() => setdataused(VtuData)} />
  
  </Tabs>
      <Card>
        <div style={{display : "flex" , flexDirection : "row" , flexWrap : "wrap" , justifyContent: 'center', alignItems: 'center'}}>
          
          {dataused.map((book) => {
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
