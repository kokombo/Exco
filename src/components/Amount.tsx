import { StyleSheet, Text, View, Image } from "react-native";
import { SIZE, COLORS, GAP, RADIUS, asset } from "../../constants";

const Amount = ({ amount }: { amount: number }) => {
  return (
    <View style={styles.point_wrapper}>
      <Image source={asset.solana} style={styles.icon} resizeMode="contain" />

      <Text style={styles.genre}>{amount} </Text>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  genre: {
    fontSize: SIZE.xsmall,
    color: COLORS.accent,
    textTransform: "capitalize",
  },
  icon: {
    height: 16,
    width: 16,
    borderRadius: RADIUS.full,
  },
  point_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.small,
  },
});
