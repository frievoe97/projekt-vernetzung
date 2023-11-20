import React from "react";
import { render } from "react-dom";
import { CirclePosition } from "react-circular";

// Eine Liste von Winkeln, bei denen Sie die Elemente im Kreis positionieren möchten.
const angles = [0, 45, 90, 135, 180, 225, 270, 315];

const Demo = () => (
  <svg height="400" width="400" viewBox="0 0 400 400">
    {angles.map((angle) => (
      <CirclePosition angle={angle} radius={200} adjust={-5}>
        {({ x, y }) => <h1 cx={x} cy={y} r="5" />}
      </CirclePosition>
    ))}
  </svg>
);

render(<Demo />, document.getElementById("root"));
