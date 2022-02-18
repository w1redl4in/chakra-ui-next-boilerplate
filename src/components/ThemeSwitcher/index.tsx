import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

export function ThemeSwitcher() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack alignItems="center">
      <Switch id="theme-changer" onChange={toggleColorMode} />
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </HStack>
  );
}
