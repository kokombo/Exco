import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SIZE, COLORS, asset, RADIUS, GAP } from "../../constants";

const TransactionHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wallet</Text>

      <View style={styles.card}>
        <View style={styles.details}>
          <Text style={styles.earning}>Total Earning</Text>
          <Text style={styles.amount}>500.93 Solana</Text>
          <Text style={styles.earning}>$9437.67</Text>
        </View>

        <Image
          source={asset.scan}
          resizeMode="contain"
          style={styles.scan_icon}
        />

        <View style={styles.button_container}>
          <Pressable style={styles.button}>
            <Text style={styles.cta}>Send</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.cta}>Recieve</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.cta}>Swap</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.accent,
  },
  button: {
    backgroundColor: COLORS.accent,
    width: 72,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.normal,
  },
  cta: {
    color: COLORS.black,
    fontSize: SIZE.xsmall,
  },
  card: {
    backgroundColor: COLORS.secondary,
    height: 155,
    width: "100%",
    borderRadius: RADIUS.large,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  details_wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
  },
  details: {
    flexDirection: "column",
    gap: GAP.small,
    alignItems: "center",
  },
  earning: {
    fontSize: SIZE.regular,
    color: COLORS.black,
  },
  amount: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.black,
  },
  button_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.base,
  },
  container: {
    flexDirection: "column",
    gap: GAP.mlarge,
  },
  scan_icon: {
    height: 24,
    width: 24,
    position: "absolute",
    right: 15,
    top: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
    minWidth: "100%",
  },
});

export default TransactionHeader;
