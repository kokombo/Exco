import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { UserProfile, MoreCard } from "../../components";
import { PADDING, COLORS, GAP, SIZE } from "../../../constants";

const More = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.header}>More</Text>

      <UserProfile />

      <View style={styles.wrapper}>
        <View style={styles.container}>
          <MoreCard
            heading={"Leaderboards"}
            subheading={"You can view your high scores here"}
          />
          <MoreCard
            heading={"Achievements"}
            subheading={"Track and unlock in-game achievements"}
          />
          <MoreCard
            heading={"Tutorials"}
            subheading={"Access gameplay tutorials or guides"}
          />
        </View>

        <View style={styles.line} />

        <View style={styles.container}>
          <MoreCard
            heading={"Notifications"}
            subheading={"It can be toggled on and off."}
          />
          <MoreCard heading={"Privacy"} subheading={"Control your privacy."} />
          <MoreCard heading={"Support"} subheading={"We're here to help"} />
          <MoreCard
            heading={"Rate us"}
            subheading={"Your experience made better"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginHorizontal: PADDING.normal,
    gap: GAP.mlarge,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
    minWidth: "100%",
  },
  container: {
    gap: GAP.normal,
  },
  wrapper: {
    gap: GAP.mlarge,
  },
  header: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.accent,
  },
});
