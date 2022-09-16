import React from "react";
import { MantineProvider, Group, Button, Text, Grid } from "@mantine/core";

class SavedCities extends React.Component {
  render() {
    return (
      <MantineProvider>
        <Grid>
          {this.props.savedResults.length ? (
            this.props.savedResults.map((city) => (
              <Grid.Col
                style={{ maxWidth: 330 }}
                sm={4}
                xs={4}
                key={city._id}
                sx={{
                  color: "#00ECE5",
                  fontSize: 22,
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                  border: "4px solid white",
                  justify: "space-around",
                  padding: 20,
                  margin: 20,
                  lineHeight: 1.4,
                }}
              >
                <Text>City: {city.city}</Text>
                <Text>Cost of Living Index: {city.col_idx}</Text>
                <Text>Gas_price: ${city.gas_price}</Text>
                <Text>Rent Index: {city.rent_idx}</Text>
                <Text>Groceries Index: {city.groceries_idx}</Text>
                <Text>Restaurant Index: {city.restaurant_idx}</Text>
                <Text>Purchasing Power: {city.local_purchasing_pwr_idx}</Text>
                <Group>
                <Button position="center" onClick={() => this.props.deleteCities(city)}>
                  Delete
                </Button>
                </Group>
              </Grid.Col>
            ))
          ) : this.props.errorMessage ? (
            <p>{this.props.errorMessage}</p>
          ) : (
            <p>No cities saved</p>
          )}
        </Grid>
      </MantineProvider>
    );
  }
}

export default SavedCities;
