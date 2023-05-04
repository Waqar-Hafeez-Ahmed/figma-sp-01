import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div>
      <div>
        {props.children}
        <img className={classes} src={props.img} alt={props.title} />
      </div>
    </div>
  );
};
export default Card;
