import React from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
