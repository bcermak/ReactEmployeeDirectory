import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <body style ={{backgroundColor: "grey"}}>
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src="\images\User_icon_BLACK-01.png" />
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
