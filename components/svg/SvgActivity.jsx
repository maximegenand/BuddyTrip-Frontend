// Create with https://react-svgr.com/playground/?native=true

import Svg, { Path } from "react-native-svg";


export default SvgActivity = (props) => (
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
      d="M11 7V3h6v8h4m0 0v10m0-10V7m-7 0h.01M14 11h.01M18 14h.01M18 18h.01M5.955 16l2.856-4.834c.227-.384.34-.576.487-.64a.5.5 0 0 1 .404 0c.147.064.26.256.487.64L13.046 16m-7.091 0L3 21h13l-2.954-5m-7.091 0L8 18l1.5-2h3.546"
    />
  </Svg>
);