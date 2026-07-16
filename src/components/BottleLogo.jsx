// The original animated cider-bottle illustration, used for the Home hero.
export default function BottleLogo({ size = 36, animated = false }) {
  const badgeClass = animated ? 'logo-badge' : undefined
  const bubbleClass = animated ? 'logo-bubble' : undefined

  return (
    <svg
      width={size * 0.75}
      height={size}
      viewBox="0 0 96 128"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="cgGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6fdf0" />
          <stop offset="55%" stopColor="#e0f2cd" />
          <stop offset="100%" stopColor="#c5e4a9" />
        </linearGradient>
        <linearGradient id="cgCap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57cb6d" />
          <stop offset="100%" stopColor="#2e8b3d" />
        </linearGradient>
      </defs>

      {/* cap */}
      <rect x="34" y="2" width="28" height="13" rx="4" fill="url(#cgCap)" />
      <rect x="38" y="4" width="3" height="9" rx="1.5" fill="#ffffff" opacity="0.28" />

      {/* bottle */}
      <path
        d="M38 15 L58 15 L58 30 C58 38 78 41 78 57 L78 108 C78 117 71 124 62 124 L34 124 C25 124 18 117 18 108 L18 57 C18 41 38 38 38 30 Z"
        fill="url(#cgGlass)"
        stroke="#9cc784"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* glass highlight */}
      <rect x="24" y="52" width="6.5" height="58" rx="3.2" fill="#ffffff" opacity="0.4" />

      {/* JS badge */}
      <g transform="translate(56,62)">
        <g className={badgeClass}>
          <rect x="-7.5" y="-7.5" width="15" height="15" rx="3.5" fill="#f7df1e" />
          <text
            y="3.8"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="800"
            fill="#1c1c1c"
            fontFamily="Arial, sans-serif"
          >
            JS
          </text>
        </g>
      </g>

      {/* Python badge */}
      <g transform="translate(33,78)">
        <g className={badgeClass} style={{ animationDelay: '0.8s' }}>
          <circle r="8.5" fill="#ffd43b" />
          <path d="M-8.5 0 a8.5 8.5 0 0 1 17 0 z" fill="#3776ab" />
          <circle cx="-3.2" cy="-3.8" r="1.2" fill="#ffffff" />
        </g>
      </g>

      {/* React badge */}
      <g transform="translate(59,96)">
        <g className={badgeClass} style={{ animationDelay: '1.6s' }}>
          <circle r="2.3" fill="#61dafb" />
          <ellipse rx="9.5" ry="3.6" stroke="#61dafb" strokeWidth="1.5" fill="none" />
          <ellipse rx="9.5" ry="3.6" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60)" />
          <ellipse rx="9.5" ry="3.6" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120)" />
        </g>
      </g>

      {/* C++ badge */}
      <g transform="translate(33,109)">
        <g className={badgeClass} style={{ animationDelay: '2.4s' }}>
          <circle r="8.5" fill="#00599c" />
          <text
            y="2.8"
            textAnchor="middle"
            fontSize="7"
            fontWeight="800"
            fill="#ffffff"
            fontFamily="Arial, sans-serif"
          >
            C++
          </text>
        </g>
      </g>

      {/* carbonation bubbles */}
      <circle cx="45" cy="74" r="1.9" fill="#ffffff" opacity="0.6" className={bubbleClass} />
      <circle cx="69" cy="82" r="2.3" fill="#ffffff" opacity="0.5" className={bubbleClass} style={{ animationDelay: '1.1s' }} />
      <circle cx="46" cy="90" r="1.5" fill="#ffffff" opacity="0.55" className={bubbleClass} style={{ animationDelay: '2s' }} />
      <circle cx="26" cy="94" r="1.7" fill="#ffffff" opacity="0.5" className={bubbleClass} style={{ animationDelay: '0.6s' }} />
      <circle cx="66" cy="114" r="2" fill="#ffffff" opacity="0.55" className={bubbleClass} style={{ animationDelay: '2.8s' }} />
      <circle cx="48" cy="118" r="1.6" fill="#ffffff" opacity="0.5" className={bubbleClass} style={{ animationDelay: '1.7s' }} />
    </svg>
  )
}
