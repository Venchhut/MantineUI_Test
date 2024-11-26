import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";

const LayoutTest = () => {
  return (
    <Group grow>
      <TextInput label="First name" placeholder="First name" />

      <ActionIcon>
        <IconEye />
      </ActionIcon>
    </Group>
  );
};

export default LayoutTest;
