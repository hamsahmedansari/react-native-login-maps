import React from "react";
import Navigation from "./src/utils/navigation";
// import { initializeApp } from "./src/utils/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // initializeApp();
  }
  render() {
    return <Navigation />;
  }
}

export default App;

// export default function App() {
//   return <Navigation />;
// }
