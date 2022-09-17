import React from "react";
import { MantineProvider, Button, Table, Text, Box } from "@mantine/core";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class SavedCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      savedResults: [],
      // city: [],
      // showForm: false,
    };
  }

  componentDidMount = async () => {
    this.getSavedCities();
  };

  getSavedCities = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log("token: ", jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        baseURL: process.env.REACT_APP_SERVER,
        url: "/savedresults",
      };
      try {
        const savedResultsResponse = await axios(config);
        console.log("Cities from DB: ", savedResultsResponse.data);
        this.setState({ savedResults: savedResultsResponse.data });
      } catch (error) {
        console.error(
          "error is in the getSavedCities function",
          error.response
        );
        this.setState({
          errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
        });
      }
    }
  };

  // getCity = async (city) => {

  //   // const url = `${process.env.REACT_APP_SERVER}/citysearch?city=${city}`;
  //   if (this.props.auth0.isAuthenticated) {
  //     const res = await this.props.auth0.getIdTokenClaims();
  //     const jwt = res.__raw;
  //     console.log('token: ', jwt);
  //     const config = {
  //       headers: { "Authorization": `Bearer ${jwt}` },
  //       baseURL: process.env.REACT_APP_SERVER,
  //       url: `/citysearch?city=${city}`
  //     };
  //     // console.log(url);
  //     axios(config)
  //       .then((response) => {
  //         console.log("city response data", response.data);
  //         this.setState({ city: response.data });
  //       })
  //       .catch((error) => {
  //         this.setState({ error: error });
  //       });
  //   }
  // };

  // addCity = async (addsCity) => {
  //   if (this.props.auth0.isAuthenticated) {
  //     const res = await this.props.auth0.getIdTokenClaims();
  //     const jwt = res.__raw;

  //     console.log("token: ", jwt);
  //     const config = {
  //       headers: { Authorization: `Bearer ${jwt}` },
  //       method: "post",
  //       baseURL: process.env.REACT_APP_SERVER,
  //       url: "/savecity",
  //       data: addsCity,
  //     };
  //     try {
  //       const response = await axios(config);
  //       this.setState({ savedResults: [...this.state.savedResults, response.data] });

  //     } catch (error) {
  //       console.error("error is in the addCity function", error.response);
  //       this.setState({
  //         errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
  //       });
  //     }
  //   }
  // };

  // showModal = () => {
  //   this.setState({ showForm: true });
  // };

  // closeModal = () => {
  //   this.setState({ showForm: false });
  // };

  deleteCities = async (deletesCity) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log("token: ", jwt);
      try {
        const proceed = window.confirm(
          `Do you wish to delete ${deletesCity.city}?`
        );
        if (proceed) {
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
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
  render() {
    return (
      <>
        <MantineProvider>
          <Text
            sx={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            About the Dataset
          </Text>
          <Box
            sx={{
              width: "30%",
              height: 200,
              overflow: "scroll",
              margin: "2% auto",
              border: "4px solid lightblue",
            }}
          >
            <Text>
              Each of the indices are relative to New York City (NYC) which
              means that for New York City, each index should be 100. If another
              city has, for example, rent index of 120, it means that on an
              average in that city rents are 20% more expensive than in New York
              City. If a city has rent index of 70, that means on an average in
              that city rents are 30% less expensive than in New York City.
            </Text>
          </Box>
          <Table
            horizontalSpacing="xs"
            verticalSpacing="xs"
            fontSize="med"
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              border: "4px solid lightblue",
              margin: "auto",
              width: "fit-content",
            }}
          >
            <thead>
              <tr>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    City
                  </Text>
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Cost of Living
                  </Text>
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Gas Prices(USD)
                  </Text>
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Rent Index
                  </Text>
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Groceries Index
                  </Text>
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Restaurant Index
                  </Text>{" "}
                </th>
                <th>
                  <Text
                    sx={{
                      fontSize: 22,
                      color: "lavender",
                    }}
                  >
                    Purchasing Power
                  </Text>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.savedResults.length ? (
                this.state.savedResults.map((city) => (
                  <tr key={city._id}>
                    <td>{city.city}</td>
                    <td>{city.col_idx}</td>
                    <td> {city.gas_price}</td>
                    <td>{city.rent_idx}</td>
                    <td>{city.groceries_idx}</td>
                    <td>{city.restaurant_idx}</td>
                    <td>{city.local_purchasing_pwr_idx}</td>
                    <td>
                      <Button
                        variant="gradient"
                        position="right"
                        mt="md"
                        onClick={() => this.deleteCities(city)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : this.state.errorMessage ? (
                <p>{this.state.errorMessage}</p>
              ) : (
                <p>No cities saved</p>
              )}
            </tbody>
          </Table>
        </MantineProvider>
      </>
    );
  }
}

export default withAuth0(SavedCities);
