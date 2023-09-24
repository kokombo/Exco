import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, GAP, RADIUS, SIZE } from "../../constants";

const RenderItem = ({ item }: { item: string }) => {
  return (
    <Pressable style={styles.filter_button}>
      <Text style={styles.button_text}>{item}</Text>
    </Pressable>
  );
};

const GamesHeader = ({ genreList }: { genreList: string[] }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading_text}>Select Your Favorite Games</Text>

      <View style={styles.button_wrapper}>
        {genreList.map((item, index) => {
          return <RenderItem item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: GAP.base,
  },
  filter_button: {
    width: 110,
    paddingVertical: 10,
    borderRadius: RADIUS.half,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: COLORS.black,
    fontSize: SIZE.small,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  heading_text: {
    color: COLORS.accent,
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    maxWidth: 200,
  },
  button_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "scroll",
  },
});
export default GamesHeader;
