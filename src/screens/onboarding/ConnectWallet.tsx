import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { YellowButton, PlainlessButton } from "../../components/Button";
import { COLORS, GAP, PADDING, RADIUS, SIZE } from "../../../constants";
import { useState } from "react";

interface Prop {
  visible: boolean;
  onRequestClose: () => void;
}

interface Wallet {
  id: string;
  wallet: string;
}

const wallets: Wallet[] = [
  { id: "1", wallet: "Phantom" },
  { id: "2", wallet: "Solana" },
  { id: "3", wallet: "MetaMask" },
  { id: "4", wallet: "Coinbase" },
];

const ConnectWallet = ({ visible, onRequestClose }: Prop) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [data, setData] = useState<Wallet[]>(wallets);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onRequestClose}
    >
      <View style={styles.modal_view}>
        <View style={styles.select_wrapper}>
          <Text style={styles.heading}>Connect your Primary Wallet</Text>

          <View style={styles.wallets_container}>
            {data?.map((item) => {
              return (
                <View key={item.id} style={styles.wallet_wrapper}>
                  <Pressable
                    style={styles.select_wallet}
                    onPress={() => {
                      setSelected(true);
                    }}
                  ></Pressable>
                  <Text style={styles.text}>{item.wallet} </Text>
                </View>
              );
            })}
          </View>
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
  select_wrapper: {
    paddingTop: 40,
    gap: GAP.xxl,
  },
  select_wallet: {
    height: 24,
    width: 24,
    borderRadius: RADIUS.normal,
    backgroundColor: COLORS.accent,
  },
  wallet_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.base,
  },
  text: {
    color: COLORS.accent,
  },
  wallets_container: {
    gap: GAP.normal,
  },
});
