import React from "react";
import { MantineProvider, Container } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./components/UserList";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Container>
          <h1>User List</h1>
          <UserList />
        </Container>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
