import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { RADIUS, COLORS, asset, GAP, SIZE } from "../../constants";

const UserProfile = () => {
  return (
    <View style={styles.profile_wrapper}>
      <View style={styles.picture_container}>
        <Image source={asset.alan} resizeMode="contain" style={styles.image} />
        <View style={styles.name_container}>
          <Text style={styles.username}>Alan Carrington</Text>
          <Text style={styles.account}>Account Details</Text>
        </View>
      </View>

      <Pressable>
        <Image
          source={asset.arrowRight}
          resizeMode="contain"
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  icon: {
    width: 20,
    height: 20,
  },
  picture_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: GAP.base,
  },
  name_container: {
    gap: GAP.xsmall,
  },
  username: {
    color: COLORS.accent,
    fontWeight: "600",
    fontSize: SIZE.base,
  },
  account: {
    color: COLORS.accent,
    fontSize: SIZE.xsmall,
  },
  profile_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
