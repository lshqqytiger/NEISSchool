import React from "react";
import { Text, Fade as _Fade, useDisclosure } from "@chakra-ui/react";

export const Fade = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Text
      onClick={() => {
        if (!localStorage.getItem("profile")) location.href = "/login";
      }}
      onMouseOver={onToggle}
      onMouseOut={onToggle}
    >
      {localStorage.getItem("profile") === null ? (
        "로그인"
      ) : (
        <>
          {JSON.parse(localStorage.getItem("profile") as string).name}
          <_Fade in={isOpen}>
            <ul className="sub" onMouseOver={onToggle} onMouseOut={onToggle}>
              <li
                style={{
                  marginTop: "10px",
                }}
              >
                <Text
                  onClick={() => {
                    location.href = "/profile";
                  }}
                >
                  내 정보
                </Text>
                <Text
                  onClick={() => {
                    localStorage.removeItem("profile");
                    location.href = "/";
                  }}
                >
                  로그아웃
                </Text>
              </li>
            </ul>
          </_Fade>
        </>
      )}
    </Text>
  );
};
