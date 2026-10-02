const shapes = [
  { left: "8%", delay: "-9s", duration: "25s", drift: "32px" },
  { left: "22%", delay: "-18s", duration: "31s", drift: "-22px" },
  { left: "41%", delay: "-4s", duration: "27s", drift: "24px" },
  { left: "63%", delay: "-14s", duration: "34s", drift: "-30px" },
  { left: "79%", delay: "-23s", duration: "29s", drift: "18px" },
  { left: "94%", delay: "-7s", duration: "32s", drift: "-24px" },
];

export function BackgroundMotion() {
  return (
    <div className="ambient-motion" aria-hidden="true">
      {shapes.map((shape, index) => (
        <span
          key={index}
          className="ambient-shape"
          style={{
            left: shape.left,
            "--fall-delay": shape.delay,
            "--fall-duration": shape.duration,
            "--drift": shape.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}