import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1ps solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 400px) {
    width: "350px";
  }
`;

class Person extends Component {
  render() {
    const style = {
      "@media(min-width: 500px": {
        width: "450px",
      },
    };

    return (
      <StyleDiv>
        <p onClick={this.props.click}>
          Hi my Name is {this.props.name} and I'm {this.props.age} years old
        </p>
        <input
          onChange={this.props.changedName}
          value={this.props.name}
          type="text"
        />
      </StyleDiv>
    );
  }
}

export default Person;
