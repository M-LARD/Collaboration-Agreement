import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Box, MantineProvider } from "@mantine/core";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <MantineProvider>
      <Box sx={{
        position:'fixed',
      }}>
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </Box>
    </MantineProvider>
  );
};

export default LogoutButton;