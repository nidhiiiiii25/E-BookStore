import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";
import mainImage from '../../Assests/Bookshop.gif'

const Header = (props) => {
  const buttonclicked = (data) => {
    props.openCart(data);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>E-Books</h1>
        <HeaderCardButton clicked={buttonclicked} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mainImage}
          alt="food"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
