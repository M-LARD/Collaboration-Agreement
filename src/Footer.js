import React from "react";
import { MantineProvider,Text } from '@mantine/core';

class Footer extends React.Component {
  render() {
    return (
      <MantineProvider>
        <Text sx = {{
          position:'absolute',
          left:0,
          bottom:0,
          right:0
        }}> created by M'LARD</Text>
      </MantineProvider>
    );
  }
}

export default Footer;
