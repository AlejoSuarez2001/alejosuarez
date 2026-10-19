export default function DevIcon({
  width = 24,
  height = 24,
  color = "#2e9780",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M6.5 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"></path>
      <path d="M13 9h-2.5v6h2.5"></path>
      <path d="M10.5 12h2"></path>
      <path d="M14.25 9l1.75 6l1.75 -6"></path>
    </svg>
  );
}
