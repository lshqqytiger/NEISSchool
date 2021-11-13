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

interface ScheduleElement {
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
  schedule: Array<ScheduleElement>;
  meal: any;
  nutrientDisplay: string;
  originCountryDisplay: string;
  schoolNameInput: string;
  isAboutVisible: boolean;
  isCommentVisible: boolean;
  isScheduleVisible: boolean;
  isMealVisible: boolean;
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
    isAboutVisible: false,
    isCommentVisible: false,
    isScheduleVisible: false,
    isMealVisible: false,
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
        <Center>
          <Stack spacing="2" alignContent="center">
            <Text>학교명을 입력하세요.</Text>
            <Input
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
        <br />
        {this.state.schoolData.SCHUL_NM && (
          <Center>
            <Box
              color={this.state.isAboutVisible ? "blue.500" : "gray.500"}
              onClick={() => {
                this.setState({ isAboutVisible: !this.state.isAboutVisible });
              }}
            >
              정보
            </Box>
            &nbsp;
            <Box
              color={this.state.isCommentVisible ? "blue.500" : "gray.500"}
              onClick={() => {
                this.setState({
                  isCommentVisible: !this.state.isCommentVisible,
                });
              }}
            >
              평가
            </Box>
            &nbsp;
            <Box
              color={this.state.isScheduleVisible ? "blue.500" : "gray.500"}
              onClick={() => {
                this.setState({
                  isScheduleVisible: !this.state.isScheduleVisible,
                });
              }}
            >
              학사일정
            </Box>
            &nbsp;
            <Box
              color={this.state.isMealVisible ? "blue.500" : "gray.500"}
              onClick={() => {
                this.setState({ isMealVisible: !this.state.isMealVisible });
              }}
            >
              급식
            </Box>
          </Center>
        )}
        <br />
        {this.state.schoolData.SCHUL_NM && (
          <Stack spacing="4" alignItems="center">
            {this.state.isAboutVisible && (
              <About schoolData={this.state.schoolData} />
            )}
            {this.state.isCommentVisible && (
              <Comment schoolData={this.state.schoolData} />
            )}
            {this.state.isScheduleVisible && (
              <Schedule schoolData={this.state.schoolData} />
            )}
            {this.state.isMealVisible && (
              <Meal schoolData={this.state.schoolData} />
            )}
          </Stack>
        )}
      </article>
    );
  }
}
Bind(Index);
