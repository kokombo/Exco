import { StyleSheet, View, ImageBackground } from "react-native";
import { YellowButton, BlackButton } from "../../components/Button";
import { GAP, COLORS, PADDING } from "../../../constants";

const SignIn = ({ navigation }: any) => {
  const connectWallet = () => {};

  const appleSignIn = () => {
    navigation.navigate("tab");
  };

  return (
    <View style={styles.container}>
      <View style={styles.button_wrapper}>
        <YellowButton onPress={connectWallet} cta={"Connect Solana Wallet"} />
        <BlackButton onPress={appleSignIn} cta="Sign up with apple" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    paddingHorizontal: PADDING.normal,
  },
  button_wrapper: {
    flexDirection: "column",
    gap: GAP.base,
    marginBottom: 100,
  },
});

export default SignIn;
