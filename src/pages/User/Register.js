import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDoorLockFill } from "react-icons/ri";
import Form from "../../components/Form";
import "./css/sign.css";
import background from "../../asset/images/HomePageBackground.jpg";
import { useRegisterMutation } from "../../store/AuthApiSlice";
import { useNavigate } from "react-router";

const Register = () => {
  const initial = {
    userName: "",
    email: "",
    password: "",
  };
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState(initial);
  const [register] = useRegisterMutation();
  const nav = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerData);
    register(registerData)
      .unwrap()
      .then(() => {
        nav("/login");
      })
      .catch((err) => {
        setError(err.data.errors);
        console.log(error);
      });
  };
  const Register = [
    {
      type: "username",
      label: <FaUserLarge />,
      inputHandler: function inputHandler(e) {
        setRegisterData({ ...registerData, userName: e.target.value });
      },
      value: registerData.userName,
    },
    {
      type: "email",
      label: <MdEmail />,
      inputHandler: function inputHandler(e) {
        setRegisterData({ ...registerData, email: e.target.value });
      },
      value: registerData.email,
    },
    {
      type: "password",
      label: <RiDoorLockFill />,
      inputHandler: function inputHandler(e) {
        setRegisterData({ ...registerData, password: e.target.value });
      },
      value: registerData.password,
    },
  ];
  return (
    <div className="Sign" style={{ backgroundImage: `url(${background})` }}>
      <Form
        submitHandler={submitHandler}
        info={Register}
        link="/login"
        error={error}
        linkTitle="Do you have an account?"
      />
    </div>
  );
};

export default Register;
