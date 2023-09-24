import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useTimer } from "../../utilities/timer";
import { DurationType } from "../../types/types";
import { useEffect } from "react";

const Explore = () => {
  const { hours, seconds, minutes, getRemainingTime } = useTimer({
    daysDuration: 1,
    hourDuration: 10,
    minuteDuration: 30,
    secondsDuration: 30,
  });

  console.log(hours, minutes, seconds);

  return (
    <SafeAreaView>
      <Text>Explore</Text>
      <Text>{hours} </Text>
      <Text>{minutes} </Text>
      <Text>{seconds} </Text>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
