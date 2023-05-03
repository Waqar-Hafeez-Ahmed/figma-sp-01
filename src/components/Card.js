import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div>
      {/* <div className={classes}>{props.children}</div> */}
      <div>
        <img className={classes} src={props.img} alt={props.title} />
      </div>
    </div>
  );
};
export default Card;
