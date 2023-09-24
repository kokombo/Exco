import { View, StyleSheet } from "react-native";
import { asset, COLORS, PADDING, GAP } from "../../../constants";
import { OnboardingText, Dot, OnboardingImage } from "../../components";

const InfoB = ({ navigation }: any) => {
  const onPress = () => {
    navigation.navigate("infoC");
  };

  return (
    <View style={styles.container}>
      <OnboardingImage image={asset.isjunctio} />

      <Dot
        dotA={asset.inactiveDot}
        dotB={asset.activeDot}
        dotC={asset.inactiveDot}
      />

      <OnboardingText
        heading="Games on Exco earn you Solana coins coins"
        subheading="You will need to play games in order to earn more Solana Coins in order to progress in the game"
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
export default InfoB;
