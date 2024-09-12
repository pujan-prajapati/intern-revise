import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const default_state = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  let [data, setData] = useState(default_state);
  let [err, setErr] = useState(default_state);
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // let is_logged_in = true;
    // let role = "admin";
    // if (is_logged_in) {
    //   navigate("/" + role);
    // }
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    }); // aschcronous ho
    validateField(name, value); // first call hunxa
  };

  const validateField = (field, val) => {
    let errMsg = "";
    switch (field) {
      case "email":
        errMsg = val ? "" : "Email is required";
        break;
      case "password":
        errMsg = val
          ? val.length < 6
            ? "Password must be at least 6 characters"
            : ""
          : "Password is required";
        break;
    }
    setErr({
      ...err,
      [field]: errMsg,
    });

    console.log(err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email : ", data.email);
    console.log("Password : ", data.password);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email : </label>
        <input type="email" name="email" onChange={handleChange} />
        <p>{err?.email}</p>
        <label htmlFor="">Password : </label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit" disabled={disabled}>
          Submit
        </button>
        <p>{err?.password}</p>
      </form>
    </>
  );
};

export default LoginPage;
