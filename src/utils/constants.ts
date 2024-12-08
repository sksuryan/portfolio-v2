const BASE_SVG_ICON_URI = '/assets/svg/';

export const Links: Array<{ iconUri: string; alt: string; link: string }> = [
  { iconUri: BASE_SVG_ICON_URI + 'github.svg', alt: 'Github', link: 'https://github.com/sksuryan' },
  {
    iconUri: BASE_SVG_ICON_URI + 'linkedin.svg',
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/saurabh-kumar-suryan-01684b194/',
  },
  { iconUri: BASE_SVG_ICON_URI + 'twitter.svg', alt: 'Twitter', link: 'https://x.com/sksuryan_' },
  { iconUri: BASE_SVG_ICON_URI + 'wordpress.svg', alt: 'Wordpress', link: 'https://thecodelife.science.blog/' },
];

export const ExperienceData: Array<{ companyName: string; position: string; duration: string; details: string }> = [
  {
    companyName: 'Zepto',
    position: 'SE Frontend',
    duration: "Jul'24 - present",
    details:
      '- Currently part of the **Supply chain org** working on the packer app.\n' +
      '- Wrote **error boundary** to detect app crashes and log them to sentry and mixpanel.\n' +
      '- Wrote **GitHub actions** to automate build generation for android builds using fastlane. \n' +
      '- Owning Outbound picking and Cycle count related flows for the packer app.',
  },
  {
    companyName: 'Jupiter Money',
    position: 'SDE 2',
    duration: "Jun'22 - Jul'24",
    details:
      '- Was part of Lending and CS tech team. \n' +
      '- As part of Lending team, owned development of credit cards home, rewards and Settings. \n' +
      '- Built a robust state management system for cards using **state machines**. \n' +
      '- Built an app wide framework for **API response caching**, & remote config enabling offline usage and soft error handling.\n' +
      "- Built reusable components for Jupiter's Europa design system\n" +
      '- Wrote scripts to automate changelog generation. \n' +
      '- Wrote documentation for the frameworks mentioned above for their easier adoption, as well as to create standard practices across the codebase.',
  },
  {
    companyName: 'AfterShoot',
    position: 'SDE Intern',
    duration: "Sept'21 - May'22",
    details:
      '- Worked on revamping the **state management** of the AfterShoot app using **redux**.\n' +
      '- Setup **automation testing** for core app flows using playwright.\n' +
      '- Built components like title bar for their Electron app from scratch.\n' +
      '- Built platform agnostic features like **drag and drop from and to app**.\n' +
      '- Built domain specific features like hover for a zoomed preview. \n',
  },
  {
    companyName: 'Coinvise',
    position: 'SDE Intern',
    duration: "May'21 - Aug'21",
    details:
      '- Built UI components & worked on the redesign of the Coinvise platform using NextJS, TypeScript, React, Tailwind.\n' +
      '- Worked on integrating the frontend with the backend & **GraphQL** server.\n' +
      '- Worked on integrating Ethereum Smart Contracts for the platform using Web3JS.',
  },
  {
    companyName: 'Blue teak labs',
    position: 'SDE Intern',
    duration: "Jun'21 - Aug'21",
    details:
      '- Worked on the building components & state management of an internal tool using React, Redux, Bootstrap.',
  },
  {
    companyName: 'Joomla',
    position: 'Open-Source Contributor',
    duration: "March'21",
    details: '- Made open-source contributions to Joomla CMS.\n' + '- **12 PRs** merged.',
  },
  {
    companyName: 'MLH Fellowship',
    position: 'Batch 1 fellow',
    duration: "Oct'20 - Dec'20",
    details:
      '- Built **6 projects** with various tech stacks including React Native, React, SCSS, Node over a span of 2 months.',
  },
];

export const HI_ICON_URI = 'https://lottie.host/9b2faaf0-59e4-4ef7-ad11-3df3105a75fa/JCN2Z08q9x.lottie';
