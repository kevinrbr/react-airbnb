import React from "react";

interface CrossSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const CrossSvg = ({
  width = 24,
  height = 24,
  color = "#222222",
}: CrossSvgProps) => {
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
      <path d="m6 6 20 20" stroke={color} strokeWidth="4"></path>
      <path d="m26 6-20 20" stroke={color} strokeWidth="4"></path>
    </svg>
  );
};

export default CrossSvg;
