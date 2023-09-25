import { Alert } from "react-native";
import { DurationType } from "../types/types";
import { useEffect, useState } from "react";

export const useTimer = ({
  dayDuration,
  hourDuration,
  minuteDuration,
  secondsDuration,
}: DurationType) => {
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const deadlineDate = new Date(
    tempYear,
    tempMonth,
    tempDay + dayDuration,
    hourDuration,
    minuteDuration,
    secondsDuration
  );

  const deadlineTime = deadlineDate.getTime();

  let hours;
  let minutes;
  let seconds;
  let days;
  let countdown;

  const format = ({ prop }: { prop: number }) => {
    if (prop < 10 && prop !== 0) {
      return `0${prop}`;
    } else {
      return prop;
    }
  };

  const today = new Date().getTime();

  const [duration, setDuration] = useState<number>(deadlineTime - today);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(deadlineTime - today);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineDate]);

  const getRemainingTime = (duration: number) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    days = duration / oneDay;
    days = Math.floor(days);

    hours = Math.floor((duration % oneDay) / oneHour);
    minutes = Math.floor((duration % oneHour) / oneMinute);
    seconds = Math.floor((duration % oneMinute) / 1000);

    hours = format({ prop: hours });
    minutes = format({ prop: minutes });
    seconds = format({ prop: seconds });
  };

  getRemainingTime(duration);

  return { days, hours, minutes, seconds };
};
