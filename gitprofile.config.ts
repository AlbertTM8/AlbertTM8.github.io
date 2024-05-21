// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AlbertTM8', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',

  external: {
      header: 'My Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Stable Diffusion Texture Map Generator',
          description:
            'Unreal plug-in for creating texture maps through AI diffusion models (Stable Diffusion)',
          imageUrl:
            'https://drive.google.com/file/d/1vvipvcQ2aWhUN3yVayBArVaFMKl8SrfL/view?usp=drive_link',
          link: 'https://example.com',
        },
        {
          title: 'Penrose Steps',
          description:
            'Animation made with Maya to create infinitely falling hockey puck; includes a MEL script for creating layout of scene',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Rise and Fall Project',
          description:
            'Animation that I directed ',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AlbertTM8/SDtoUnrealGit', 'AlbertTM8/Animation-Software-Engineering-Project', 'AlbertTM8/Maya-Penrose-Steps-Project', 'AlbertTM8/Crack-Simulation-Hybrid', 'AlbertTM8/Simulation-Bournemouth','AlbertTM8/PipelineandTD','AlbertTM8/Group-Project-Final-Video', 'AlbertTM8/HuntedGameUnreal'] // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  seo: {
    title: 'Portfolio of Albert Tan-Mulligan',
    description: 'MSC Computer Animation and Visual Effects graduate, technical artist, skilled at coding and 3D Mathematics. Quick, eager learner with strong analytical and creative problem-solving skills. ',
    imageURL: '',
  },
  social: {
    linkedin: 'www.linkedin.com/in/albert-tan-mulligan-a59954183',
    website: 'https://alberttm8.github.io/',
    phone: '07588659665',
    email: 'alberttm.techart@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1nxKiAOLWMU360Y8xlrAho1dFP9wFe-4d/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'Houduini',
    'UE5',
    'Maya',
    'Maya',
    'Unix/Linux',
    'Qt/PySide6',
    'Git',
    'Diffusers',
  ],
  experiences: [
    {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ], 
    educations: [
    {
      institution: 'Bournemouth University',
      degree: 'MSc Computer Animation and Visual Effects',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Leeds',
      degree: 'Beng Mechatronics and Robotics',
      from: '2018',
      to: '2021',
    },
  ],
  certifications: [
    {
      name: 'CG Spectrum',
      body: 'Houdini FX',
      year: '2023',
      // link: 'https://example.com',
    },
  ],

  // publications: [
  //   // {
  //   //   title: 'Publication Title',
  //   //   conferenceName: '',
  //   //   journalName: 'Journal Name',
  //   //   authors: 'John Doe, Jane Smith',
  //   //   link: 'https://example.com',
  //   //   description:
  //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   // },
  //   // {
  //   //   title: 'Publication Title',
  //   //   conferenceName: 'Conference Name',
  //   //   journalName: '',
  //   //   authors: 'John Doe, Jane Smith',
  //   //   link: 'https://example.com',
  //   //   description:
  //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   // },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
