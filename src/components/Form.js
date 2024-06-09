import "./css/form.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
const Form = (props) => {
  return (
    <div className="signPage">
      {props.error ? (
        <div className="alert">
          {props.error.UserName ? (
            <Alert severity="error" className="mb-2">
              {props.error.UserName}
            </Alert>
          ) : null}
          {props.error.Email ? (
            <Alert severity="error" className="mb-2">
              {props.error.Email}
            </Alert>
          ) : null}
          {props.error.Password ? (
            <Alert severity="error" className="mb-2">
              {props.error.Password}
            </Alert>
          ) : null}
        </div>
      ) : null}
      <form className={props.className} onSubmit={props.submitHandler}>
        {props.info.map((l, idx) => (
          <div key={idx} className="loginField">
            <label>{l.label}</label>
            <input
              placeholder={l.type}
              type={l.type}
              onChange={(e) => l.inputHandler(e)}
              name={l.type}
              value={l.value}
            />
          </div>
        ))}
        <div className="submit">
          <button type="submit">submit</button>
        </div>
        {props.linkTitle && props.link ? (
          <Link className="formLink" to={props.link}>
            {props.linkTitle}
          </Link>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
