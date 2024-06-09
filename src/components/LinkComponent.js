import { Link } from "react-router-dom";

const LinkComponent = (props) => {
  return (
    <Link to={"/category/" + props.id + "?page=1"} className="link">
      {props.name}
    </Link>
  );
  //   return (
  //     <li>
  //       <button
  //         to={id}
  //         className="toggler"
  //         style={{
  //           cursor: "pointer",
  //           borderLeft: active ? "3px solid #242831" : "3px solid transparent",
  //         }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           setActive((prev) => !prev);
  //         }}
  //       >
  //         <div>{name}</div>
  //         <FaChevronDown
  //           style={{
  //             transform: active ? "rotate(180deg)" : "rotate(0deg)",
  //           }}
  //           className="arrow"
  //         />
  //       </button>
  //       <ul
  //         style={{
  //           height: active ? "auto" : 0,
  //           transformOrigin: "top",
  //         }}
  //         className="subList"
  //       >
  //         {children.map((child) => (
  //           <LinkComponent key={child.id} link={child} />
  //         ))}
  //       </ul>
  //     </li>
  //   );
};

export default LinkComponent;
