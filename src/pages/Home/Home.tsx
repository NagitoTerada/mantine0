import React from "react";
import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Header,
  Navbar,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";

import { useDebouncedState } from "@mantine/hooks";

export const Home: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [visibleNav, setVisibleNab] = useDebouncedState(false, 200);

  return (
    <Box mt={30}>
      <AppShell
        padding="md"
        hidden={visibleNav}
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            <Text>Application sidebar</Text>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Title order={1}>This is h1 title</Title>
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Stack align="center">
          <Text size="xl" weight={500}>
            Welcome to Mantine!
          </Text>
          <Button>Click the button</Button>

          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <MdLightMode /> : <MdDarkMode />}
          </ActionIcon>
          <ActionIcon variant="outline" color={dark ? "yellow" : "blue"} onClick={() => setVisibleNab(!visibleNav)}>
            {visibleNav ? <FaCompressAlt /> : <FaExpandAlt />}
          </ActionIcon>
        </Stack>
      </AppShell>
    </Box>
  );
};
