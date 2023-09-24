import { StyleSheet, Text, View, Image } from "react-native";
import { TransactionsType } from "../types/types";
import { COLORS, GAP, RADIUS, SIZE, asset } from "../../constants";

const TransactionCard = ({ item }: { item: TransactionsType }) => {
  let sign;
  let icon;

  if (item?.type.toLowerCase() === "receive") {
    icon = asset.receive;
    sign = "+";
  } else {
    icon = asset.send;
    sign = "-";
  }

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.wallet}>{item.date} </Text>
      </View>

      <View style={styles.info_wrapper}>
        <View style={styles.type_wrapper}>
          <View style={styles.image_wrapper}>
            <Image source={icon} resizeMode="contain" style={styles.icon} />
          </View>

          <View style={styles.wallet_wrapper}>
            <Text style={styles.type}> {item.type} </Text>
            <Text style={styles.wallet}> {item.wallet} </Text>
          </View>
        </View>

        <View>
          <Text style={styles.amount}>
            {sign}
            {item.amount} Sol
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 65,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image_wrapper: {
    height: 32,
    width: 32,
    borderRadius: RADIUS.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
  },
  icon: {
    height: 18,
    width: 18,
  },
  type_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.base,
  },
  wallet_wrapper: {
    flexDirection: "column",
    gap: GAP.small,
  },
  info_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  type: {
    fontSize: SIZE.small,
    color: COLORS.accent,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  wallet: {
    fontSize: SIZE.xsmall,
    color: COLORS.accent,
  },
  amount: {
    fontSize: SIZE.xsmall,
    color: COLORS.accent,
    fontWeight: "bold",
  },
});

export default TransactionCard;
