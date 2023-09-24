import { View, Image, StyleSheet } from "react-native";
import { ImageSourcePropType } from "react-native";
import { GAP, RADIUS } from "../../constants";

type DotType = {
  dotA: ImageSourcePropType;
  dotB: ImageSourcePropType;
  dotC: ImageSourcePropType;
};

const Dot = ({ dotA, dotB, dotC }: DotType) => {
  return (
    <View style={styles.wrapper}>
      <Image source={dotA} style={styles.dot} />
      <Image source={dotB} style={styles.dot} />
      <Image source={dotC} style={styles.dot} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.small,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: RADIUS.full,
  },
});

export default Dot;
