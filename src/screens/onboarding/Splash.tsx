import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, SIZE, asset, GAP } from "../../../constants";
import { useEffect } from "react";

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => navigation.replace("infoA"), 4000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={asset.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.text}>EXCO</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 38,
    width: 38,
  },
  text: {
    fontSize: SIZE.large,
    color: COLORS.accent,
    fontWeight: "600",
  },
  wrapper: {
    flexDirection: "row",
    gap: GAP.base,
    alignItems: "center",
  },
});

export default Splash;
