import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { Stack, Heading } from "@chakra-ui/react";
import { Scheduler, MonthView } from "@progress/kendo-react-scheduler";

const Schedule = ({ schoolData }: any) => {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const fetchSchedule = useCallback(() => {
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
          const schedule: any = [];

          if (!data.length)
            return console.error("학사일정을 불러오지 못했습니다.");

          for (let i = 0; i < data.length; i++) {
            const startDate = new Date();
            const endDate = new Date();
            const newYear = Number(data[i].AA_YMD.slice(0, 4));
            const newMonth = Number(
              data[i].AA_YMD.slice(4, 6).split("0").join("")
            );
            const newDate = Number(
              data[i].AA_YMD.slice(6, 8).split("0").join("")
            );

            startDate.setFullYear(newYear);
            startDate.setMonth(newMonth - 1);
            startDate.setDate(newDate);
            endDate.setFullYear(newYear);
            endDate.setMonth(newMonth - 1);
            endDate.setDate(newDate + 1);
            schedule.push({
              id: i + 4,
              title: data[i].EVENT_NM,
              description: `${data[i].EVENT_NM}\n휴업 여부: ${data[i].SBTR_DD_SC_NM}`,
              startTimezone: null,
              start: startDate,
              end: endDate,
              endTimezone: null,
              recurrenceRule: null,
              recurrenceId: null,
              recurrenceExceptions: null,
              isAllDay: false,
            });
          }
          setSchedule(schedule);
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
      id="scheduleBox"
      style={{
        display: schoolData.ATPT_OFCDC_SC_NM ? "block" : "none",
      }}
    >
      <Heading fontSize="3xl">학사일정</Heading>
      <Scheduler data={schedule} defaultDate={date}>
        <MonthView
          title="Month"
          selectedDateFormat="{0:M}"
          selectedShortDateFormat="{0:M}"
        />
      </Scheduler>
    </Stack>
  );
};

export default Schedule;
