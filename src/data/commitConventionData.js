const emojiData = [
  {
    id: 1,
    emoji: '🎉',
    name: ':tada:',
    description: 'Begin a project.',
    'description-ko': '프로젝트 시작 시 사용',
    tag: ['all'],
  },
  {
    id: 2,
    emoji: '🚧',
    name: ':construction:',
    description: 'Work in progress.',
    'description-ko': '작업 중(아직 기능 구현 완료하지 않았을 때)',
    tag: ['all'],
  },
  {
    id: 3,
    emoji: '✨',
    name: ':sparkles:',
    description: 'Introduce new features.',
    'description-ko': '새로운 기능 소개(기능 추가 시 사용)',
    tag: ['all'],
  },
  {
    id: 4,
    emoji: '🙈',
    name: ':see_no_evil:',
    description: 'Add or update a .gitignore file.',
    'description-ko': '.gitignore 파일 추가 또는 업데이트',
    tag: ['all'],
  },
  {
    id: 5,
    emoji: '📝',
    name: ':memo:',
    description: 'Add or update documentation.',
    'description-ko': '문서 추가 또는 업데이트',
    tag: ['all'],
  },
  {
    id: 6,
    emoji: '✏️',
    name: ':pencil2:',
    description: 'Fix typos.',
    'description-ko': '오타 수정',
    tag: ['all'],
  },
  {
    id: 7,
    emoji: '💡',
    name: ':bulb:',
    description: 'Add or update comments in source code.',
    'description-ko': '주석 추가 또는 업데이트',
    tag: ['all'],
  },
  {
    id: 8,
    emoji: '💬',
    name: ':speech_balloon:',
    description: 'Add or update text and literals.',
    'description-ko': '텍스트 추가 또는 업데이트',
    tag: ['all'],
  },
  {
    id: 9,
    emoji: '🍻',
    name: ':beers:',
    description: 'Write code drunkenly.',
    'description-ko': '음주코딩🍻',
    tag: ['all'],
  },
  {
    id: 10,
    emoji: '♻️',
    name: ':recycle:',
    description: 'Refactor code.',
    'description-ko': '코드 리팩터링(성능 향상 없이 코드 수정)',
    tag: ['all'],
  },
  {
    id: 11,
    emoji: '💩',
    name: ':poop:',
    description: 'Write bad code that needs to be improved.',
    'description-ko': '나쁜 코드이므로 코드개선 필요',
    tag: ['all'],
  },
  {
    id: 12,
    emoji: '🎨',
    name: ':art:',
    description: 'Improve structure / format of the code.',
    'description-ko': '코드 구조나 포맷 성능 향상(개선)',
    tag: ['all'],
  },
  {
    id: 13,
    emoji: '⚡️',
    name: ':zap:',
    description: 'Improve performance.',
    'description-ko': '기능, 코드 성능 향상(개선)',
    tag: ['all'],
  },
  {
    id: 14,
    emoji: '👽️',
    name: ':alien:',
    description: 'Update code due to external API changes.',
    'description-ko': '외부 api 변경으로 인한 코드 업데이트',
    tag: ['all'],
  },
  {
    id: 15,
    emoji: '📦️',
    name: ':package:',
    description: 'Add or update compiled files or packages.',
    'description-ko': '패키지 파일 추가 또는 업데이트',
    tag: ['all'],
  },
  {
    id: 16,
    emoji: '🚚',
    name: ':truck:',
    description: 'Move or rename resources (e.g.: files, paths, routes).',
    'description-ko': '파일 이동 또는 이름 변경',
    tag: ['all'],
  },
  {
    id: 17,
    emoji: '🔥',
    name: ':fire:',
    description: 'Remove code or files.',
    'description-ko': '코드나 파일 삭제',
    tag: ['all'],
  },
  {
    id: 18,
    emoji: '🩹',
    name: ':adhesive_bandage:',
    description: 'Simple fix for a non-critical issue.',
    'description-ko': '간단한 에러 해결',
    tag: ['all', 'error'],
  },
  {
    id: 19,
    emoji: '🐛',
    name: ':bug:',
    description: 'Fix a bug.',
    'description-ko': '버그(오류) 해결',
    tag: ['all', 'error'],
  },
  {
    id: 20,
    emoji: '🗃️',
    name: ':card_file_box:',
    description: 'Perform database related changes.',
    'description-ko': '데이터베이스 관련 변경사항',
    tag: ['server'],
  },
  {
    id: 21,
    emoji: '💄',
    name: ':lipstick:',
    description: 'Add or update the UI and style files.',
    'description-ko': 'UI / 스타일 추가 또는 업데이트',
    tag: ['client'],
  },
  {
    id: 22,
    emoji: '📱',
    name: ':iphone:',
    description: 'Work on responsive design.',
    'description-ko': '반응형 디자인 관련 작업',
    tag: ['client'],
  },
  {
    id: 23,
    emoji: '💫',
    name: ':dizzy:',
    description: 'Add or update animations and transitions.',
    'description-ko': '애니메이션 관련 작업 추가 또는 업데이트',
    tag: ['client'],
  },
  {
    id: 24,
    emoji: '⏪️',
    name: ':rewind:',
    description: 'Revert changes.',
    'description-ko': 'git revert 또는 reset 할 때 사용',
    tag: ['all', 'git'],
  },
  {
    id: 25,
    emoji: '🔀',
    name: ':twisted_rightwards_arrows:',
    description: 'Merge branches.',
    'description-ko': '브랜치 머지할 때 사용',
    tag: ['all', 'git'],
  },
  {
    id: 26,
    emoji: '🔖',
    name: ':bookmark:',
    description: 'Release / Version tags.',
    'description-ko': '버전 태그',
    tag: ['all'],
  },
  {
    id: 27,
    emoji: '🚀',
    name: ':rocket:',
    description: 'Deploy stuff.',
    'description-ko': '배포',
    tag: ['all'],
  },
];

export default emojiData;
