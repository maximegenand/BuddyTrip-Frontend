// Create with https://react-svgr.com/playground/?native=true

import Svg, { Path } from "react-native-svg";


export default SvgMinus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}
  >
      <Path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12h12"
      />
  </Svg>
);