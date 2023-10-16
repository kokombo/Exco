import { Image } from "react-native";
import { ImageSourcePropType } from "react-native";

type Prop = {
  source: ImageSourcePropType;
};

const TabImage = ({ source }: Prop) => {
  return (
    <Image
      source={source}
      style={{ height: 30, width: 30 }}
      resizeMode="contain"
    />
  );
};

export default TabImage;
