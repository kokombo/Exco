import {
  StyleSheet,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { games } from "../../../constants/data";
import { GamesType } from "../../types/types";
import { useState } from "react";
import { GameCard, GamesHeader } from "../../components";
import { GAP, PADDING } from "../../../constants";

const Games = () => {
  const [data, setData] = useState<GamesType[] | null>(games);

  const list = data?.map((item) => item.genre);

  const genreList = list?.filter(
    (item, index) => list.indexOf(item) === index
  ) as string[];

  const renderItem: ListRenderItem<GamesType> = ({ item }) => (
    <GameCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: GamesType) => item.id}
        contentContainerStyle={{
          gap: GAP.small,
          padding: PADDING.normal,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: GAP.small,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<GamesHeader genreList={genreList} />}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
      />
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
