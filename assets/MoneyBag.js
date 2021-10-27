import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#prefix__filter0_d_316:15)" clipPath="url(#prefix__clip0_316:15)">
        <path
          d="M15 1a2.98 2.98 0 00-2.22 1h-2.778a1 1 0 00-.93 1.371L10 6h10l.928-2.629A1 1 0 0019.998 2h-2.777A2.98 2.98 0 0015 1zm-5 7s-7 6-7 13c0 4 3 6 5 6h14c2 0 5-2 5-6 0-7-7-13-7-13H10zm4 3.5h2v1.615c1.35.302 2.253 1.222 2.297 2.465H16.61c-.083-.676-.712-1.127-1.578-1.127-.896 0-1.488.415-1.488 1.069 0 .527.407.831 1.41 1.044l1.033.22c1.721.361 2.461 1.105 2.461 2.433 0 1.43-.917 2.388-2.449 2.68V23.5h-2v-1.598c-1.471-.276-2.395-1.179-2.45-2.5h1.731c.083.694.784 1.139 1.793 1.139.931 0 1.59-.45 1.59-1.098 0-.546-.427-.86-1.477-1.086l-1.115-.238c-1.56-.326-2.326-1.138-2.326-2.443 0-1.313.869-2.249 2.254-2.557V11.5z"
          fill="#F6F8FE"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_316:15">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
        <filter
          id="prefix__filter0_d_316:15"
          x={2}
          y={1}
          width={26}
          height={30}
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
          <feColorMatrix values="0 0 0 0 0.0398438 0 0 0 0 0.0922309 0 0 0 0 0.354167 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_316:15" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_316:15" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
