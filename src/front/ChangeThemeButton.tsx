import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";

export const ChangeThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode === "light" ? "🌞" : "🌙"}
    </Button>
  );
};
