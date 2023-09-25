import { StyleSheet, Text, View, Modal } from "react-native";
import { YellowButton, PlainlessButton } from "../../components/Button";
import { COLORS, GAP, PADDING, SIZE } from "../../../constants";

interface Prop {
  visible: boolean;
  onRequestClose: () => void;
}

const ConnectWallet = ({ visible, onRequestClose }: Prop) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onRequestClose}
    >
      <View style={styles.modal_view}>
        <View>
          <Text style={styles.heading}>Connect your Primary Wallet</Text>

          <View></View>
        </View>

        <View style={styles.button_wrapper}>
          <YellowButton cta={"Continue"} />
          <PlainlessButton cta={"I don't have a wallet"} />
        </View>
      </View>
    </Modal>
  );
};

export default ConnectWallet;

const styles = StyleSheet.create({
  modal_view: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: PADDING.normal,
    justifyContent: "space-between",
  },
  heading: {
    color: COLORS.accent,
    fontWeight: "bold",
    fontSize: SIZE.xxl,
  },
  button_wrapper: {
    gap: GAP.base,
    paddingBottom: 100,
  },
});
