import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { Stack, Heading, Center } from "@chakra-ui/react";

import Calendar from "./Calendar";

interface CalendarEvent {
  title: string;
  date: Date;
}

const Schedule = ({ schoolData }: any) => {
  const [schedule, setSchedule] = useState<CalendarEvent[]>([]);
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const fetchSchedule = useCallback(() => {
    setIsLoading(true);
    const fetch = () => {
      setSchedule([]);
      Axios.get("/school/schedule", {
        params: {
          ATPT_OFCDC_SC_CODE: schoolData.ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE: schoolData.SD_SCHUL_CODE,
          AA_FROM_YMD: schoolData.AA_FROM_YMD || `${date.getFullYear()}0301`,
          AA_TO_YMD: schoolData.AA_TO_YMD || `${date.getFullYear() + 1}0220`,
        },
      }).then(
        ({ data }) => {
          const schedule: CalendarEvent[] = [];

          for (let i in data) {
            schedule.push({
              title: data[i].EVENT_NM,
              date: new Date(
                Number(data[i].AA_YMD.slice(0, 4)),
                Number(data[i].AA_YMD.slice(4, 6)) - 1,
                Number(data[i].AA_YMD.slice(6, 8))
              ),
            });
          }
          setSchedule(schedule);
          setIsLoading(false);
        },
        (e) => {
          console.error(e);
        }
      );
    };
    fetch();
  }, [date, schoolData]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  return (
    <Stack
      spacing="2"
      alignContent="center"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Center>
        <Heading fontSize="3xl">학사일정</Heading>
      </Center>
      {isLoading ? "로딩 중입니다." : <Calendar events={schedule} />}
    </Stack>
  );
};

export default Schedule;
