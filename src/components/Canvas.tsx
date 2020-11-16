import React from "react";
import { Paper, Circle } from "react-raphael";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Canvas = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Paper
      width={width}
      height={height}
      container={{ style: { "background-color": "blue" }, className: "dd" }}
    >
      <Circle
        key={1}
        x={100}
        y={100}
        r={17}
        attr={{ stroke: "#e11032", "stroke-width": 5 }}
      />
    </Paper>
  );
};
export default Canvas;
