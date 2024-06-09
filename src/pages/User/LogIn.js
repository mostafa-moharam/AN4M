import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import "./css/sign.css";
import background from "../../asset/images/HomePageBackground.jpg";
import Form from "../../components/Form";
import { useLoginMutation } from "../../store/AuthApiSlice";
import Cookies from "js-cookie";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const LogIn = () => {
  const initial = {
    email: "",
    password: "",
  };
  const nav = useNavigate();
  const [loginData, setLoginData] = useState(initial);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    login(loginData)
      .unwrap()
      .then((data) => {
        if (!isLoading) {
          const token = data?.token;
          if (token) {
            Cookies.set("token", String(token));
            dispatch(setAuth());
            setLoginData(initial);
            nav("/");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const info = [
    {
      type: "email",
      label: <MdEmail />,
      inputHandler: function inputHandler(e) {
        setLoginData({ ...loginData, email: e.target.value });
        console.log(e.target.value);
      },
      value: loginData.email,
    },
    {
      type: "password",
      label: <RiDoorLockFill />,
      inputHandler: function inputHandler(e) {
        setLoginData({ ...loginData, password: e.target.value });
        console.log(e.target.value);
      },
      value: loginData.password,
    },
  ];

  return (
    <div className="Sign" style={{ backgroundImage: `url(${background})` }}>
      <Form
        submitHandler={submitHandler}
        info={info}
        link="/register"
        linkTitle="Create an account"
      />
    </div>
  );
};

export default LogIn;
