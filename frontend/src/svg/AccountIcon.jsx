export default function AccountIcon({
  size = 24,
  className = "",
  ariaLabel = "Account",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-label={ariaLabel}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="9" r="2.6" />
      <path d="M6.5 17.2c1.2-1.6 3.1-2.6 5.5-2.6s4.3 1 5.5 2.6" />
      <circle cx="12" cy="12" r="10" fill="none" />
    </svg>
  );
}


