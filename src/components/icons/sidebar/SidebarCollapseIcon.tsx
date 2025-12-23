interface IconProps {
  className?: string;
  isCollapsed?: boolean;
}

export const SidebarCollapseIcon = ({
  className,
  isCollapsed = false,
}: IconProps) => (
  <svg
    className={className}
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_1_2346)">
      <path
        d="M3 14C3 7.37258 8.37258 2 15 2C21.6274 2 27 7.37258 27 14C27 20.6274 21.6274 26 15 26C8.37258 26 3 20.6274 3 14Z"
        fill="white"
        fillOpacity="0.01"
        shapeRendering="crispEdges"
      />
      <path
        d="M19.6667 8H10.3333C9.59695 8 9 8.59695 9 9.33333V18.6667C9 19.403 9.59695 20 10.3333 20H19.6667C20.403 20 21 19.403 21 18.6667V9.33333C21 8.59695 20.403 8 19.6667 8Z"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={isCollapsed ? "M13 8V20" : "M17 8V20"}
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={
          isCollapsed
            ? "M16.3334 12L18.3334 14L16.3334 16"
            : "M13.6666 16L11.6666 14L13.6666 12"
        }
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_1_2346"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_1_2346"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2346"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1_2346"
          result="effect2_dropShadow_1_2346"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1_2346"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
