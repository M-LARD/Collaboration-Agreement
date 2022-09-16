import React from "react";
import {  Link, } from "react-router-dom";
import { MantineProvider, Navbar, Box, Header, Anchor } from "@mantine/core";
// import SavedCities from "./SavedCities";
// import About from "./About";
// import Main from "./Main";

class Head extends React.Component {
  render() {
    return (
    
        <Box>
          <MantineProvider
            theme={{
              colorScheme: "light",
            }}
          >
            <Header height={50} >
              <img
                className="cad-block w-100"
                src="/images/prices.jpg"
                alt="logo"
                width={40}
                height={40}
                style={{paddingRight:'.25rem'}}
              />
              Prices Right
                
                  <Anchor component={Link} varient="link" to="/"style={{paddingRight:'.75rem'}}>
                    Home
                  </Anchor>
                  <Anchor component={Link} varient="link" to="/About"style={{paddingRight:'.75rem'}}>
                    About Us
                  </Anchor>
                  <Anchor component={Link} varient="link" to="/SavedCities"style={{paddingRight:'.75rem'}}>
                    Saved Cities
                  </Anchor>
            
                </Header>
              <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </MantineProvider>
        </Box>
    );
  }
}

export default Head;
