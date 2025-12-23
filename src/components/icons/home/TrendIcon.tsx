interface IconProps {
  className?: string;
}

export const TrendIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_1_3032" fill="white">
      <path d="M0 12C0 5.37258 5.37258 0 12 0H20C26.6274 0 32 5.37258 32 12V20C32 26.6274 26.6274 32 20 32H12C5.37258 32 0 26.6274 0 20V12Z" />
    </mask>
    <path
      d="M12 0V1H20V0V-1H12V0ZM32 12H31V20H32H33V12H32ZM20 32V31H12V32V33H20V32ZM0 20H1V12H0H-1V20H0ZM12 32V31C5.92487 31 1 26.0751 1 20H0H-1C-1 27.1797 4.8203 33 12 33V32ZM32 20H31C31 26.0751 26.0751 31 20 31V32V33C27.1797 33 33 27.1797 33 20H32ZM20 0V1C26.0751 1 31 5.92487 31 12H32H33C33 4.8203 27.1797 -1 20 -1V0ZM12 0V-1C4.8203 -1 -1 4.8203 -1 12H0H1C1 5.92487 5.92487 1 12 1V0Z"
      fill="#E5E7EB"
      mask="url(#path-1-inside-1_1_3032)"
    />
    <path
      d="M18.6667 19.3333H22.6667V15.3333"
      stroke="#4A5565"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.6666 19.3334L16.9999 13.6667L13.6666 17L9.33325 12.6667"
      stroke="#4A5565"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
