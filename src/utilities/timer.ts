import { DurationType } from "../types/types";
import { useEffect } from "react";

interface CountdownType {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useTimer = ({
  daysDuration,
  hourDuration,
  minuteDuration,
  secondsDuration,
}: DurationType) => {
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  console.log(tempDay);

  const deadlineDate = new Date(
    tempYear,
    tempMonth,
    tempDay + daysDuration,
    hourDuration,
    minuteDuration,
    secondsDuration
  );
  console.log(deadlineDate);

  const deadlineTime = deadlineDate.getTime();

  let hours;
  let minutes;
  let seconds;
  let days;
  let countdown;

  const getRemainingTime = () => {
    const today = new Date().getTime();
    const duration = deadlineTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    days = duration / oneDay;
    days = Math.floor(days);

    hours = Math.floor((duration % oneDay) / oneHour);
    minutes = Math.floor((duration % oneHour) / oneMinute);
    seconds = Math.floor((duration % oneMinute) / 1000);

    const format = ({ prop }: any) => {
      if (prop < 10) {
        return `0${prop}`;
      } else {
        return prop;
      }
    };

    format({ hours });
    format({ minutes });
    format({ seconds });
  };

  getRemainingTime();

  return { hours, minutes, seconds, getRemainingTime };
};
