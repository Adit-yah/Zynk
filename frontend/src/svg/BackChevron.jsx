export default function BackChevron({ size = 24, className = '', ariaLabel = 'Back' }) {
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
    >
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
