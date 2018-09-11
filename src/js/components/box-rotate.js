import React, { Component } from "react";
import PropTypes from "prop-types";

const BoxRotate = props => (
  <svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="15" y="43" fill="red">
      {props.number}
    </text>

    <g
      id="Blocks"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Artboard-2"
        transform="translate(-25.000000, -34.000000)"
        fill="#6C6969"
      >
        <path
          d="M27.5725234,91.5510204 L60.9989052,91.5510204 C62.4082525,91.5510204 63.5714286,90.391162 63.5714286,88.978497 L63.5714286,55.5521152 C63.5714286,54.1427679 62.4115702,52.9795918 60.9989052,52.9795918 L27.5725234,52.9828266 C26.163176,52.9828266 25,54.1426849 25,55.55535 L25.003243,88.9784224 C25.003243,90.3877697 26.0789155,91.5509458 27.5725317,91.5509458 L27.5725234,91.5510204 Z M30.5102041,57.877551 L58.6734694,57.877551 L58.6734694,86.0408163 L30.5102041,86.0375872 L30.5102041,57.877551 Z M84.304565,66.0361492 C85.2318117,66.9708467 85.2318117,68.5297152 84.304565,69.4644127 L78.2728223,75.5446231 C77.8076834,76.0134995 77.1915499,76.244898 76.5723545,76.244898 C75.9531591,76.244898 75.3339637,76.0104597 74.8718868,75.5446231 L68.9187033,69.5436032 C67.9914566,68.6089057 67.9914566,67.0500372 68.9187033,66.1153397 C69.84595,65.1806422 71.3923921,65.1806422 72.3196388,66.1153397 L74.0986658,67.908662 C72.7848086,51.6200457 59.1747263,38.8349863 42.7043448,38.8349863 C41.3904876,38.8349863 40.3061224,37.7450255 40.3061224,36.4174932 C40.3061224,35.0930785 41.3873948,34 42.7043448,34 C61.881,34 77.5781605,49.0438598 78.891863,68.0604958 L80.8249156,66.1119102 C81.906188,65.0219494 83.3771637,65.0219494 84.3044103,66.0357907 L84.304565,66.0361492 Z"
          id="Page-1-Copy-5"
        />
      </g>
    </g>
  </svg>
);

export default BoxRotate;

BoxRotate.defaultProps = {
  width: "100",
  height: "100",
  fill: "#00CDFF",
  number: 1
};