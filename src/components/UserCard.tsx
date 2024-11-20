import React from "react";
import { Card, Text, Badge, Group } from "@mantine/core";

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
    </>
  );
};

export default UserCard;
