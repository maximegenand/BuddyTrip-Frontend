import { View, Text, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from "../styles/globals";
import SvgLogo from "./svg/SvgLogo";

export default function Logo(props) {
  const size = props.size ? props.size : 50;

  return (
    <View style={[props.style, {alignItems: "center"}]}>
      <SvgLogo style={{ alignSelf: "center" }} width={size} height={size} fill={GLOBAL_COLOR.TERTIARY} />
      <Text
        style={{
          marginLeft: size / 10,
          color: GLOBAL_COLOR.TERTIARY,
          fontSize: size / 2,
          fontFamily: "Montserrat-Alternates-SemiBold-Italic",
        }}
      >
        BuddyTrip
      </Text>
    </View>
  );
}
