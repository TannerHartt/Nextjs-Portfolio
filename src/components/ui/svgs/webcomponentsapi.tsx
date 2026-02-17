import type { SVGProps } from "react";

const WebComponentsAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75.9999 40.2758L68.1797 53.432L57.2134 40.0962L68.1797 27.1196L75.9999 40.2758Z"
      fill="#166DA5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.3259 55.6772L55.4158 41.4434L48.2698 53.3872L59.3709 69.5967L67.3259 55.6772Z"
      fill="#8FDB69"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.1911 24.7848L55.4158 39.0635L48.2698 27.1197L59.3709 11.0898L67.1911 24.7848Z"
      fill="#166DA5"
    />
    <path
      opacity="0.95"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.281 24.7848H67.1911L59.281 11H39.1911L31.281 24.7848ZM55.4158 39.1084H75.281L68.1349 27.0748H48.2248"
      fill="url(#node-gradient-top)"
    />
    <path
      opacity="0.95"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M67.326 55.722H31.2361L39.1462 69.417H59.3709L67.326 55.722ZM55.4159 41.3984H75.281L68.135 53.4321H48.2248"
      fill="url(#node-gradient-bottom)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.146 69.417L22.2472 40.2309L39.3708 11.0449H20.8539L4 40.2309L20.8539 69.417H39.146Z"
      fill="#010101"
    />

    <defs>
      <linearGradient
        id="node-gradient-top"
        x1="31.281"
        y1="25.0542"
        x2="75.281"
        y2="25.0542"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A3B8F" />
        <stop offset="1" stopColor="#29ABE2" />
      </linearGradient>

      <linearGradient
        id="node-gradient-bottom"
        x1="75.281"
        y1="55.4077"
        x2="31.2361"
        y2="55.4077"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B4D44E" />
        <stop offset="1" stopColor="#E7F716" />
      </linearGradient>
    </defs>
  </svg>
);

export { WebComponentsAPI };
