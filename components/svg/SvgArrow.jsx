// Create with https://react-svgr.com/playground/?native=true

import Svg, { G, Path } from "react-native-svg";


export default SvgArrow = (props) => {

  let direction = "M6 12h12m0 0-5-5m5 5-5 5"; // Right
  if (props?.direction === "left") direction = "M6 12h12M6 12l5-5m-5 5 5 5";
  if (props?.direction === "up") direction = "M12 6V18M12 6L7 11M12 6L17 11";
  if (props?.direction === "down") direction = "M12 6V18M12 18L7 13M12 18L17 13";

  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    showShadow={true}
    {...props}
  >

      <Path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction}
      />

  </Svg>
  );
}