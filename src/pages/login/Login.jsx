import React from "react";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repudiandae sunt assumenda nulla quam temporibus harum ipsum
            similique accusantium ea?
          </p>
          <span>Don't you have an account?</span>
          <button type="submit">Register</button>
        </div>
        <div className="rigth">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="Password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
