import React from "react";
import { MantineProvider, Box, Button, Text } from "@mantine/core";

class SavedCities extends React.Component {
  render() {
    return (
      <MantineProvider>
        {this.props.savedResults.length ? (
          this.props.savedResults.map((city) => (
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
              <Button onClick={()=>this.props.deleteCities(city)}>Delete</Button>
            </Box>
          ))
        ) : this.props.errorMessage ? (
          <p>{this.props.errorMessage}</p>
        ) : (
          <p>No cities saved</p>
        )}
      </MantineProvider>
    );
  }
}

export default SavedCities;
