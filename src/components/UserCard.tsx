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
        <img
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
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
