import { Image, type ImageSourcePropType, StyleSheet } from "react-native";
import { RADIUS } from "../../constants";

type ImageProp = {
  image: ImageSourcePropType;
};

const OnboardingImage = ({ image }: ImageProp) => {
  return <Image source={image} resizeMode="cover" style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    borderRadius: RADIUS.large,
    height: "50%",
    width: "100%",
  },
});

export default OnboardingImage;
