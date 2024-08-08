import { View, StyleSheet } from "react-native";
import { asset, COLORS, GAP, PADDING } from "../../../constants";
import { OnboardingText, Dot, OnboardingImage } from "../../components";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";

const InfoA = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const onPress = () => {
    navigation.navigate("infoB");
  };

  return (
    <View style={styles.container}>
      <OnboardingImage image={asset.hogwarts} />

      <Dot
        dotA={asset.activeDot}
        dotB={asset.inactiveDot}
        dotC={asset.inactiveDot}
      />

      <OnboardingText
        heading="Exco app lets you play games and earn Solana Coins"
        subheading="As you play games and accomplish rewards, you will accumulate Solana Coins"
        cta="Next"
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
});
export default InfoA;
