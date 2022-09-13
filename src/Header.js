import React from "react";
import { MantineProvider, Navbar, Box, Header, Text } from "@mantine/core";

class Head extends React.Component {
  render() {
    return (
      <Box>
        <MantineProvider
          theme={{
            colorScheme: "light",
          }}
        >
          <Header height={50}>PRICES RIGHT?!</Header>
          <Navbar height={50} p="xs" width="100%">
            Application navbar
            <Navbar.Section>{/* Header with logo */}</Navbar.Section>
            <Navbar.Section grow mt="md">
              {/* Links sections */}
            </Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
          <Text> Let's check out some prices</Text>
        </MantineProvider>
      </Box>
    );
  }
}

export default Head;
