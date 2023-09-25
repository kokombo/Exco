import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EarnersType } from "../types/types";
import { earners } from "../../constants/data";
import { useState } from "react";
import IndividualEarner from "./IndividualEarner";
import { COLORS, GAP, SIZE } from "../../constants";

const TopEarners = () => {
  const [data, setData] = useState<EarnersType[]>(earners);

  const renderItem: ListRenderItem<EarnersType> = ({ item }) => {
    return <IndividualEarner item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_wrapper}>
        <Text style={styles.top_earners}>Top earners</Text>
        <Text style={styles.see_more}>see more</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={{ gap: GAP.base }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopEarners;

const styles = StyleSheet.create({
  header_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    gap: GAP.base,
  },
  top_earners: {
    fontSize: SIZE.base,
    fontWeight: "600",
    color: COLORS.accent,
  },
  see_more: {
    fontSize: SIZE.xsmall,
    color: COLORS.secondary,
  },
});
