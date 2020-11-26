import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.blue);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is Really Working</p>
      <button className="Cockpit button" onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.resetClick} className="badge badge-primary m-2">
        Reset Names
      </button>
    </div>
  );
};

export default cockpit;
