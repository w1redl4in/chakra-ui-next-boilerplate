import type { NextPage } from "next";
import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
    <Flex direction="column">
      <HStack>
        <Link href="/" locale="en" passHref>
          <Button>EN</Button>
        </Link>
        <br />

        <Link href="/" locale="ch" passHref>
          <Button>ch</Button>
        </Link>
        <br />

        <Link href="/" locale="pt" passHref>
          <Button>pt</Button>
        </Link>
        <br />
      </HStack>
      <h1>{t("login.helloworld")}</h1>
      <h1>{lang}</h1>

      <Text>Login</Text>
    </Flex>
  );
};

export default Home;
