import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={46}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_153:339)" fill="#fff">
        <path d="M21.12 24.313l-2.65 2.228-1.62 1.365-.78-1.365-2.01-3.453L6.22 9.469.75.028V0h6.306l11.302 19.55 2.762 4.763z" />
        <path
          opacity={0.8}
          d="M9.847 26.541l-1.312 1.087-5.246 4.316-.083.056H.75v-5.459h9.097z"
        />
        <path opacity={0.7} d="M6.22 9.47V26.54H.75V.028l5.47 9.441z" />
        <path
          opacity={0.9}
          d="M16.85 27.906L11.996 32h-8.79l.084-.056 5.246-4.316 1.312-1.087 4.213-3.453 2.01 3.453.78 1.365z"
        />
        <path d="M25.027 7.659l2.65-2.2 1.619-1.365.781 1.365 2.01 3.453 7.84 13.591 5.47 9.441V32H39.09l-11.3-19.55-2.763-4.791z" />
        <path
          opacity={0.8}
          d="M36.3 5.459l1.311-1.087L42.857.056 42.941 0h2.456v5.459H36.3z"
        />
        <path opacity={0.7} d="M39.927 22.503V5.459h5.47v26.485l-5.47-9.441z" />
        <path
          opacity={0.9}
          d="M29.296 4.094L34.151 0h8.79l-.084.056-5.246 4.316L36.3 5.46l-4.214 3.453-2.009-3.453-.781-1.365z"
        />
        <path d="M27.091 28.602l4.326-3.704-12.446-21.5-4.241 3.648 12.361 21.556z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_153:339">
          <path fill="#fff" transform="translate(.75)" d="M0 0h44.647v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;
