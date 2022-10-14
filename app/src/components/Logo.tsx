import * as React from "react";

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 201.91 174.86"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#fff;}"}</style>
    </defs>
    <g id="Camada_2" data-name="Camada 2">
      <g id="Object">
        <g id="Sign_in_Screen" data-name="Sign in Screen">
          <polygon
            className="cls-1"
            points="143.34 54.46 143.34 100.32 99.8 143.86 58.57 102.63 58.57 56.77 99.8 97.99 143.34 54.46"
          />
          <polygon
            className="cls-1"
            points="127.48 31 127.48 59.71 100.23 86.96 74.43 61.16 74.43 32.45 100.23 58.25 127.48 31"
          />
          <path
            className="cls-1"
            d="M151.43,174.86h-101L0,87.43,50.48,0h101l50.48,87.43Zm-96.34-8h91.73l45.86-79.44L146.82,8H55.09L9.22,87.43Z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVGComponent;
