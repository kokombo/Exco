import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { explore } from "../../../constants/data";
import { ExploreType } from "../../types/types";
import { useState } from "react";
import { ListRenderItem } from "react-native";
import { ExploreCard, ExploreHeader } from "../../components";
import { PADDING, GAP } from "../../../constants";

const Explore = () => {
  const [data, setData] = useState<ExploreType[]>(explore);

  const renderItem: ListRenderItem<ExploreType> = ({ item }) => {
    return <ExploreCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: GAP.small,
          paddingHorizontal: PADDING.normal,
          paddingVertical: PADDING.large,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ExploreHeader}
      />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
