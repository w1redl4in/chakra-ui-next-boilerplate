import type { NextPage } from "next";
import {
  Flex,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Switch,
  Heading,
  Select,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { LoginLayout } from "_layouts/login";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { t, lang } = useTranslation("common");

  console.log("lang", lang);

  const router = useRouter();

  return (
    <LoginLayout>
      <Flex alignItems="center" justifyContent="space-between" px={5}>
        <Switch />
        <Select
          w="300px"
          size="lg"
          onChange={(e) => router.push("/", "/", { locale: e.target.value })}
    defaultValue={lang}
        >
          <option value="pt">Option PT</option>
          <option value="ch">Option CH</option>
          <option value="en">Option EN</option>
        </Select>
      </Flex>

      <Stack
        p={10}
        align="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <img
          width="120px"
          src="https://avatars.githubusercontent.com/u/43390533?v=4"
          alt="company logo"
        />
        <Heading size="md">{t("login.welcomeText")}</Heading>
      </Stack>

      <FormControl p={10} isRequired>
        <Center flexDir="column">
          <Stack spacing="20px">
            <div>
              <FormLabel htmlFor="user">Usuário: </FormLabel>
              <Input
                id="user"
                type="text"
                placeholder="Qual a forma de login?"
              />
            </div>
            <div>
              <FormLabel htmlFor="password">Senha: </FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Senha de X dígitos"
              />
            </div>
            <Button w="100%">Entrar</Button>
          </Stack>
        </Center>
      </FormControl>
    </LoginLayout>
  );
};

export default Home;
