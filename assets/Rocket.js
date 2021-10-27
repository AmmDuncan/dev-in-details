import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={60} height={59} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#prefix__filter0_d_248:1274)" clipPath="url(#prefix__clip0_248:1274)">
        <path
          d="M30 7.842s-8.137 8.098-8.137 20.756c0 .584.064 1.157.162 1.716-1.211 1.032-2.9 2.78-2.9 4.538 0 4.105 2.738 8.211 2.738 8.211l3.874-5.166 1.55 1.55h5.425l1.55-1.55 3.875 5.166s2.737-4.106 2.737-8.21c0-1.76-1.688-3.507-2.9-4.539.1-.56.163-1.132.163-1.716C38.137 15.94 30 7.842 30 7.842zM28.192 20.46a2.557 2.557 0 113.616 3.614 2.557 2.557 0 01-3.616-3.614zm-.728 20.61a2.904 2.904 0 00-.406 1.47c0 2.47 2.94 5.017 2.94 5.017s2.939-2.513 2.939-5.016c0-.537-.155-1.037-.408-1.47h-.827c.017.098.06.19.058.294 0 1.764-1.762 2.646-1.762 2.646s-1.763-.882-1.762-2.646c0-.104.04-.193.056-.293l-.828-.002z"
          fill="#F6F6F9"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_248:1274">
          <path fill="#fff" transform="rotate(-45 35.86 14.146)" d="M0 0h41.719v41.719H0z" />
        </clipPath>
        <filter
          id="prefix__filter0_d_248:1274"
          x={18.126}
          y={7.842}
          width={23.748}
          height={43.716}
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
          <feColorMatrix values="0 0 0 0 0.156863 0 0 0 0 0.235294 0 0 0 0 0.666667 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_248:1274" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_248:1274" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
