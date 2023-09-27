import { StyleSheet, Text, View, Image } from "react-native";
import { EarnersType } from "../types/types";
import Amount from "./Amount";
import { COLORS, GAP, RADIUS, SIZE } from "../../constants";

const IndividualEarner = ({ item }: { item: EarnersType }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={item.image} resizeMode="contain" style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name} </Text>
        <Amount amount={item.amount} />
      </View>
    </View>
  );
};

export default IndividualEarner;

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  wrapper: {
    flexDirection: "row",
    gap: GAP.small,
    alignItems: "center",
  },
  info: {
    gap: GAP.xsmall,
  },
  name: {
    fontSize: SIZE.small,
    fontWeight: "600",
    color: COLORS.accent,
  },
});
