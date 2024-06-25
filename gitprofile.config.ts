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
        projects: [
          'AlbertTM8/SDtoUnrealGit',
          'AlbertTM8/Animation-Software-Engineering-Project',
          'AlbertTM8/Rendering',
          'AlbertTM8/Maya-Penrose-Steps-Project',
          'AlbertTM8/Crack-Simulation-Hybrid',
          'AlbertTM8/Simulation-Bournemouth',
          'AlbertTM8/PipelineandTD',
          'AlbertTM8/Group-Project-Final-Video',
          'AlbertTM8/HuntedGameUnreal',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    header: 'My Projects',
    // To hide the `External Projects` section, keep it empty.
    projects: [
      {
        title: 'Stable Diffusion Texture Map Generator',
        description:
          'Unreal plug-in for creating texture maps through AI diffusion models (Stable Diffusion).',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/stablediffusionphotos.jpg?raw=true',
        link: 'https://github.com/AlbertTM8/TextureFusion',
      },
              {
        title: 'Animation Software Engineering',
        description: 'Bezier curve model demo, with pivoting anchor points built using test-driven development. Visualization of "Character articulation through Profile Curves" by Pixar.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/Screenshot%202024-05-21%20144133.png?raw=true',
        link: 'https://github.com/AlbertTM8/Animation-Software-Engineering-Project',
      },
              {
        title: 'Crack Simulation',
        description: 'Masters Thesis. Generating crack patterns procedurally through hybrid physical and heurisitic approach (Artistic and Mathematical). Based on "Generating Surface Crack Patterns" from UC Berkely.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/Screenshot%202024-05-21%20144213.png?raw=true',
        link: 'https://github.com/AlbertTM8/Crack-Simulation-Hybrid',
      },
        {
        title: 'Renderman Python ',
        description: 'Renderman python API to create photorealistic image of a spraypaint can from scratch. RenderMan is a photorealistic 3D rendering software produced by Pixar Animation Studios. PBR and OSL Shaders.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/Rendered%20Image.png?raw=true',
        link: 'https://github.com/AlbertTM8/Rendering',
      },
      {
        title: 'Penrose Steps',
        description:
          'Animation made with Maya to create infinitely falling hockey puck; includes a MEL script for creating layout of scene.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/Screenshot%202024-05-21%20143738.png?raw=true',
        link: 'https://github.com/AlbertTM8/Maya-Penrose-Steps-Project',
      },
      
      {
        title: 'The Hunted - UE5 Game',
        description: 'WIP Progress game in Unreal Engine. Procedurally generated infinite maze map and listen server setup.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/Screenshot%202024-05-21%20144320.png?raw=true',
        link: 'https://github.com/AlbertTM8/HuntedGameUnreal',
      },
          {
        title: 'Fall and Rise Project',
        description: 'Animation that I directed for BU group project. Also did FX, Lighting, Rendering and Layout.',
        imageUrl:
          'https://github.com/AlbertTM8/AlbertTM8.github.io/blob/main/226188630-830d8cd0-dfa3-43d5-819e-822de9b30b0c.png?raw=true',
        link: 'https://github.com/AlbertTM8/Group-Project-Final-Video',
      },
    ],
  },
  
  },

  seo: {
    title: 'Portfolio of Albert Tan-Mulligan',
    description:
      'MSC Computer Animation and Visual Effects graduate, technical artist, skilled at coding and 3D Mathematics. Quick, eager learner with strong analytical and creative problem-solving skills.',
    imageURL: '',
  },

  social: {
    linkedin: 'www.linkedin.com/in/albert-tan-mulligan-a59954183',
    website: 'https://alberttm8.github.io/',
    phone: '07588659665',
    email: 'tanmulliganalbert@gmail.com',
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
    // Example:
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
    class="text-primary" href="https://github.com/arifszn/gitprofile"
    target="_blank"
    rel="noreferrer"
  >GitProfile</a> and ❤️`,

  enablePWA: true,

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
};

export default CONFIG;
