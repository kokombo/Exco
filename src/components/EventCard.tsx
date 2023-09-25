import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { EventsType } from "../types/types";
import { COLORS, GAP, PADDING, RADIUS, SIZE, asset } from "../../constants";
import Amount from "./Amount";

const EventCard = ({ item }: { item: EventsType }) => {
  return (
    <Pressable style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.info_wrapper}>
        <Text style={styles.genre}>{item.genre} </Text>

        <Text style={styles.name}>{item.name} </Text>

        <Amount amount={item.point} />

        <Text style={styles.play}>Play to earn</Text>
      </View>
    </Pressable>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    height: 96,
    width: "100%",
    borderRadius: RADIUS.normal,
    borderWidth: 0.5,
    borderColor: COLORS.accent,
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.mlarge,
    paddingVertical: PADDING.small,
    paddingHorizontal: PADDING.normal,
  },
  info_wrapper: {
    flexDirection: "column",
    gap: GAP.small,
  },
  icon: {
    height: 16,
    width: 16,
    borderRadius: RADIUS.full,
  },
  image: {
    width: 110,
    height: 80,
    borderRadius: RADIUS.normal,
  },
  genre: {
    fontSize: SIZE.xsmall,
    color: COLORS.accent,
    textTransform: "capitalize",
  },
  name: {
    fontSize: SIZE.small,
    color: COLORS.accent,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  play: {
    fontSize: SIZE.small,
    color: COLORS.secondary,
    fontWeight: "600",
  },
  point_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.small,
  },
});
