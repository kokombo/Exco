import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootNavigator from "./src/navigations/RootNavigator";
import { COLORS } from "./constants";

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.primary,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
