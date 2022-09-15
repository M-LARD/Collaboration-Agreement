import { TextInput, Button, Group, Box, MantineProvider } from "@mantine/core";
import { Modal } from "@mantine/core";
import { Component } from "react";

class BookFormModal extends Component {
  onSubmit = (event) => {
   
  };

  render() {
    return (
      <MantineProvider >
        <Box sx={{
        maxWidth: 400,
        width: "100%",
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",

        }}>
          <form onSubmit ={this.props.addCity}>
            <TextInput
              label="Search"
              placeholder="City Search here"
              controlid="citySearch"
            />
            <Group position="right" mt="md">
              <Button variant="filled" type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </MantineProvider>
    );
  }
}

export default BookFormModal;
