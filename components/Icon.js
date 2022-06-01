import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export const UnBookmarked = () => {
  return <FontAwesome name="bookmark-o" size={24} color="black" />;
};

export const Bookmarked = () => {
  return <FontAwesome name="bookmark" size={24} color="black" />;
};

export const UncheckedBox = () => {
  return <Fontisto name="checkbox-passive" size={24} color="black" />;
};

export const CheckedBox = () => {
  return <Fontisto name="checkbox-active" size={24} color="black" />;
};
