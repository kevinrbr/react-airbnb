import React from "react";

interface MinusSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const MinusSvg = ({
  width = 10,
  height = 10,
  color = "#717171",
}: MinusSvgProps) => {
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
      <path d="m2 16h28"></path>
    </svg>
  );
};

export default MinusSvg;
