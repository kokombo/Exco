import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { COLORS, GAP, SIZE, asset } from "../../constants";
import type { MoreType } from "../types/types";

const MoreCard = ({ heading, subheading }: MoreType) => {
  return (
    <View style={styles.container}>
      <View style={styles.text_wrapper}>
        <Text style={styles.heading}>{heading} </Text>
        <Text style={styles.subheading}> {subheading} </Text>
      </View>

      <Pressable>
        <Image
          source={asset.arrowRight}
          resizeMode="contain"
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default MoreCard;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  text_wrapper: {
    gap: GAP.xsmall,
  },
  heading: {
    color: COLORS.secondary,
    fontSize: SIZE.small,
    fontWeight: "600",
  },
  subheading: {
    color: COLORS.accent,
    fontSize: SIZE.xsmall,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
