import React from "react";

interface PlusSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlusSvg = ({
  width = 12,
  height = 12,
  color = "#717171",
}: PlusSvgProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="5"
    >
      <path d="m2 16h28m-14-14v28"></path>
    </svg>
  );
};

export default PlusSvg;
