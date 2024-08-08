import { Text, View, StyleSheet } from "react-native";
import type { Onboarding } from "../types/types";
import { COLORS, GAP, SIZE } from "../../constants";
import { YellowButton } from "./Button";

const OnboardingText = ({ heading, subheading, cta, onPress }: Onboarding) => {
  return (
    <View style={styles.main_wrapper}>
      <View style={styles.text_wrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subheading}>{subheading}</Text>
      </View>

      <YellowButton onPress={onPress} cta={cta} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.accent,
    textAlign: "left",
  },
  subheading: {
    fontSize: SIZE.regular,
    fontWeight: "normal",
    color: COLORS.accent,
    textAlign: "left",
  },
  text_wrapper: {
    flexDirection: "column",
    gap: GAP.large,
    alignItems: "flex-start",
  },
  main_wrapper: {
    flexDirection: "column",
    gap: GAP.xxl,
  },
});
export default OnboardingText;
