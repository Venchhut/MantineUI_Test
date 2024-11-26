import React from "react";
import { useQuery } from "@tanstack/react-query";
import { SimpleGrid, Loader, Alert, NavLink, Pagination } from "@mantine/core";
import axios from "axios";
import UserCard from "./UserCard";
import { IconFingerprint, IconGauge } from "@tabler/icons-react";

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
    <>
      <NavLink
        href="#required-for-focus"
        label="profile detail"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink
          label="Nested parent link"
          childrenOffset={28}
          href="#required-for-focus"
        >
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Save"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg">
        {data?.map((user) => <UserCard key={user.id} user={user} />)}
      </SimpleGrid>
      <Pagination total={10} />;
    </>
  );
};

export default UserList;
