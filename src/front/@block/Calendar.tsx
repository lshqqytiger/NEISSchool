import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

interface CalendarEvent {
  title: string;
  date: Date;
}

type Props = {
  today: Date;
  events: CalendarEvent[];
};

function Calendar({ today, events }: Props) {
  const [date, setDate] = useState(today);
  const [selectedDateEvents, setSelectedDateEvents] = useState<CalendarEvent[]>(
    []
  );

  useEffect(() => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      1 - firstDay
    );
    const startTime = startDate.getTime();
    const endTime = new Date(
      new Date(startDate).setDate(startDate.getDate() + 34)
    ).getTime();
    const arr: CalendarEvent[] = [];
    for (let i of events) {
      if (i.date.getTime() > startTime && i.date.getTime() < endTime)
        arr.push(i);
    }
  }, [date]);

  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            setDate(today);
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
          <Box>일</Box>
          <Box>월</Box>
          <Box>화</Box>
          <Box>수</Box>
          <Box>목</Box>
          <Box>금</Box>
          <Box>토</Box>
        </Box>
        <Box>
          {Array(35).map((v, i) => {
            return <Box>{}</Box>;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;
