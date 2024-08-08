import { StyleSheet, View, ImageBackground } from "react-native";
import { YellowButton, BlackButton } from "../../components/Button";
import { GAP, COLORS, PADDING } from "../../../constants";
import ConnectWallet from "./ConnectWallet";
import { useState } from "react";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";

const SignIn = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const connectWallet = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const appleSignIn = () => {
    navigation.navigate("tab");
  };

  return (
    <View style={styles.container}>
      <View style={styles.button_wrapper}>
        <YellowButton onPress={connectWallet} cta={"Connect Solana Wallet"} />
        <BlackButton onPress={appleSignIn} cta="Sign up with apple" />
        <ConnectWallet visible={modalVisible} onRequestClose={closeModal} />
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
