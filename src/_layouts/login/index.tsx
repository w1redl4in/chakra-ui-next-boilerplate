import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

interface LoginLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export function LoginLayout({ children }: LoginLayoutProps) {
  const [isShorterThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      minHeight="100vh"
      minWidth="100%"
      flexDirection={["column", "row", "row", "row"]}
    >
      <Flex flexDirection="column" minHeight="100%" w="100%" py={10}>
        {children}
      </Flex>
      {!isShorterThan768 && (
        <Box
          w="100%"
          backgroundImage="url('/images/login-sider.jpg')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          filter="auto"
          brightness="80%"
        />
      )}
    </Flex>
  );
}
