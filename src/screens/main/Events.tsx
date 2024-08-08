import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  type ListRenderItem,
} from "react-native";
import { EventCard } from "../../components";
import { useState } from "react";
import { event } from "../../../constants/data";
import type { EventsType } from "../../types/types";
import { COLORS, GAP, PADDING, SIZE } from "../../../constants";

const Events = () => {
  const [data, setData] = useState<EventsType[] | null>(event);

  const renderItem: ListRenderItem<EventsType> = ({ item }) => {
    return <EventCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: EventsType) => item.id}
        contentContainerStyle={{
          gap: GAP.small,
          paddingHorizontal: PADDING.normal,
          paddingVertical: PADDING.large,
        }}
        ListHeaderComponentStyle={{ marginBottom: 24 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.header}>Choose Any Event</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: SIZE.xxl,
    fontWeight: "bold",
    color: COLORS.accent,
  },
  container: {
    flex: 1,
  },
});

export default Events;
