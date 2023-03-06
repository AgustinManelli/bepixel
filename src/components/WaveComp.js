import * as React from "react"
import '../stylesheets/Waveanimation.css'

const WaveComp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    style={{
      enableBackground: "new 0 0 900 600",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st4{fill:url(#SVGID_00000010997345222507090360000010914437215716294295_)}"
      }
    </style>
    <path
      style={{
        fill: "#f90061",
      }}
      d="m300 544 600-321.1v109.2z"
      id="Capa_3"
      data-aos="zoom-out-left"
      data-aos-delay="150"
      data-aos-once="true"
    />
    <path
      style={{
        fill: "#312783",
      }}
      d="m300 544 600-223.1V382z"
      id="Capa_2"
      data-aos="zoom-out-left"
      data-aos-once="true"
    />
    <path
      d="m0 481 300 63 300-91 300-83v231H0V481z"
      style={{
        fill: "#c100e9",
      }}
      id="visual"
    />
    <g id="Capa_4" className="Logowaveanimation">
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={290.819}
        y1={543.113}
        x2={306.296}
        y2={543.449}
      >
        <stop
          offset={0}
          style={{
            stopColor: "#c100e9",
          }}
        />
        <stop
          offset={0.288}
          style={{
            stopColor: "#8f0ec6",
          }}
        />
        <stop
          offset={0.615}
          style={{
            stopColor: "#5c1ba2",
          }}
        />
        <stop
          offset={0.862}
          style={{
            stopColor: "#3d248b",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#312783",
          }}
        />
      </linearGradient>
      <path
        d="M312 536.9c.3 2.1.2 4.3-.2 6.6-1.3 7.6-5.9 14-11.4 16.4-1.4.6-2.9 1-4.4 1.1h-1.1c-7.1-.5-11.5-8.4-9.9-18 1.3-7.6 5.9-13.9 11.3-16.4 1.6-.7 3.3-1.1 5-1.1 1.7 0 3.2.5 4.6 1.3-1.3.6-2.5 1.4-3.7 2.4-1.6 1.3-3 2.9-4.2 4.8-1.7 2.7-2.9 5.8-3.5 9.2 0 .2-.1.4-.1.6-.1.3-.1.6-.1.9-.3 3.9 1.7 7 4.7 7.1 3.1.1 6.2-3.1 7.1-7.2 0-.2.1-.4.1-.6.1-.3.1-.6.1-.9.2-1.8.2-3.5-.1-5.1l-.7.1-.3.1-1.5.3.5-1.5.3-.8.8-2.1 2.2-6.1 2.3 3 4.3 5.5-2.1.4z"
        style={{
          fill: "url(#SVGID_1_)",
        }}
      />
      <linearGradient
        id="SVGID_00000155138041886574112330000007395976268595116196_"
        gradientUnits="userSpaceOnUse"
        x1={350.307}
        y1={567.912}
        x2={376.789}
        y2={567.912}
        gradientTransform="matrix(1.0601 .023 -.1572 .9399 3.04 1.163)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#c100e9",
          }}
        />
        <stop
          offset={0.063}
          style={{
            stopColor: "#b204df",
          }}
        />
        <stop
          offset={0.282}
          style={{
            stopColor: "#8410be",
          }}
        />
        <stop
          offset={0.492}
          style={{
            stopColor: "#601aa4",
          }}
        />
        <stop
          offset={0.687}
          style={{
            stopColor: "#462192",
          }}
        />
        <stop
          offset={0.862}
          style={{
            stopColor: "#362687",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#312783",
          }}
        />
      </linearGradient>
      <path
        style={{
          fill: "url(#SVGID_00000155138041886574112330000007395976268595116196_)",
        }}
        d="M312 536.9c.3 2.1.2 4.3-.2 6.6-1.3 7.6-5.9 14-11.4 16.4-1.4.6-2.9 1-4.4 1.1h-1.1c-7.1-.5-11.5-8.4-9.9-18 1.3-7.6 5.9-13.9 11.3-16.4 1.6-.7 3.3-1.1 5-1.1 1.7 0 3.2.5 4.6 1.3-1.7.1-3.4.5-5 1.4-5.1 2.6-9.5 8.7-10.7 16V544.5c-.9 5.6 1.7 10.3 5.8 10.7h.4c4.4.1 8.8-4.6 9.8-10.5 0-.2.1-.4.1-.6.1-.3.1-.6.1-.9.2-1.8.2-3.5-.1-5.1l-.7.1-.3.1-1.5.3.5-1.5.3-.8.8-2.1 2.2-6.1 2.3 3 4.3 5.5-2.2.3z"
      />
    </g>
  </svg>
)

export default WaveComp
