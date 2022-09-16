import React from "react";
import { MantineProvider, Box, Button, Text } from "@mantine/core";
import Form from "./SearchForm";
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";

class SavedCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      savedResults: [],
      citySearch: "",
      city: [],
      showForm: false,
    };
  }

  componentDidMount = async () => {
    this.getSavedCities();
  };

  getSavedCities = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log('token: ', jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        baseURL: process.env.REACT_APP_SERVER,
        url: "/savedresults",
      };
      try {
        const savedResultsResponse = await axios(config);
        console.log("Cities from DB: ", savedResultsResponse.data);
        this.setState({ savedResults: savedResultsResponse.data });
      } catch (error) {
        console.error("error is in the getSavedCities function", error.response);
        this.setState({
          errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
        });
      }
    }
  };


  getCity = async (city) => {

    // const url = `${process.env.REACT_APP_SERVER}/citysearch?city=${city}`;
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log('token: ', jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        baseURL: process.env.REACT_APP_SERVER,
        url: `/citysearch?city=${city}`
      };
      // console.log(url);
      axios(config)
        .then((response) => {
          console.log("city response data", response.data);
          this.setState({ city: response.data });
        })
        .catch((error) => {
          this.setState({ error: error });
        });
    }
  };

  addCity = async (addsCity) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log("token: ", jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/savecity",
        data: addsCity,
      };
      try {
        const response = await axios(config);
        this.setState({ savedResults: [...this.state.savedResults, response.data] });

      } catch (error) {
        console.error("error is in the addCity function", error.response);
        this.setState({
          errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
        });
      }
    }
  };

  deleteCities = async (deletesCity) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log('token: ', jwt);
      try {
        const proceed = window.confirm(
          `Do you wish to delete ${deletesCity.city}?`
        );
        if (proceed) {
          const config = {
            headers: { "Authorization": `Bearer ${jwt}` },
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
    }
  };

  showModal = () => {
    this.setState({ showForm: true });
  };

  closeModal = () => {
    this.setState({ showForm: false });
  };

  render() {
    return (
      <>
        <Form
          addCity={this.addCity}
          getCity={this.getCity}
          closeModal={this.closeModal}
          showModal={this.showModal}
          showForm={this.state.showForm}
          city={this.state.city}
        />

        <MantineProvider>
          {this.state.savedResults.length ? (
            this.state.savedResults.map((city) => (
              <Box
                key={city._id}
                sx={{
                  color: "#00ECE5",
                  fontSize: 22,
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                  border: "4px solid white",
                  lineHeight: 1.4,
                }}
              >
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.city}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.col_idx}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.rent_index}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.col_Textlus_idx}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.groceries_idx}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.restaurant_idx}
                </Text>
                <Text
                  sx={{
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  {city.local_purchasing_pwr_idx}
                </Text>
                <Button onClick={() => this.deleteCities(city)}>Delete</Button>
              </Box>
            ))
          ) : this.state.errorMessage ? (
            <p>{this.state.errorMessage}</p>
          ) : (
            <p>No cities saved</p>
          )}
        </MantineProvider>
      </>
    );
  }
}

export default withAuth0(SavedCities);
