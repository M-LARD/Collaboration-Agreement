import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      savedResults: [],
    };
  }
componentDidMount = async()=>{
  this.getSavedCities(); 
}

  getSavedCities = async () => {
    const config = {
      baseURL: process.env.REACT_APP_SERVER,
      url: "/savedresults",
    };
    try {
      const savedResultsResponse = await axios(config);
      console.log("Cites from DB: ", savedResultsResponse.data);
      this.setState({ savedResults: savedResultsResponse.data });
    } catch (error) {
      console.error("error is in the getSavedCities function", error.response);
      this.setState({
        errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
      });
    }
  };

  render() {
    return( <>
  
    </>);
  }
}

export default Main;
