import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={29} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#prefix__filter0_d_265:37)">
        <path
          d="M14.504.3C7.212.3 1.3 6.21 1.3 13.5c0 7.29 5.912 13.2 13.204 13.2 11.011 0 13.492-10.222 12.46-15.4H14.5v4.4h8.512c-.978 3.793-4.413 6.6-8.512 6.6a8.8 8.8 0 010-17.6c2.21 0 4.223.82 5.769 2.166l3.126-3.124A13.156 13.156 0 0014.505.3z"
          fill="#F6F6F9"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_265:37"
          x={0.3}
          y={0.3}
          width={27.877}
          height={30.4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0526736 0 0 0 0 0.100839 0 0 0 0 0.341667 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_265:37" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_265:37" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
