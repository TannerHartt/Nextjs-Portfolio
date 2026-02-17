import type { SVGProps } from "react";

const ThreeJS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 22 3 3l19 5.5z" strokeWidth={2} />
    <path d="m12.573 17.58 -6.152 -1.576 8.796 -9.466 1.914 6.64" strokeWidth={2} />
    <path d="M12.573 17.58 11 11l6.13 2.179" strokeWidth={2} />
    <path d="M9.527 4.893 11 11 4.69 9.436z" strokeWidth={2} />
  </svg>
);

export { ThreeJS };
