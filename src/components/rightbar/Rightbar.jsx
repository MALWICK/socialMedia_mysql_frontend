import React from "react";
import "./rightbar.scss";

function Rightbar() {
  return (
    <div className="rigthbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/11402832/pexels-photo-11402832.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />

              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/11402832/pexels-photo-11402832.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />

              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
