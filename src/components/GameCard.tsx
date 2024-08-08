import { StyleSheet, Image, Pressable } from "react-native";
import type { GamesType } from "../types/types";
import { RADIUS } from "../../constants";

const GameCard = ({ item }: { item: GamesType }) => {
  return (
    <Pressable style={styles.card}>
      <Image source={item.image} resizeMode="cover" style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 173,
    borderRadius: RADIUS.normal,
    width: "50%",
  },
  image: {
    height: 173,
    width: "100%",
    borderRadius: RADIUS.normal,
  },
});

export default GameCard;
