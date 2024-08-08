import { View, StyleSheet } from "react-native";
import { asset, COLORS, PADDING, GAP, RADIUS } from "../../../constants";
import { OnboardingText, Dot, OnboardingImage } from "../../components";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";

const InfoC = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const onPress = () => {
    navigation.navigate("signin");
  };

  return (
    <View style={styles.container}>
      <OnboardingImage image={asset.apex} />

      <Dot
        dotA={asset.inactiveDot}
        dotB={asset.inactiveDot}
        dotC={asset.activeDot}
      />

      <OnboardingText
        heading="The passport to endless gaming adventures"
        subheading="You will discover, there is no end to the gaming adventures in Solana and the riches you 
        can collect."
        cta="Get Started"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: PADDING.normal,
    flexDirection: "column",
    gap: GAP.xlarge,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  image: {
    borderRadius: RADIUS.large,
    height: 335,
    width: "100%",
  },
});
export default InfoC;
