import { TextInput, Button, Group, Box, MantineProvider } from "@mantine/core";
import { Modal, Text } from "@mantine/core";
import { Component } from "react";

class SearchFormModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: ''
    }
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.getCity(this.state.city);
    this.props.showModal(); 
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
        {this.props.showForm &&(
        <Modal opened={this.props.showModal}
        onClose={this.props.closeModal}>
        <Text>{this.props.city.city} </Text>
        <Button onClick={() => this.props.addCity(this.props.city)}
        > {console.log(this.props.city)}Save</Button>

        </Modal>
        )}
      </MantineProvider>
    );
  }
}

export default SearchFormModal;
