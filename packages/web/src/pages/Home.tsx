import { Flex, HStack, Stack } from "panda/jsx";
import { styled } from "panda/jsx";
import PlaygroundWithMachine from "../Playground/PlaygroundWithMachine";

import "../styles.css";
import "@fontsource/inter"; // Defaults to weight 400
import { ThemeProvider } from "../vite-themes/provider";
import { ColorModeSwitch } from "../components/color-mode-switch";
import { GithubIcon } from "../components/github-icon";
import { IconButton } from "../components/icon-button";
import { SelectRuntime } from "../components/select-demo";
import { OutputRuntime } from "typed-openapi";

export const Home = () => {
  return (
    <ThemeProvider>
      <Flex
        w="100%"
        height="100vh"
        color={{ base: "cyan.600", _dark: "cyan.200" }}
        bg={{ base: "whiteAlpha.100", _dark: "whiteAlpha.200" }}
        fontFamily="Inter"
        p="3"
      >
        <Stack w="100%" h="100%">
          <PlaygroundWithMachine>
            {(service) => (
              <Flex pt="2">
                <styled.h1 textStyle="panda.h4" fontWeight="bold">
                  typed-openapi
                </styled.h1>
                <HStack alignItems="center" ml="auto">
                  <SelectRuntime
                    defaultValue={{ label: "None (types only)", value: "none" }}
                    onChange={(option) =>
                      service.send({ type: "Update runtime", runtime: (option?.value ?? "none") as OutputRuntime })
                    }
                  />
                  <styled.a target="blank" href="https://github.com/astahmer/typed-openapi">
                    <IconButton title="Github">
                      <GithubIcon />
                    </IconButton>
                  </styled.a>
                  <ColorModeSwitch />
                </HStack>
              </Flex>
            )}
          </PlaygroundWithMachine>
        </Stack>
      </Flex>
    </ThemeProvider>
  );
};
