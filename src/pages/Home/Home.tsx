import React from "react";
import { ActionIcon, Box, Button, Stack, Text, useMantineColorScheme } from "@mantine/core";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Home: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box mt={30}>
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
      </Stack>
    </Box>
  );
};
