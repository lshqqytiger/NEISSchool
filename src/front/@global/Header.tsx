import React from "react";
import { Box, Text } from "@chakra-ui/react";

import JJorm from "../JJorm";
import { ChangeThemeButton } from "../ChangeThemeButton";

export default class Header extends JJorm {
  ACTION_RECEIVER_TABLE = {};

  render(): React.ReactNode {
    return (
      <header>
        <Box className="contents">
          <Box>
            <ChangeThemeButton />
          </Box>

          <Box className="navigation">
            <ul>
              <li>
                <Text
                  onClick={() => {
                    location.href = "/";
                  }}
                >
                  홈
                </Text>
              </li>
            </ul>
          </Box>
        </Box>
      </header>
    );
  }
}
