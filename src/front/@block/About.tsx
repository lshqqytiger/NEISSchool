import React from "react";
import { Text, Stack, Heading, Center } from "@chakra-ui/react";

const About = ({ schoolData }: any) => {
  return (
    <Stack
      spacing="2"
      alignContent="center"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Center>
        <Heading fontSize="3xl">정보</Heading>
      </Center>
      <Stack spacing="0.5">
        <Text>소속 교육청: {schoolData.ATPT_OFCDC_SC_NM}</Text>
        <Text>
          학교명: {schoolData.SCHUL_NM} ({schoolData.ENG_SCHUL_NM})
        </Text>
        <Text>
          분류: {schoolData.FOND_SC_NM} {schoolData.COEDU_SC_NM}{" "}
          {schoolData.SCHUL_KND_SC_NM}
        </Text>
        <Text>
          소재지: {schoolData.ORG_RDNMA} {schoolData.ORG_RDNDA} (
          {schoolData.ORG_RDNZC})
        </Text>
        <Text>전화번호: {schoolData.ORG_TELNO}</Text>
        <Text>
          홈페이지:{" "}
          <a
            onClick={() => {
              location.href = schoolData.HMPG_ADRES.includes("http")
                ? schoolData.HMPG_ADRES
                : `http://${schoolData.HMPG_ADRES}`;
            }}
          >
            {schoolData.HMPG_ADRES}
          </a>
        </Text>
        <Text>SINCE {schoolData.FOND_YMD}</Text>
      </Stack>
    </Stack>
  );
};

export default About;
