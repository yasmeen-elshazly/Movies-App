import { useEffect, useState } from "react";

export default function Registertion() {
  const fullNameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const userNameRegex = /^[a-zA-Z0-9]{6,20}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState({
    fullName: " ",
    email: " ",
    userName: " ",
    password: " ",
    confirmPassword: " ",
  });

  function handleRegistration(event) {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "fullName") {
      setRegistrationError({
        ...registrationError,
        fullName: !fullNameRegex.test(event.target.value)
          ? "Invalid FullName"
          : !event.target.value
          ? "Required Field"
          : "",
      });
    } else if (event.target.name === "email") {
      setRegistrationError({
        ...registrationError,
        email: !emailRegex.test(event.target.value)
          ? "Invalid Email"
          : !event.target.value
          ? "Required Field"
          : "",
      });
    } else if (event.target.name === "userName") {
      setRegistrationError({
        ...registrationError,
        userName: !userNameRegex.test(event.target.value)
          ? "Invalid UserName"
          : !event.target.value
          ? "Required Field"
          : "",
      });
    } else if (event.target.name === "password") {
      setRegistrationError({
        ...registrationError,
        password: !passwordRegex.test(event.target.value)
          ? "Invalid Password"
          : !event.target.value
          ? "Required Field"
          : "",
      });
    } else if (event.target.name === "confirmPassword") {
      setRegistrationError({
        ...registrationError,
        confirmPassword:
          event.target.value !== registrationData.password
            ? "Passwords don't match"
            : !event.target.value
            ? "Required Field"
            : "",
      });
    }
  }

  function handleSubmit(event) {
    if (
      registrationError.fullName ||
      registrationError.email ||
      registrationError.userName ||
      registrationError.password
    ) {
      alert("Invalid Data");
    } else {
      alert("Registration Successful");
      event.preventDefault();
      console.log(registrationData);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ fontFamily: "cursive" }}
    >
      <div className="row w-50 my-2">
        <label className="col col-form-label p-0">Full Name</label>
        <div className="col-sm-10 p-0">
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={registrationData.name}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.fullName ? registrationError.fullName : ""}
          </span>
        </div>
      </div>
      <div className="row w-50 my-2">
        <label className="col col-form-label p-0">Email</label>
        <div className="col-sm-10 p-0">
          <input
            type="email"
            className="form-control"
            name="email"
            value={registrationData.email}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.email ? registrationError.email : ""}
          </span>
        </div>
      </div>
      <div className="row w-50 my-2">
        <label className="col col-form-label p-0">User Name</label>
        <div className="col-sm-10 p-0">
          <input
            type="text"
            className="form-control"
            name="userName"
            value={registrationData.userName}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.userName ? registrationError.userName : ""}
          </span>
        </div>
      </div>
      <div className="row w-50 my-2">
        <label className="col col-form-label p-0">Password</label>
        <div className="col-sm-10 p-0">
          <input
            type="password"
            className="form-control"
            name="password"
            value={registrationData.password}
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.password ? registrationError.password : ""}
          </span>
        </div>
      </div>
      <div className="row w-50 my-2">
        <label className="col col-form-label p-0">Confirm Password</label>
        <div className="col-sm-10 p-0">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={handleRegistration}
          />
          <span className="text-danger m-0">
            {registrationError.confirmPassword
              ? registrationError.confirmPassword
              : ""}
          </span>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
