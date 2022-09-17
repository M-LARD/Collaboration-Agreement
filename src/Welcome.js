import React from "react";
import { MantineProvider, Text, Image } from "@mantine/core";

class Welcome extends React.Component {
  render() {
    return (
      <MantineProvider>
        <Text
          sx={{
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Welcome!{" "}
        </Text>
        <Image height={500} src='/images/longcity.jpg'/>
      </MantineProvider>
    );
  }
}
export default Welcome;
