// Create with https://react-svgr.com/playground/?native=true

import Svg, { G, Path } from "react-native-svg";


export default SvgArrow = (props) => {

  let rotation = 0; // Right
  if (props?.direction === "left") rotation = 180;
  if (props?.direction === "up") rotation = 270;
  if (props?.direction === "down") direction = 90;

  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    rotation={rotation}
    showShadow={true}
    {...props}
  >

      <Path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12h12m0 0-5-5m5 5-5 5"
      />

  </Svg>
  );
}