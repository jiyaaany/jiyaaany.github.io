module.exports = {
  title: `지걸이네`,
  description: `지걸이의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jigeol.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `jiyaaany/jiyaaany.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김지연`,
    bio: {
      role: `개발자`,
      description: ['Fast Learner 🏃🏻‍♀️', '배움을 즐거워하는', '재미있게 일하는'],
      thumbnail: 'me.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/jiyaaany`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `jiyaaany@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.07 ~ ',
        activity: '(주)쿠캣 재직중',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.06 ~ 2021.07',
        activity: '(주)게임원커뮤니케이션주 재직',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2018.11 ~ 2020.05',
        activity: '(주)코비젼 재직',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '~ 2019.01',
        activity: '미림여자정보과학고등학교 졸업',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '칠텐 프로덕트 개발 🎳',
        description:
          '볼러들을 위한 볼링 기록 플랫폼 칠텐 어플리케이션을 개발했습니다. 주요 기능으로는 모임 관리와 게임 기록, 볼러들의 커뮤니티를 제공하고 있습니다.',
        techStack: ['Codeigniter', 'PHP', 'Vue.js'],
        thumbnailUrl: 'chilten.png',
        links: {
          post: '',
          github: 'https://jiyaaany.notion.site/1560423e310d4683a20576c69895ab78',
          demo: 'https://www.chilten.com/',
        },
      },
      {
        title: '게임원 프로덕트 개발 ⚾️',
        description:
          '사회인 야구인을 위한 기록 플랫폼으로, 리그, 팀, 선수 관리 기능을 제공하는 서비스입니다.',
        techStack: ['Codeigniter', 'PHP'],
        thumbnailUrl: 'gameone.png',
        links: {
          post: '',
          github: 'https://jiyaaany.notion.site/636ef793d73440e985ee82bdd780941a',
          demo: 'http://www.gameone.kr/',
        },
      },
    ],
  },
};
