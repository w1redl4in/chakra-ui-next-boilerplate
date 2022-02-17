import { Flex, useMediaQuery } from "@chakra-ui/react";

interface LoginLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export function LoginLayout({ children }: LoginLayoutProps) {
  const [isShorterThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      height="100vh"
      minWidth="100%"
      flexDirection={["column", "row", "row", "row"]}
    >
      <Flex
        justifyContent="space-around"
        flexDirection="column"
        height="100%"
        w="100%"
      >
        {children}
      </Flex>
      {!isShorterThan768 && <Flex w="100%" bg="red.200" />}
    </Flex>
  );
}
