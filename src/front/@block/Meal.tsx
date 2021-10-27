import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { Stack, Heading, Box, Button } from "@chakra-ui/react";
import _ReactHTMLParser, { HTMLReactParserOptions } from "html-react-parser";

import { AlertDialog } from "./AlertDialog";

const ReactHTMLParser = (
  html: string | null | undefined,
  options?: HTMLReactParserOptions | undefined
) => {
  if (html) return _ReactHTMLParser(html, options);
  else return "";
};

const parseDate = (date: Date) => {
  if (typeof date == "string") return date;

  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}${String(date.getDate()).padStart(2, "0")}`;
};

const Meal = ({ schoolData }: any) => {
  const [meal, setMeal] = useState({
    DDISH_NM: "",
    NTR_INFO: "",
    ORPLC_INFO: "",
    CAL_INFO: "",
  });
  const [date, setDate] = useState(new Date());

  const fetchMeal = useCallback(() => {
    const fetch = async () => {
      setMeal({ DDISH_NM: "", NTR_INFO: "", ORPLC_INFO: "", CAL_INFO: "" });
      await Axios.get("/school/meal", {
        params: {
          ATPT_OFCDC_SC_CODE: schoolData.ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE: schoolData.SD_SCHUL_CODE,
          MLSV_YMD: parseDate(date),
        },
      }).then(
        ({ data }) => {
          setMeal(data);
        },
        (e) => {
          console.error(e);
        }
      );
    };
    fetch();
  }, [date, schoolData]);

  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);

  return (
    <Stack
      spacing="2"
      alignContent="center"
      id="mealBox"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Heading fontSize="3xl">급식</Heading>
      <Box id="mealArticle">
        {ReactHTMLParser(meal.DDISH_NM)}
        <br />
        {meal.CAL_INFO && "열량: " + meal.CAL_INFO}
        <br />
        <AlertDialog title="영양 성분" text="영양 성분">
          {ReactHTMLParser(meal.NTR_INFO)}
        </AlertDialog>
        &nbsp;
        <AlertDialog title="원산지 정보" text="원산지 정보">
          {ReactHTMLParser(meal.ORPLC_INFO)}
        </AlertDialog>
        <br />
        <Button
          className="tailButton"
          onClick={() => {
            let copied = new Date(date);
            copied.setDate(date.getDate() - 1);
            setDate(copied);
            fetchMeal();
          }}
        >
          이전
        </Button>
        <Button
          className="tailButton"
          onClick={() => {
            let copied = new Date(date);
            copied.setDate(date.getDate() + 1);
            setDate(copied);
            fetchMeal();
          }}
        >
          다음
        </Button>
      </Box>
    </Stack>
  );
};

export default Meal;
