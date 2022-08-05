import React from "react";

interface BurgerSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BurgerSvg = ({
  width = 16,
  height = 16,
  color = "#000",
}: BurgerSvgProps) => {
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
      <g fill="none" fillRule="nonzero">
        <path d="m2 16h28" stroke={color} strokeWidth="3"></path>
        <path d="m2 24h28" stroke={color} strokeWidth="3"></path>
        <path d="m2 8h28" stroke={color} strokeWidth="3"></path>
      </g>
    </svg>
  );
};

export default BurgerSvg;
