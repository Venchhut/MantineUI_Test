import React from "react";
import { Card, Text, Badge, Group, Slider } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      city: string;
    };
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { hovered, ref } = useHover();
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group>
          <Text>{user.name}</Text>
          <Badge color="blue">{user.username}</Badge>
        </Group>
        <Text size="sm" color="dimmed">
          {user.email}
        </Text>
        <Text size="sm">{user.address.city}</Text>
      </Card>
      <Slider
        defaultValue={40}
        min={10}
        max={90}
        ref={ref}
        label={null}
        styles={{
          thumb: {
            transition: "opacity 150ms ease",
            opacity: hovered ? 1 : 0,
          },
        }}
      />
    </>
  );
};

export default UserCard;
