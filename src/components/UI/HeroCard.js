import "../Style/HeroCard.css";

const Card = (props) => {
  const classes = "hcard " + props.className;
  return (
    <div>
      {props.children}
      <img className={classes} src={props.img} alt={props.title} />
    </div>
  );
};
export default Card;
