import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { COLORS, GAP, RADIUS, SIZE, asset } from "../../constants";
import type { Onboarding } from "../types/types";

export const YellowButton = ({ onPress, cta }: Onboarding) => {
  return (
    <Pressable onPress={onPress} style={[styles.yellow_button, styles.button]}>
      <Text style={[styles.black_text, styles.text]}>{cta}</Text>
    </Pressable>
  );
};

export const BlackButton = ({ onPress, cta }: Onboarding) => {
  return (
    <Pressable onPress={onPress} style={[styles.black_button, styles.button]}>
      <View style={styles.icon_wrapper}>
        <Image source={asset.apple} style={styles.icon} resizeMode="contain" />
        <Text style={[styles.text, styles.white_text]}>{cta}</Text>
      </View>
    </Pressable>
  );
};

export const PlainlessButton = ({ onPress, cta }: Onboarding) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, styles.plainless_button]}
    >
      <Text style={[styles.text, styles.white_text]}>{cta} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    minwidth: "100%",
    borderRadius: RADIUS.normal,
    alignItems: "center",
    justifyContent: "center",
  },
  yellow_button: {
    backgroundColor: COLORS.secondary,
  },
  black_button: {
    backgroundColor: COLORS.dark,
  },
  text: {
    textTransform: "capitalize",
    fontSize: SIZE.small,
    fontWeight: "600",
  },
  black_text: {
    color: COLORS.black,
  },
  white_text: {
    color: COLORS.accent,
  },
  icon_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.normal,
  },
  icon: {
    width: 24,
    height: 24,
  },
  plainless_button: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
});
