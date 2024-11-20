import React from "react";
import { useQuery } from "@tanstack/react-query";
import { SimpleGrid, Loader, Alert } from "@mantine/core";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const UserList: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Loader />;
  if (error) return <Alert color="red">Error fetching data</Alert>;

  return (
    <SimpleGrid cols={{ base: 2, md: 3 }} spacing="lg">
      {data?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
};

export default UserList;
