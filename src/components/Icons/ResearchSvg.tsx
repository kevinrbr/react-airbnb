import * as React from "react";

interface ResearchSvgProps {
  width?: number;
  height?: number;
  color?: string;
  stroke?: number;
}

const ResearchSvg = ({
  width = 24,
  height = 24,
  color = "#979797",
  stroke = 4,
}: ResearchSvgProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      width={width}
      height={height}
    >
      <g fill="none">
        <path
          d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
          stroke={color}
          strokeWidth={stroke}
        ></path>
      </g>
    </svg>
  );
};

export default ResearchSvg;
