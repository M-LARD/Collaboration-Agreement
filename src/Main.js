import React from "react";
import axios from "axios";
import Form from "./SearchForm";
import SavedCities from "./SavedCities";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      savedResults: [
        // {
        //   _id: "631ff3d69799c4559a7d923b",
        //   city: "Hamilton, Bermuda",
        //   col_idx: 149.02,
        //   rent_index: 96.1,
        //   col_plus_idx: 124.22,
        //   groceries_idx: 157.89,
        //   restaurant_idx: 155.22,
        //   local_purchasing_pwr_idx: 79.43,
        // },
      ],
    };
  }
  componentDidMount = async () => {
    this.getSavedCities();
  };

  getSavedCities = async () => {
    const config = {
      baseURL: process.env.REACT_APP_SERVER,
      url: "/citysearch",
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

  // myAddedCities = async (addsCity) => {
  //   const config = {
  //     method: "post",
  //     baseURL: process.env.REACT_APP_SERVER,
  //     url: "/citysearch",
  //     data: addsCity,
  //   };
  //   try {
  //     const response = await axios(config);
  //     this.setState({ cites: [...this.state.savedResults, response.data] });
  //   } catch (error) {
  //     console.error("error is in the myAddedCities function", error.response);
  //     this.setState({
  //       errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
  //     });
  //   }
  // };

  updatesCities = async (updatedCities) => {
    // if (this.props.auth0.isAuthenticated) {
    //   const res = await this.props.auth0.getIdTokenClaims();
    //   const jwt = res.__raw;

    //   console.log('token: ', jwt);
    const config = {
      // headers: { "Authorization": `Bearer ${jwt}` },
      method: "put",
      baseURL: process.env.REACT_APP_HEROKU,
      url: `/citysearch/${updatedCities._id}`,
      data: updatedCities,
    };

    const updatedCity = await axios(config);
    try {
      const updatedCities = this.state.savedResults.map((existingCity) => {
        if (existingCity._id === updatedCities._id) {
          return updatedCity;
        } else {
          return existingCity;
        }
      });
      this.setState({
        savedResults: updatedCities,
      });
    } catch (error) {
      console.error("error in the updateCities function: ", error);
    }
  };

  deleteCities = async (deletesCity) => {
    try {
      const proceed = window.confirm(
        `Do you wish to delete ${deletesCity._id}?`
      );
      if (proceed) {
        const config = {
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,
          url: `/citysearch/${deletesCity._id}`,
        };
        // const newCitiesArray =this.state.savedResults.filter(
        //   (city)=> city._id !==deletesCity._id
        // );
        this.getSavedCities();
        await axios(config);
      }
    } catch (error) {
      console.error("Error is in the deleteCities Function: ", error);
      this.setState({
        errorMessage: `Status Code ${error.response.status}: ${error.response.data}`,
      });
    }
  };

  render() {
    return (
      <>
        <Form />
        <SavedCities savedResults={this.state.savedResults} />
      </>
    );
  }
}

export default Main;
