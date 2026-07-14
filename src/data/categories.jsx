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
    id: 'education',
    nameKey: 'cat_education',
    descKey: 'cat_education_desc',
    color: '#e8913a',
    icon: (
      <svg {...iconProps}>
        <path d="M12 4L2.5 8.5 12 13l9.5-4.5z" />
        <path d="M6 10.8v4.7c0 1.4 2.7 2.9 6 2.9s6-1.5 6-2.9v-4.7" />
        <path d="M21.5 8.5v5.5" />
      </svg>
    ),
  },
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
    id: 'data',
    nameKey: 'cat_data',
    descKey: 'cat_data_desc',
    color: '#14a08c',
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
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
  {
    id: 'emerging',
    nameKey: 'cat_emerging',
    descKey: 'cat_emerging_desc',
    color: '#5a67d8',
    icon: (
      <svg {...iconProps}>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6.5 6.5 0 0 0-3.9 11.7c.7.55 1.15 1.35 1.3 2.3h5.2c.15-.95.6-1.75 1.3-2.3A6.5 6.5 0 0 0 12 3z" />
        <path d="M12 7.5v3M10.5 9h3" />
      </svg>
    ),
  },
]

export function getCategory(id) {
  return categories.find((c) => c.id === id)
}
