export const translations = {
  en: {
    // Header / Nav
    nav_home: 'Home',
    nav_software: 'Software',
    nav_boards: 'Boards',
    nav_about: 'About',
    org_name: 'Codecider Lab',
    tagline: 'Code + Cider, Co-Decider',

    // Hero
    hero_title_1: 'Ferment your ideas',
    hero_title_2: 'into code, together.',
    hero_subtitle:
      'Codecider Lab builds and distributes open software across many fields. Explore our tools, share your thoughts on each board, and decide the future of every project with us.',
    hero_cta_browse: 'Browse Software',
    hero_cta_about: 'What is Codecider?',
    hero_point_1: 'Reuse code, cut development time',
    hero_point_2: 'Practical tools ready to run today',
    hero_point_3: 'Smart decisions made with AI and users',

    // Concept
    concept_title: 'Why "Codecider"?',
    concept_code_cider: 'Code + Cider',
    concept_code_cider_desc:
      'A blend of Code and Cider (a fermented drink) — we ferment creative ideas into more valuable results.',
    concept_co_decider: 'Co-Decider',
    concept_co_decider_desc:
      'AI and users decide together. An intelligent partner that thinks with you and builds better answers.',

    // Categories
    categories_title: 'Software Categories',
    categories_subtitle:
      'Innovative tools and demo code across diverse fields, organized for you.',
    cat_multimedia: 'Multimedia',
    cat_multimedia_desc: 'Video processing, audio analysis, 3D graphics, streaming',
    cat_education: 'Education',
    cat_education_desc: 'Learning tools, coding tutorials, interactive courseware',
    cat_automation: 'Office Automation',
    cat_automation_desc: 'RPA, script automation, document processing, workflow',
    cat_data: 'Data Processing',
    cat_data_desc: 'Data collection, analysis, visualization, machine learning',
    cat_utilities: 'Utilities',
    cat_utilities_desc: 'File tools, system utilities, everyday productivity helpers',
    cat_emerging: 'Emerging Tech',
    cat_emerging_desc: 'AI / deep learning, blockchain, quantum computing, experiments',
    software_count: (n) => `${n} project${n === 1 ? '' : 's'}`,
    view_category: 'View category',

    // Software list / detail
    latest_software: 'Latest Software',
    all_software: 'All Software',
    no_software:
      'No software has been published in this category yet. New projects are on the way — stay tuned!',
    version: 'Version',
    license: 'License',
    language: 'Language',
    released: 'Released',
    view_on_github: 'View on GitHub',
    download: 'Download',
    overview: 'Overview',
    key_features: 'Key Features',
    tech_stack: 'Tech Stack',
    benchmark: 'Benchmark',
    discussion: 'Discussion',
    back_to_category: 'Back to category',

    // Board
    board_title: 'Discussion Board',
    board_subtitle:
      'Share your opinions freely — bug reports, feature ideas, questions, anything. We decide together.',
    board_empty: 'No posts yet. Be the first to start a discussion!',
    board_new_post: 'New Post',
    board_post_title: 'Title',
    board_post_author: 'Name',
    board_post_content: 'Write your thoughts…',
    board_submit: 'Post',
    board_cancel: 'Cancel',
    board_replies: (n) => `${n} repl${n === 1 ? 'y' : 'ies'}`,
    board_reply_placeholder: 'Write a reply…',
    board_reply_submit: 'Reply',
    board_anonymous: 'Anonymous',
    boards_page_subtitle: 'Every project has its own board. Pick one and join the conversation.',
    board_go: 'Open board',

    // About
    about_title: 'About Codecider Lab',
    about_mission_title: 'Our Mission',
    about_mission:
      'Codecider Lab is an open platform that provides innovative features and creative ideas as libraries and demo code across diverse fields. With AI, we turn your ideas into code and services.',
    about_future_title: 'Future Plans (Premium)',
    about_source: 'Full Source Code',
    about_source_desc:
      'Complete source code for deeper development and customization.',
    about_manual: 'Usage Guides',
    about_manual_desc:
      'Professional manuals with detailed usage and application guides.',
    about_values_1: 'A platform that decides and grows together',
    about_values_2: 'Ideas into code, code into value',
    about_values_3: 'An open development ecosystem for everyone',

    footer_rights: 'All rights reserved.',
    footer_slogan: 'A new paradigm of development — deciding together with AI and users.',
  },

  ko: {
    nav_home: '홈',
    nav_software: '소프트웨어',
    nav_boards: '게시판',
    nav_about: '소개',
    org_name: 'Codecider Lab',
    tagline: 'Code + Cider, Co-Decider',

    hero_title_1: '아이디어를 코드로',
    hero_title_2: '함께 발효시키다.',
    hero_subtitle:
      'Codecider Lab은 다양한 분야의 오픈 소프트웨어를 개발하고 배포합니다. 도구를 살펴보고, 각 게시판에서 자유롭게 의견을 나누며, 모든 프로젝트의 미래를 함께 결정하세요.',
    hero_cta_browse: '소프트웨어 둘러보기',
    hero_cta_about: 'Codecider란?',
    hero_point_1: '코드 재사용으로 개발 시간 단축',
    hero_point_2: '바로 실행 가능한 실용적인 도구',
    hero_point_3: 'AI와 사용자가 함께 만드는 스마트한 결정',

    concept_title: '왜 "Codecider"인가?',
    concept_code_cider: 'Code + Cider',
    concept_code_cider_desc:
      'Code(코드)와 Cider(발효음료)의 합성어 — 창의적인 아이디어를 발효시켜 더 가치 있는 결과로 만듭니다.',
    concept_co_decider: 'Co-Decider',
    concept_co_decider_desc:
      'AI와 사용자가 함께 결정합니다. 함께 고민하고 더 나은 해답을 만들어가는 지능형 파트너.',

    categories_title: '소프트웨어 카테고리',
    categories_subtitle: '다양한 분야의 혁신 기능과 데모 코드를 분야별로 제공합니다.',
    cat_multimedia: '멀티미디어',
    cat_multimedia_desc: '영상 처리, 오디오 분석, 3D 그래픽, 스트리밍',
    cat_education: '교육',
    cat_education_desc: '학습 도구, 코딩 튜토리얼, 인터랙티브 교육 자료',
    cat_automation: '업무 자동화',
    cat_automation_desc: 'RPA, 스크립트 자동화, 문서 처리, 워크플로우',
    cat_data: '데이터 처리',
    cat_data_desc: '데이터 수집, 분석, 시각화, 머신러닝 활용',
    cat_utilities: '유틸리티',
    cat_utilities_desc: '파일 도구, 시스템 유틸리티, 일상 생산성 도우미',
    cat_emerging: '신기술 연구',
    cat_emerging_desc: 'AI/딥러닝, 블록체인, 양자컴퓨팅, 실험적 기술',
    software_count: (n) => `프로젝트 ${n}개`,
    view_category: '카테고리 보기',

    latest_software: '최신 소프트웨어',
    all_software: '전체 소프트웨어',
    no_software:
      '이 카테고리에는 아직 배포된 소프트웨어가 없습니다. 새 프로젝트가 준비 중입니다!',
    version: '버전',
    license: '라이선스',
    language: '개발 언어',
    released: '출시일',
    view_on_github: 'GitHub에서 보기',
    download: '다운로드',
    overview: '개요',
    key_features: '주요 기능',
    tech_stack: '기술 스택',
    benchmark: '벤치마크',
    discussion: '토론',
    back_to_category: '카테고리로 돌아가기',

    board_title: '토론 게시판',
    board_subtitle:
      '버그 제보, 기능 제안, 질문 등 무엇이든 자유롭게 의견을 남겨주세요. 우리는 함께 결정합니다.',
    board_empty: '아직 게시글이 없습니다. 첫 번째 토론을 시작해 보세요!',
    board_new_post: '새 글 쓰기',
    board_post_title: '제목',
    board_post_author: '이름',
    board_post_content: '의견을 작성해 주세요…',
    board_submit: '등록',
    board_cancel: '취소',
    board_replies: (n) => `댓글 ${n}개`,
    board_reply_placeholder: '댓글을 작성해 주세요…',
    board_reply_submit: '댓글 등록',
    board_anonymous: '익명',
    boards_page_subtitle:
      '모든 프로젝트에는 전용 게시판이 있습니다. 관심 있는 프로젝트의 대화에 참여하세요.',
    board_go: '게시판 열기',

    about_title: 'Codecider Lab 소개',
    about_mission_title: '미션',
    about_mission:
      'Codecider Lab은 다양한 분야의 혁신 기능과 창의적인 아이디어를 라이브러리와 데모 코드로 제공하는 오픈 플랫폼입니다. AI와 함께, 당신의 아이디어를 코드로, 서비스로 만듭니다.',
    about_future_title: '향후 계획 (유료 서비스)',
    about_source: '전체 소스코드 판매',
    about_source_desc:
      '더 깊이 있는 개발과 커스터마이징을 위해 전체 소스코드를 제공합니다.',
    about_manual: '코드 활용 설명서 판매',
    about_manual_desc:
      '상세한 사용법과 활용 가이드를 담은 전문 설명서를 제공합니다.',
    about_values_1: '함께 결정하고 함께 성장하는 플랫폼',
    about_values_2: '아이디어를 코드로, 코드를 가치로',
    about_values_3: '모두를 위한 개방형 개발 생태계',

    footer_rights: 'All rights reserved.',
    footer_slogan: 'AI와 사용자가 함께 결정하는 개발의 새로운 패러다임.',
  },
}
