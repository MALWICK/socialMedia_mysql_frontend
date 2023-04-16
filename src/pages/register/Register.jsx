import React from "react";
import "../register/register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Kesh Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repudiandae sunt assumenda nulla quam temporibus harum ipsum
            similique accusantium ea?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button type="submit">Login</button>
          </Link>
        </div>
        <div className="rigth">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="Password" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="Password" placeholder="Password" />
            <input type="Password" placeholder="confirm your Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
