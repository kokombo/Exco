import { StyleSheet, Text, View } from "react-native";
import { COLORS, GAP } from "../../constants";
import { TimeProp } from "../types/types";

const TimeLeft = ({ days, hours, seconds, minutes }: TimeProp) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Time left</Text>
      <Text style={styles.duration}>
        {days}d : {hours}h : {minutes}m : {seconds}s
      </Text>
    </View>
  );
};

export default TimeLeft;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.small,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.accent,
  },
  duration: {
    fontSize: 10,
    color: COLORS.accent,
  },
});
