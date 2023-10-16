import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { COLORS, RADIUS, asset } from "../../constants";

const Search = () => {
  return (
    <View style={styles.container}>
      <Image
        source={asset.search}
        style={[styles.icon, styles.search_icon]}
        resizeMode="contain"
      />
      <TextInput style={styles.input} placeholder="Search games" />

      <Pressable style={styles.search_button}>
        <Image source={asset.clickSearch} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: RADIUS.xlarge,
    backgroundColor: COLORS.accent,
    paddingLeft: 54,
  },
  icon: {
    height: 24,
    width: 24,
  },
  search_icon: {
    position: "absolute",
    zIndex: 100,
    top: "50%",
    marginTop: -12,
    left: 14,
  },
  search_button: {
    height: 40,
    width: 40,
    borderRadius: RADIUS.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    position: "absolute",
    zIndex: 100,
    top: "50%",
    marginTop: -20,
    right: 14,
  },
});
