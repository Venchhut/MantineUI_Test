import React from "react";
import { MantineProvider, Container } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import UserList from "./components/UserList";
import Example from "./components/User-table";
import UserList from "./components/UserList";

import StepperTest from "./components/Stepper";
import LayoutTest from "./components/LayoutTest";
import ExampleWithProviders from "./components/CRUD/crud";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Container>
          <h1>User List</h1>
          <UserList />
          <Example />
          <StepperTest />
          <LayoutTest />
          <ExampleWithProviders />
        </Container>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
