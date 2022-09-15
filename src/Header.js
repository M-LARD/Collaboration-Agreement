import React from "react";
import { BrowserRouter as  Link, } from "react-router-dom";
import { MantineProvider, Navbar, Box, Header, Text } from "@mantine/core";
// import SavedCities from "./SavedCities";
// import About from "./About";
// import Main from "./Main";

class Head extends React.Component {
  render() {
    return (
      // <Router>
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
                
                  <Text component={Link} varient="link" to="/"style={{paddingRight:'.75rem'}}>
                    Home
                  </Text>
                  <Text component={Link} varient="link" to="/About"style={{paddingRight:'.75rem'}}>
                    About Us
                  </Text>
                  <Text component={Link} varient="link" to="/SavedCities"style={{paddingRight:'.75rem'}}>
                    Saved Cities
                  </Text>
                  {/* <Routes>
                  <Route path= '/' element={<Main/>}/>
                  <Route path="/About" element={<About />} />
                  <Route path="/SavedCities" element={<SavedCities />} />
                </Routes> */}
                </Header>
              <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </MantineProvider>
        </Box>
      // </Router>
    );
  }
}

export default Head;
