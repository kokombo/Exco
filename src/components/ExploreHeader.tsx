import { StyleSheet, Text, View } from "react-native";
import Search from "./Search";
import { COLORS, GAP, RADIUS, SIZE } from "../../constants";
import TopEarners from "./TopEarners";

const ExploreHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>What would you like to play?</Text>
        <Search />
      </View>

      <TopEarners />

      <Text style={styles.earn}>Play and earn coin </Text>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  card: {
    height: 165,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: RADIUS.large,
    alignItems: "center",
  },
  heading: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.black,
    width: 238,
    textAlign: "center",
  },
  earn: {
    fontSize: SIZE.base,
    fontWeight: "600",
    color: COLORS.accent,
  },
  container: {
    gap: GAP.normal,
    marginBottom: 16,
  },
});
