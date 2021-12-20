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
    const startTime = new Date(date.getFullYear(), date.getMonth() - 1, 21);
    const endTime = new Date(date.getFullYear(), date.getMonth() + 1, 8);
    const filteredEvents = events.filter(
      (event) =>
        event.date.getTime() >= startTime.getTime() &&
        event.date.getTime() <= endTime.getTime()
    );
    const arr = [];
    for (let i = 0; i < 35; i++) {
      for (let j of filteredEvents) {
        if (j.date.getDate() === i + 1) arr[i] = j;
      }
      if (!arr[i])
        arr[i] = {
          title: "",
          date: new Date(
            new Date(arr[i - 1].date).setDate(
              new Date(arr[i - 1].date).getDate() + 1
            )
          ),
        } as CalendarEvent;
    }
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
            return <Box>{v.date.getDate()}</Box>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
