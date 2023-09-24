import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Games, Events, Wallet, More } from "../screens/main";
import { Image } from "react-native";
import { asset, RADIUS, COLORS, SIZE } from "../../constants";

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
              <Image
                source={focused ? asset.activeExplore : asset.inactiveExplore}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "games") {
            return (
              <Image
                source={focused ? asset.activeGames : asset.inactiveGames}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "events") {
            return (
              <Image
                source={focused ? asset.activeEvents : asset.inactiveEvents}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "wallet") {
            return (
              <Image
                source={focused ? asset.activeWallet : asset.inactiveWallet}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            );
          } else {
            return (
              <Image
                source={focused ? asset.activeMore : asset.inactiveMore}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
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
