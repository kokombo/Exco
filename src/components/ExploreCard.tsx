import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { ExploreType } from "../types/types";
import { COLORS, GAP, RADIUS } from "../../constants";
import TimeLeft from "./TimeLeft";
import Amount from "./Amount";
import { useTimer } from "../utilities/timer";
import { TimeProp } from "../types/types";

const ExploreCard = ({ item }: { item: ExploreType }) => {
  const { days, hours, seconds, minutes }: TimeProp = useTimer({
    dayDuration: item.daysDuration,
    hourDuration: item.hoursDuration,
    minuteDuration: item.minutesDuration,
    secondsDuration: 0,
  });

  return (
    <ImageBackground
      source={item.image}
      style={styles.card}
      imageStyle={{ borderRadius: RADIUS.large, opacity: 20 }}
      resizeMode="cover"
    >
      <View style={styles.info_wrapper}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name} </Text>
          <Text style={styles.genre}>{item.genre} </Text>
          <Amount amount={item.amount} />
        </View>
        <View style={styles.duration_wrapper}>
          <TimeLeft
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <Pressable style={styles.play_button}>
            <Text>Play</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  card: {
    height: 192,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  info_wrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  info: {
    gap: GAP.small,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.accent,
    textTransform: "capitalize",
  },
  genre: {
    fontSize: 10,
    color: COLORS.accent,
    textTransform: "capitalize",
  },
  play_button: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: RADIUS.large,
  },
  duration_wrapper: {
    gap: GAP.small,
    alignItems: "flex-end",
  },
});
