import React from 'react'

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}


function polygon(centerX, centerY, points, radius) {
  console.log(centerX, centerY, points, radius)
  const degreeIncrement = 360 / (points);
  const d = new Array(points).fill('foo').map((p, i) => {
    const point = polarToCartesian(centerX, centerY, radius, degreeIncrement * i);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}

const PolygonRenderer = ({sides, colour, name}) => {
  return <div>
      <svg width="100%" height="100%" viewBox="0 0 500 500">
      <path d={polygon(250, 250, parseInt(sides), 175)} fill={colour} stroke="rgba(255,0,0,0.2)" strokeWidth="2" />
      <text y="470" x="50%" textAnchor="middle" fontSize="36pt">{name}</text>
      </svg>
    </div>
}

export {
  PolygonRenderer
}