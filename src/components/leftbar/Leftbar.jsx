import React from 'react'
import "./leftbar.scss";

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/10505758/pexels-photo-10505758.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar