import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";
import { InfoA, InfoB, InfoC, SignIn, Splash } from "../screens/onboarding";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      screenListeners={{
        focus: () => {
          Animated.timing(av, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      }}
    >
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="infoA" component={InfoA} />
      <Stack.Screen name="infoB" component={InfoB} />
      <Stack.Screen name="infoC" component={InfoC} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
