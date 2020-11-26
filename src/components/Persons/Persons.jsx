import React from "react";
import Person from "./Person/Person";

const Persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        changedName={(event) => props.changedName(event, person.id)}
        click={props.click}
      />
    );
  });

export default Persons;
