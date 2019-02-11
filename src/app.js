import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Peppers" animal="bird" breed="Cockatiel" />
        <Pet name="Bella" animal="Dog" breed="Spaniel" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
