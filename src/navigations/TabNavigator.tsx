import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Games, Events, Wallet, More } from "../screens/main";
import { asset, COLORS, SIZE } from "../../constants";
import { TabImage } from "../components";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: COLORS.primary },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopWidth: 0,
          marginTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: SIZE.small,
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.accent,
        tabBarIcon: ({ focused }) => {
          if (route.name === "explore") {
            return (
              <TabImage
                source={focused ? asset.activeExplore : asset.inactiveExplore}
              />
            );
          } else if (route.name === "games") {
            return (
              <TabImage
                source={focused ? asset.activeGames : asset.inactiveGames}
              />
            );
          } else if (route.name === "events") {
            return (
              <TabImage
                source={focused ? asset.activeEvents : asset.inactiveEvents}
              />
            );
          } else if (route.name === "wallet") {
            return (
              <TabImage
                source={focused ? asset.activeWallet : asset.inactiveWallet}
              />
            );
          } else {
            return (
              <TabImage
                source={focused ? asset.activeMore : asset.inactiveMore}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="games" component={Games} />
      <Tab.Screen name="events" component={Events} />
      <Tab.Screen name="wallet" component={Wallet} />
      <Tab.Screen name="more" component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
