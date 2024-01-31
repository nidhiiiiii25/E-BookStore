import classes from "./bookItemForm.module.css";

const BookItemForm = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();

    props.addItem(1);
  };

  return (
    <form className={classes.form} >
      <button id={props.id} onClick={submitHandler} style={{backgroundColor : "#e74c3c" }}>
        Add
      </button>
    </form>
  );
};

export default BookItemForm;
