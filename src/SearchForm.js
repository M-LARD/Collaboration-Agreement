import { TextInput, Button, Group, Box, MantineProvider } from "@mantine/core";
import { Modal } from "@mantine/core";
import { Component } from "react";

class BookFormModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: ''
    }
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.getCity(this.state.city);
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
          <form onSubmit={this.onSubmit}>
            <TextInput
              label="Search"
              placeholder="City Search here"
              controlid="citySearch"
              onChange={(e) => this.setState({city: e.target.value}, console.log(this.state.city))}
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
