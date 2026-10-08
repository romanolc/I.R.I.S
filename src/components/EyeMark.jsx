export default function EyeMark({ small = false }) {
  return (
    <svg
      className={small ? "eye-mark eye-mark--small" : "eye-mark"}
      viewBox="0 0 64 40"
      aria-hidden="true"
    >
      <path
        d="M3 20C11 8.5 20.7 3 32 3s21 5.5 29 17c-8 11.5-17.7 17-29 17S11 31.5 3 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="32"
        cy="20"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="32" cy="20" r="5" fill="currentColor" />
      <path d="M32 5v4M32 31v4M9 20h4M51 20h4" stroke="currentColor" />
    </svg>
  );
}
