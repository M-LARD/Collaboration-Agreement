import { TextInput, Button, Group, Box, MantineProvider } from "@mantine/core";
import { Modal, Text } from "@mantine/core";
import { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class SearchFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      resultCity: [],
      showForm: false,
      errorMessage: "",
    };
  }

  getCity = async (city) => {
    // const url = `${process.env.REACT_APP_SERVER}/citysearch?city=${city}`;
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("token: ", jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        baseURL: process.env.REACT_APP_SERVER,
        url: `/citysearch?city=${city}`,
      };
      // console.log(url);
      axios(config)
        .then((response) => {
          console.log("city response data", response.data);
          this.setState({ resultCity: response.data });
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
        this.setState({
          savedResults: [...this.state.savedResults, response.data],
        });
      } catch (error) {
        console.error("error is in the addCity function", error);
        this.setState({
          errorMessage: `Status Code${error.response.status}: ${error.response.data}`,
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

  onSubmit = (event) => {
    event.preventDefault();
    this.getCity(this.state.city);
    this.showModal();
  };

  clickClose = () => {
    this.addCity(this.state.resultCity);
    this.closeModal();
  };

  render() {
    return (
      <MantineProvider>
        <Box
          sx={{
            maxWidth: 400,
            width: "100%",
            height: 180,
            display: "flexbox",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <form onSubmit={this.onSubmit}>
            <TextInput
              label="Search"
              placeholder="City Search here"
              controlid="citySearch"
              onChange={(e) =>
                this.setState(
                  { city: e.target.value },
                  console.log(this.state.city)
                )
              }
            />
            <Group position="right" mt="md">
              <Button variant="gradient" type="submit">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
        {this.state.showForm && (
          <Modal
          sx={{
            margin:'none',
            padding:'none'
          }}
            transition="MantineTransition"
            closeOnClickOutside="true"
            opened={this.showModal}
            onClose={this.closeModal}
          >
            <Group sx={{
              backgroundColor: "black",
              border:'4px solid lightblue',
              color:'whitesmoke'
            }}>
              <Text sx={{
            color:'whitesmoke'
          }}>{this.state.resultCity.city} </Text>
              <Text sx={{
            color:'whitesmoke'
          }}>
                Cost of living Index: {this.state.resultCity.col_idx}{" "}
              </Text>
              <Text sx={{
            color:'whitesmoke'
          }}>Gas Price:{this.state.resultCity.gas_price} </Text>
              <Text>Groceries:{this.state.resultCity.groceries_idx} </Text>
              <Text sx={{
            color:'whitesmoke'
          }}>
                Purchasing Power:
                {this.state.resultCity.local_purchasing_pwr_idx}{" "}
              </Text>
              <Text sx={{
            color:'whitesmoke'
          }}>
                Restaurant Index:{this.state.resultCity.restaurant_idx}{" "}
              </Text>
              <Text sx={{
            color:'whitesmoke'
          }}>
                Groceries Index:{this.state.resultCity.groceries_idx}{" "}
              </Text>
              <Button onClick={this.clickClose}>Save</Button>
            </Group>
          </Modal>
        )}
      </MantineProvider>
    );
  }
}

export default withAuth0(SearchFormModal);
