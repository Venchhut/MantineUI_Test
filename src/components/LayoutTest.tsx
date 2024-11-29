import { ActionIcon, Flex, Group, TextInput } from "@mantine/core";
import { IconEye, IconSend2 } from "@tabler/icons-react";

const LayoutTest = () => {
  return (
    <>
      <Group grow>
        <TextInput label="enter password" placeholder="password" />

        <ActionIcon>
          <IconEye />
        </ActionIcon>
      </Group>

      <Flex justify="space-between" align="end" mt="xl" gap="md" mb="md">
        <TextInput
          label="complete task"
          placeholder="complete task"
          style={{ flex: 1 }}
        />
        <ActionIcon>
          <IconSend2 size={30} />
        </ActionIcon>
      </Flex>
    </>
  );
};

export default LayoutTest;
