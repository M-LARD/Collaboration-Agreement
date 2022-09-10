import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <>
      <Link to="/App">Home</Link>
        <h2>About M'LARD</h2>
      </>
    );
  }
}

export default About;
