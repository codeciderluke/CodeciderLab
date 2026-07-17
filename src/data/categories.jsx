const iconProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const categories = [
  {
    id: 'automation',
    nameKey: 'cat_automation',
    descKey: 'cat_automation_desc',
    color: '#3a7bd5',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9" />
      </svg>
    ),
  },
  {
    id: 'multimedia',
    nameKey: 'cat_multimedia',
    descKey: 'cat_multimedia_desc',
    color: '#7c5cd6',
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
        <path d="M2.5 8.5h19" />
        <path d="M6.5 4v4.5M17.5 4v4.5" />
        <path d="M10.5 12l4.5 2.75-4.5 2.75z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'information',
    nameKey: 'cat_information',
    descKey: 'cat_information_desc',
    color: '#e8913a',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5.5" />
        <path d="M12 7.5h.01" />
      </svg>
    ),
  },
  {
    id: 'utilities',
    nameKey: 'cat_utilities',
    descKey: 'cat_utilities_desc',
    color: '#46a758',
    icon: (
      <svg {...iconProps}>
        <path d="M14.5 6.5a4.2 4.2 0 0 0-5.6 5.2L3.3 17.3a2 2 0 1 0 2.9 2.9l5.6-5.6a4.2 4.2 0 0 0 5.2-5.6l-2.8 2.8-2.5-.7-.7-2.5z" />
      </svg>
    ),
  },
]

// Category ids that shipped under an earlier name. Kept so existing links stay valid.
export const legacyCategoryRedirects = {
  education: 'information',
}

export function getCategory(id) {
  return categories.find((c) => c.id === id)
}
