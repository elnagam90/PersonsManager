import React, { Component } from "react";
//import React, { useState } from "react";
//import logo from './logo.svg';
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Mahmoud", age: 30 },
      { id: "5", name: "Menna", age: 28 },
      { id: "2", name: "Mohamed", age: 20 },
      { id: "3", name: "Mostafa", age: 19 },
    ],
    showPersons: false,
  };
  baseState = [...this.state.persons];

  deleteNameHandler = (lastElement) => {
    const deletePersons = [...this.state.persons];
    deletePersons.splice(lastElement, 1);
    //console.log(deletePersons);
    console.log(lastElement);

    this.setState({ persons: deletePersons });
  };

  handleNames = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 5 },
        { name: "Menna", age: 28 },
        { name: "Mohamed", age: 20 },
        { name: "Mostafa", age: 19 },
      ],
    });
    console.log(" is clicked");
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(doesShow);
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    //console.log(personIndex);
    const person = { ...this.state.persons[personIndex] };
    //console.log(person);
    person.name = event.target.value;
    //console.log(person);
    const persons = [...this.state.persons];
    //console.log(persons);
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  /* getSnapshotBeforeUpdate() {
    const prevState = [...this.state.persons];
    this.setState({ persons: prevState });
    console.log(prevState);
  }
  componentDidUpdate() {}
*/
  resetNameHandler = () => {
    const resetNames = [...this.baseState];
    console.log(resetNames);
    this.setState({ persons: resetNames });
  };

  render() {
    /* const style = {
      backgroundColor: "blue",
      front: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    }; */

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deleteNameHandler}
            changedName={this.nameChangedHandler}
          />
        </div>
      );

      /* style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      }; */
    }

    return (
      <div className={classes.App}>
        {/* <h1>Hi I'm a React App</h1>
        <p className={classes.join(" ")}>This is Really Working</p>
        <button style={btn} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> */}
        {/* <button
          onClick={this.resetNameHandler}
          className="badge badge-primary m-2"
        >
          Reset Names
        </button> */}
        <Cockpit
          resetClick={this.resetNameHandler}
          title={this.props.appTitle}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;

/*const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Mahmoud", age: 30 },
      { name: "Menna", age: 28 },
      { name: "Mohamed", age: 20 },
      { name: "Mostafa", age: 19 },
    ],
  });

  const handleNames = (newName) => {
    setPersonState({
      persons: [
        { name: newName, age: 5 },
        { name: "Menna", age: 28 },
        { name: "Mohamed", age: 20 },
        { name: "Mostafa", age: 19 },
      ],
    });
    console.log(" is clicked");
    console.log(personState);
  };
  const onChangedHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Mahmoud", age: 5 },
        { name: event.target.value, age: 28 },
        { name: "Mohamed", age: 20 },
        { name: "Mostafa", age: 19 },
      ],
    });
  };

  /* const resetNames = () => {
    setPersonState({
      personState,
    });
  }; 
  return (
    <div className="App">
      <button
        onClick={() => handleNames("MahmoudELnagar")}
        className="badge badge-primary m-2"
      >
        Switch Names
      </button>
      {/* <button onClick={resetNames} className="badge badge-primary m-2">
        Reset Names
      </button> }
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changedName={onChangedHandler}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        click={handleNames.bind(this, "KarlaMahmoud")}
      />
      <Person
        name={personState.persons[3].name}
        age={personState.persons[3].age}
      />
    </div>
  );
};

export default App*/
/* /*{" "}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changedName={onChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={handleNames.bind(this, "KarlaMahmoud")}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />{" "}*/
