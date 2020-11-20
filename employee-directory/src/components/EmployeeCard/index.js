import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <body style ={{backgroundColor: "grey"}}>
        <div className="card">
          <div className="img-container">
            <img alt="userImage" src="http://images.clipartpanda.com/user-clipart-matt-icons_preferences-desktop-personal.png" />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Employee Name:</strong> {props.name}
              </li>
              <li>
                <strong>Job Title:</strong> {props.jobTitle}
                </li>
              <li>
                <strong>Location:</strong> {props.location}
                </li>
            </ul>
          </div>
        </div>
        
    </body>
  );
}

export default EmployeeCard
