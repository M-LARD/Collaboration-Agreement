import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Text, Box, MantineProvider } from "@mantine/core";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <MantineProvider>
        <Box sx = {{
          display: 'flexbox',
          verticalAlign:'top,'
        }}>
        <img src={user.picture} alt={user.name} />
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        </Box>
      </MantineProvider>
    )
  );
};

export default Profile;