import { Link } from "react-router-dom";

const LinkComponent = (props) => {
  return (
    <Link to={"/category/" + props.id + "?page=1"} className="link">
      {props.name}
    </Link>
  );
};

export default LinkComponent;
