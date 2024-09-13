// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const default_state = {
//   email: "",
//   password: "",
// };

// const LoginPage = () => {
//   const navigate = useNavigate();
//   let [data, setData] = useState(default_state);
//   let [err, setErr] = useState(default_state);

//   useEffect(() => {
//     // let is_logged_in = true;
//     // let role = "admin";
//     // if (is_logged_in) {
//     //   navigate("/" + role);
//     // }
//   }, []);

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     }); // aschcronous ho
//     validateField(name, value); // first call hunxa
//   };

//   const validateField = (field, val) => {
//     let errMsg = "";
//     switch (field) {
//       case "email":
//         errMsg = val ? "" : "Email is required";
//         break;
//       case "password":
//         errMsg = val
//           ? val.length < 6
//             ? "Password must be at least 6 characters"
//             : ""
//           : "Password is required";
//         break;
//     }
//     setErr({
//       ...err,
//       [field]: errMsg,
//     });

//     console.log(err);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let success = true;

//     let logged_user = {
//       name: "Pujan Prajapati",
//       email: "pujan123@gmail.com",
//       id: 183493279238,
//       role: "admin",
//     };

//     let token = "slkfjskdjgklsdjgcxnkbjxklbjklb";

//     localStorage.setItem("intern_token", token);
//     localStorage.setItem("intern_user", JSON.stringify(logged_user));

//     if (success) {
//       navigate("/admin");
//     }
//   };

//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">Email : </label>
//         <input type="email" name="email" onChange={handleChange} />
//         <p>{err?.email}</p>
//         <label htmlFor="">Password : </label>
//         <input type="password" name="password" onChange={handleChange} />
//         <button type="submit">Submit</button>
//         <p>{err?.password}</p>
//       </form>
//     </>
//   );
// };

// export default LoginPage;

import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "antd";
import { http } from "../../../service/axios.service";
import { notify, setLocalStore } from "../../../utilities/helpers";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const default_state = {
    email: "",
    password: "",
  };

  return (
    <>
      <h1>Login In</h1>
      <Formik
        initialValues={default_state}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          console.log(values);

          try {
            let response = await http.post("/login", values, {
              // headers: {
              //   "authorization" : "Bearer token"
              // }
            });
            if (response.success) {
              let user = response.result.user;
              setLocalStore("intern_token", response.data.token);
              setLocalStore("intern_user", {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
              });
              notify("You are successfully logged in", "success");
            }
            console.log("Login response : ", response);
          } catch (error) {
            console.log("Login error : ", error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email">Email : </label>
            <Input name="email" placeholder="email..." type="email" />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
            <label htmlFor="password">Password : </label>
            <Input name="password" placeholder="password..." type="password" />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
