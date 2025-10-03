import React from 'react'

const Logout = ({size = 24 , className }) => {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  className={className}
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  role="img"
  aria-label="Logout"
>
  <title>Logout</title>
  <rect x="3" y="5" width="12" height="14" rx="2" />
  <path d="M21 12H11" />
  <path d="M18 9l3 3-3 3" />
</svg>
  )
}

export default Logout