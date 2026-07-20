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
    id: 'file-system',
    nameKey: 'cat_file_system',
    descKey: 'cat_file_system_desc',
    color: '#46a758',
    icon: (
      <svg {...iconProps}>
        <path d="M14.5 6.5a4.2 4.2 0 0 0-5.6 5.2L3.3 17.3a2 2 0 1 0 2.9 2.9l5.6-5.6a4.2 4.2 0 0 0 5.2-5.6l-2.8 2.8-2.5-.7-.7-2.5z" />
      </svg>
    ),
  },
  {
    id: 'media',
    nameKey: 'cat_media',
    descKey: 'cat_media_desc',
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
    id: 'ai',
    nameKey: 'cat_ai',
    descKey: 'cat_ai_desc',
    color: '#5b6ef5',
    icon: (
      <svg {...iconProps}>
        <rect x="4.5" y="7.8" width="15" height="11" rx="3" />
        <path d="M12 4v3.6" />
        <circle cx="12" cy="3.4" r="1" />
        <circle cx="9.2" cy="12.8" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="14.8" cy="12.8" r="1.1" fill="currentColor" stroke="none" />
        <path d="M9.6 16h4.8" />
        <path d="M4.5 12H2.8M19.5 12h1.7" />
      </svg>
    ),
  },
  {
    id: 'knowledge',
    nameKey: 'cat_knowledge',
    descKey: 'cat_knowledge_desc',
    color: '#e8913a',
    icon: (
      <svg {...iconProps}>
        <path d="M12 4 2.5 8.5 12 13l9.5-4.5z" />
        <path d="M6.5 10.8v3.9c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-3.9" />
        <path d="M21.5 8.5v4" />
      </svg>
    ),
  },
  {
    id: 'experiments',
    nameKey: 'cat_experiments',
    descKey: 'cat_experiments_desc',
    color: '#e0559a',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="16" height="16" rx="3.5" />
        <circle cx="9" cy="9" r="1.15" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1.15" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none" />
        <circle cx="9" cy="15" r="1.15" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

// Category ids that shipped under an earlier name. Kept so existing links stay valid.
export const legacyCategoryRedirects = {
  utilities: 'file-system',
  information: 'file-system',
  multimedia: 'media',
  'life-automation': 'automation',
  'ai-agent': 'ai',
  'play-toy': 'experiments',
  education: 'knowledge',
}

export function getCategory(id) {
  return categories.find((c) => c.id === id)
}
