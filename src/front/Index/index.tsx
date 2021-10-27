import React from "react";
import Axios from "axios";
import {
  Text,
  Button,
  Center,
  Input,
  Heading,
  Textarea,
  Stack,
  Box,
} from "@chakra-ui/react";

import JJorm from "../JJorm";
import Bind from "../ReactBootstrap";
import L from "../@global/Language";

import { About, Comment, Schedule, Meal } from "../SubMenu";

interface Schedule {
  id: number;
  title: string;
  description: string;
  startTimezone: string | null;
  start: Date;
  end: Date;
  endTimezone: string | null;
  recurrenceRule: any;
  recurrenceId: number | null;
  recurrenceExceptions: any;
  isAllDay: boolean;
}

type SchoolData = {
  SD_SCHUL_CODE: string;
  ATPT_OFCDC_SC_NM: string;
  ATPT_OFCDC_SC_CODE: string;
  SCHUL_NM: string;
  ENG_SCHUL_NM: string;
  SCHUL_KND_SC_NM: string;
  FOND_SC_NM: string;
  ORG_RDNZC: string;
  ORG_RDNMA: string;
  ORG_RDNDA: string;
  ORG_TELNO: string;
  COEDU_SC_NM: string;
  HMPG_ADRES: string;
  FOND_YMD: number;
};

type Properties = {};
type State = {
  schoolData: SchoolData;
  duplicatedName: Array<SchoolData>;
  schedule: Array<Schedule>;
  meal: any;
  nutrientDisplay: string;
  originCountryDisplay: string;
  schoolNameInput: string;
};

export default class Index extends JJorm<JJWAK.Page.Props<"Index">, State> {
  state: State = {
    schoolData: {
      SD_SCHUL_CODE: "",
      ATPT_OFCDC_SC_NM: "",
      ATPT_OFCDC_SC_CODE: "",
      SCHUL_NM: "",
      ENG_SCHUL_NM: "",
      SCHUL_KND_SC_NM: "",
      FOND_SC_NM: "",
      ORG_RDNZC: "",
      ORG_RDNMA: "",
      ORG_RDNDA: "",
      ORG_TELNO: "",
      COEDU_SC_NM: "",
      HMPG_ADRES: "",
      FOND_YMD: 0,
    },
    duplicatedName: [],
    schedule: [],
    meal: {},
    nutrientDisplay: "none",
    originCountryDisplay: "none",
    schoolNameInput: "",
  };

  constructor(props: JJWAK.Page.Props<"Index">) {
    super(props);
  }

  handleDuplicatedName() {
    const arr = [];
    for (let i = 0; i < this.state.duplicatedName.length; i++) {
      arr.push(
        <>
          <br />
          <Button
            id={`duplicatedName${i}`}
            onClick={(e) => {
              this.setState({ schoolData: this.state.duplicatedName[i] });
            }}
          >
            {this.state.duplicatedName[i].SCHUL_NM} (
            {this.state.duplicatedName[i].ATPT_OFCDC_SC_NM})
          </Button>
        </>
      );
    }
    return arr;
  }

  render(): React.ReactNode {
    return (
      <article>
        <Center display={this.state.schoolData.SCHUL_NM ? "none" : "block"}>
          <Stack spacing="2" alignContent="center">
            <Text>학교명을 입력하세요.</Text>
            <Input
              id="schoolNameInput"
              type="text"
              w="200px"
              onChange={(e) => {
                this.setState({ schoolNameInput: e.target.value });
              }}
            ></Input>
            <Button
              onClick={async () => {
                const res = (
                  await Axios.get(
                    `/school/info?schoolName=${this.state.schoolNameInput}`
                  )
                ).data;
                if (res.length > 1) {
                  this.setState({ duplicatedName: res });
                } else {
                  this.setState({
                    schoolData: res[0],
                  });
                }
              }}
            >
              학교 검색
            </Button>
          </Stack>
        </Center>
        <Center>
          <Stack spacing="2" alignContent="center">
            {this.state.duplicatedName.length > 1
              ? this.handleDuplicatedName()
              : ""}
          </Stack>
        </Center>
        {this.state.schoolData.SCHUL_NM && (
          <>
            <About schoolData={this.state.schoolData} />
            <Comment schoolData={this.state.schoolData} />
            <Schedule schoolData={this.state.schoolData} />
            <Meal schoolData={this.state.schoolData} />
          </>
        )}
      </article>
    );
  }
}
Bind(Index);
