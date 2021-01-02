import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Box, Button, Image, Text } from "theme-ui";

import logo from "./logo.svg";

interface NavigationProps {
  toggleTheme: () => void;
}

export const Navigation: FC<NavigationProps> = ({ toggleTheme }) => {
  const [session, loading] = useSession();
  const { push } = useRouter();

  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} onClick={() => push("/readlist")} />
      {session && !loading && (
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src={session.user?.image || undefined}
              alt={session.user.email || undefined}
              height={40}
              width={40}
              onClick={toggleTheme}
            />
            <Box ml={2} mr={2}>
              <Text>{session.user.name?.split(" ")[0]}</Text>
              <Text>{session.user.name?.split(" ")[1]}</Text>
            </Box>
            <Button
              sx={{ background: "#fd547a" }}
              ml={2}
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      )}
      {!session && (
        <Button sx={{ background: "#1eabf9" }} onClick={() => signIn("google")}>
          Sign in
        </Button>
      )}
    </Box>
  );
};
