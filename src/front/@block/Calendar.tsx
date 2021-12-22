import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

interface CalendarEvent {
  title: string;
  date: Date;
}

type Props = {
  events: CalendarEvent[];
};

const Calendar = ({ events }: Props) => {
  const [date, setDate] = useState(new Date());
  const [selectedMonthEvents, setSelectedMonthEvents] = useState<
    CalendarEvent[]
  >([]);

  useEffect(() => {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    startDate.setDate(1 - startDate.getDay());
    const endDate = new Date(
      new Date(startDate).setDate(startDate.getDate() + 34)
    );
    const filteredEvents = events.filter(
      (event) =>
        event.date.getTime() >= startDate.getTime() &&
        event.date.getTime() <= endDate.getTime()
    );
    const arr = [];
    console.log(startDate, endDate);
    for (
      let i = new Date(startDate);
      i.getTime() != endDate.getTime() + 86400000;
      i = new Date(i.setDate(i.getDate() + 1))
    ) {
      const gap = (i.getTime() - startDate.getTime()) / 86400000;
      console.log(gap);
      for (let j of filteredEvents) {
        if (j.date.getTime() === i.getTime()) arr[gap] = j;
      }
      if (!arr[gap])
        arr[gap] = {
          title: "",
          date: i,
        } as CalendarEvent;
    }
    console.log(arr);
    setSelectedMonthEvents(arr);
  }, [date]);

  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            setDate(new Date());
          }}
        >
          오늘
        </Button>
        <Button
          onClick={() => {
            setDate(
              new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
            );
          }}
        >
          ◀
        </Button>
        <Button
          onClick={() => {
            setDate(
              new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
            );
          }}
        >
          ▶
        </Button>
        <Text>
          {date.getFullYear()}년 {date.getMonth() + 1}월
        </Text>
      </Box>
      <Box>
        <Box>
          <Box className="calendar_week">일</Box>
          <Box className="calendar_week">월</Box>
          <Box className="calendar_week">화</Box>
          <Box className="calendar_week">수</Box>
          <Box className="calendar_week">목</Box>
          <Box className="calendar_week">금</Box>
          <Box className="calendar_week">토</Box>
        </Box>
        <Box>
          {selectedMonthEvents.map((v, i) => {
            return (
              <>
                <Box className={i % 7 == 0 ? "" : "calendar_week"}>
                  {v.date.getDate()}
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
