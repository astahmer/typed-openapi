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
import { SelectOptions } from "../components/select-options";
import { OutputRuntime } from "typed-openapi";
import { TwitterIcon } from "../components/twitter-icon";
import { useSelector } from "@xstate/react";
import type { ActorRefFrom } from "xstate";
import {
  playgroundMachine,
  type ClientKind,
  type ValidateSide,
  type ValidationLevel,
} from "../Playground/Playground.machine";

type PlaygroundService = ActorRefFrom<typeof playgroundMachine>;

const PlaygroundToolbar = ({ service }: { service: PlaygroundService }) => {
  const runtime = useSelector(service, (s) => s.context.runtime);
  const validation = useSelector(service, (s) => s.context.validation);
  const client = useSelector(service, (s) => s.context.client);
  const validateSide = useSelector(service, (s) => s.context.validateSide);
  const coerce = useSelector(service, (s) => s.context.coerce);
  const showRuntimeOpts = runtime !== "none";

  return (
    <Flex pt="2" gap="2" flexWrap="wrap" alignItems="center">
      <styled.h1 textStyle="panda.h4" fontWeight="bold">
        typed-openapi
      </styled.h1>
      <HStack alignItems="center" ml="auto" flexWrap="wrap" gap="2">
        <SelectRuntime
          defaultValue={{ label: "None (types only)", value: "none" }}
          onChange={(option) =>
            service.send({ type: "Update runtime", runtime: (option?.value ?? "none") as OutputRuntime })
          }
        />
        {showRuntimeOpts ? (
          <>
            <SelectOptions<ValidationLevel>
              minW="140px"
              value={validation}
              onChange={(v) => service.send({ type: "Update validation", validation: v })}
              options={[
                { value: "loose", label: "validation: loose" },
                { value: "formats", label: "validation: formats" },
                { value: "strict", label: "validation: strict" },
              ]}
            />
            <SelectOptions<ClientKind>
              minW="150px"
              value={client}
              onChange={(v) => service.send({ type: "Update client", client: v })}
              options={[
                { value: "promise", label: "client: promise" },
                { value: "effect", label: "client: effect" },
              ]}
            />
            <SelectOptions<ValidateSide>
              minW="160px"
              value={validateSide}
              onChange={(v) => service.send({ type: "Update validateSide", validateSide: v })}
              options={[
                { value: "none", label: "validate: none" },
                { value: "input", label: "validate: input" },
                { value: "output", label: "validate: output" },
                { value: "both", label: "validate: both" },
              ]}
            />
            <styled.label
              display="flex"
              alignItems="center"
              gap="1"
              fontSize="sm"
              cursor="pointer"
              whiteSpace="nowrap"
            >
              <input
                type="checkbox"
                checked={coerce}
                onChange={(e) => service.send({ type: "Update coerce", coerce: e.currentTarget.checked })}
              />
              coerce
            </styled.label>
          </>
        ) : null}
        <styled.a target="blank" href="https://github.com/astahmer/typed-openapi">
          <IconButton title="Github">
            <GithubIcon />
          </IconButton>
        </styled.a>
        <styled.a target="blank" href="https://twitter.com/astahmer_dev">
          <IconButton title="Twitter" css={{ color: { base: "colorPalette.500", _dark: "colorPalette.200" } }}>
            <TwitterIcon />
          </IconButton>
        </styled.a>
        <styled.a
          target="blank"
          href="https://openapi-zod-client.vercel.app/"
          css={{ color: { base: "colorPalette.500", _dark: "colorPalette.200" } }}
        >
          openapi-zod-client
        </styled.a>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

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
          <PlaygroundWithMachine>{(service) => <PlaygroundToolbar service={service} />}</PlaygroundWithMachine>
        </Stack>
      </Flex>
    </ThemeProvider>
  );
};
