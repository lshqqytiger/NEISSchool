import React from "react";
import { Text, Stack } from "@chakra-ui/react";

const About = ({ schoolData }: any) => {
  return (
    <Stack
      spacing="0"
      alignContent="center"
      id="schoolInfoBox"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Text id="ATPT_OFCDC_SC_NM">
        소속 교육청: {schoolData.ATPT_OFCDC_SC_NM}
      </Text>
      <Text id="SCHUL_NM">
        학교명: {schoolData.SCHUL_NM} ({schoolData.ENG_SCHUL_NM})
      </Text>
      <Text id="SCHUL_KND_SC_NM">
        분류: {schoolData.FOND_SC_NM} {schoolData.COEDU_SC_NM}{" "}
        {schoolData.SCHUL_KND_SC_NM}
      </Text>
      <Text id="ORG_RDN">
        소재지: {schoolData.ORG_RDNMA} {schoolData.ORG_RDNDA} (
        {schoolData.ORG_RDNZC})
      </Text>
      <Text id="ORG_TELNO">전화번호: {schoolData.ORG_TELNO}</Text>
      <Text id="HMPG_ADRES">
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
      <Text id="FOND_YMD">SINCE {schoolData.FOND_YMD}</Text>
    </Stack>
  );
};

export default About;
