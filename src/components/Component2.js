import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component2</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ab
                aperiam sapiente praesentium aut modi commodi nihil, temporibus
                labore, saepe nulla ratione tempora culpa voluptates, natus
                totam! Beatae, quas maxime!
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};
