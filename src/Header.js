import React from "react";
import { Link } from "react-router-dom";
import { MantineProvider, Navbar, Box, Header, Anchor} from "@mantine/core";
// import SavedCities from "./SavedCities";
// import About from "./About";
// import Main from "./Main";
import { withAuth0 } from "@auth0/auth0-react";

class Head extends React.Component {
  render() {
    return (
      <MantineProvider
        theme={{
          colorScheme: "dark",
        }}
      >
        <Box>
          <Header sx ={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontFamily: 'monospace',
            fontWeight: 'bolder',
            textDecoration: 'underline'
          }}>
            Prices, Right?
          </Header>
        </Box>
        <Box>
          <Header sx = {{
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center,'
          }}>
            <img
              className="cad-block w-100"
              src="/images/prices.jpg"
              alt="logo"
              width={40}
              height={40}
              style={{ paddingRight: ".25rem" }}
            />
            <Anchor
              component={Link}
              varient="link"
              to="/"
              style={{ paddingRight: ".75rem" }}
              sx={{
                padding:5
              }}
            >
              Home
            </Anchor>
            <Anchor
              component={Link}
              varient="link"
              to="/About"
              style={{ paddingRight: ".75rem" }}
              sx={{
                padding:5
              }}
            >
              About Us
            </Anchor>
            {this.props.auth0.isAuthenticated && (
              <Anchor
                component={Link}
                varient="link"
                to="/SavedCities"
                style={{ paddingRight: ".75rem" }}
                sx={{
                  padding:5,
                }}
              >
                Saved Cities
              </Anchor>
            )}
          </Header>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Box>
      </MantineProvider>
    );
  }
}

export default withAuth0(Head);
