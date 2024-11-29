import {
  AppShell,
  Burger,
  Button,
  Group,
  Modal,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon360View } from "@tabler/icons-react";

const AppShellTest = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger />
          <Icon360View />
          <Group justify="center" style={{ flex: 1 }} gap="xl">
            <Group align="center">
              <UnstyledButton>Home</UnstyledButton>
              <UnstyledButton>About Me</UnstyledButton>
              <UnstyledButton>Skills</UnstyledButton>
              <UnstyledButton>Contact</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>navbar</AppShell.Navbar>
      <AppShell.Main>
        <Modal
          opened={opened}
          onClose={close}
          style={{ textAlign: "center", alignContent: "center" }}
        >
          Are you sure to submit this form
        </Modal>
        <Button onClick={open}>Submit</Button>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellTest;
