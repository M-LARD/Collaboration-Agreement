import React from "react";
import axios from "axios";
import Form from "./SearchForm";
import SavedCities from "./SavedCities";
import {withAuth0} from '@auth0/auth0-react'; 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      savedResults: [],
      citySearch: "",
      city: [],
    };
  }

  componentDidMount = async () => {
    this.getSavedCities();
  };

  getSavedCities = async () => {
    // if (this.props.auth0.isAuthenticated) {
    //   const res = await this.props.auth0.getIdTokenClaims();
    //   const jwt = res.__raw;

    //   console.log('token: ', jwt);
    const config = {
      // headers: {"Authorization": `Bearer ${jwt}`},
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

  getCity = async () => {
    const url = `${process.env.REACT_APP_SERVER}/citysearch?city=${this.state.citySearch}`;
    axios
      .get(url)
      .then((response) => {
        console.log("city response data", response.data);
        this.setState({ city: response.data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  addCity = async (addsCity) => {
    // if (this.props.auth0.isAuthenticated) {
    //   const res = await this.props.auth0.getIdTokenClaims();
    //   const jwt = res.__raw;

    //   console.log("token: ", jwt);
      const config = {
        // headers: { Authorization: `Bearer ${jwt}` },
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/citysearch",
        data: addsCity,
      };
      try {
        const response = await axios(config);
        this.setState({ cites: [...this.state.savedResults, response.data] });
      } catch (error) {
        console.error("error is in the addCity function", error.response);
        this.setState({
          errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
        });
      }
    // }
  };

  // updatesCities = async (updatedCities) => {
  //   // if (this.props.auth0.isAuthenticated) {
  //   //   const res = await this.props.auth0.getIdTokenClaims();
  //   //   const jwt = res.__raw;

  //   //   console.log('token: ', jwt);
  //   const config = {
  //     // headers: { "Authorization": `Bearer ${jwt}` },
  //     method: "put",
  //     baseURL: process.env.REACT_APP_HEROKU,
  //     url: `/savedresults/${updatedCities._id}`,
  //     data: updatedCities,
  //   };

  //   const updatedCity = await axios(config);
  //   try {
  //     const updatedCities = this.state.savedResults.map((existingCity) => {
  //       if (existingCity._id === updatedCities._id) {
  //         return updatedCity;
  //       } else {
  //         return existingCity;
  //       }
  //     });
  //     this.setState({
  //       savedResults: updatedCities,
  //     });
  //   } catch (error) {
  //     console.error("error in the updateCities function: ", error);
  //   }
  //   // }
  // };

  deleteCities = async (deletesCity) => {
    // if (this.props.auth0.isAuthenticated) {
    //   const res = await this.props.auth0.getIdTokenClaims();
    //   const jwt = res.__raw;

    //   console.log('token: ', jwt);
    try {
      const proceed = window.confirm(
        `Do you wish to delete ${deletesCity._id}?`
      );
      if (proceed) {
        const config = {
          // headers: {"Authorization": `Bearer ${jwt}`},
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,
          url: `/savedresults/${deletesCity._id}`,
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
    // }
  };

  render() {
    return (
      <>
        <Form addCity={this.addCity} />
        <SavedCities savedResults={this.state.savedResults} />
      </>
    );
  }
}

export default withAuth0(Main);
