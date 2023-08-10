// Create with https://react-svgr.com/playground/?native=true

import Svg, { G, Path } from "react-native-svg";


export default SvgCar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}
  >
    <G
      fill="none"
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      data-name="add"
    >
      <Path d="M12 19V5M5 12h14" />
    </G>
  </Svg>
);