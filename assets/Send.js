import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.841.087a.394.394 0 00-.43-.036L.21 10.45a.393.393 0 00-.206.384c.014.158.12.292.27.34l5.459 1.782-.529 5.403a.393.393 0 00.236.402.395.395 0 00.455-.1l3.442-3.89 5.183 5.11a.398.398 0 00.662-.186l4.8-19.2a.395.395 0 00-.142-.41zM6.537 12.884l7.804-6.311-5.318 7.364-2.911 3.286.425-4.34z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
