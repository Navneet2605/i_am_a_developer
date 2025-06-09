const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Production Project" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Code Quality & Test Coverage" },
];
// logo for the slide show like microsfo , docker , addidas etc
const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];
// for the featured card right below the slider company list
const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];
// large techstack icons
const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Angular Developer",
    imgPath: "/images/logos/react1.png",
  },
  {
    name: "React Native Developer",
   imgPath: "/images/logos/react.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Management",
    imgPath: "/images/logos/git.svg",
  },
];
// for the GUI icons 
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Navneet brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/pepperfry.png",
    logoPath: "/images/pficon.png",
    title: "Frontend Developer",
    date: "March 2024 - September 2024",
    responsibilities: [
      "Developed and maintained user-facing features for the Pepperfry Mailing System",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized APM Emailing System that works great with the Dynamic Emails",
    ],
  },
  {
    review:
      "Navneet’s contributions to Pepperfry's BackBone web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/pepperfry.png",
    logoPath: "/images/pficon.png",
    title: "Angular Developer",
    date: "November 2025 - February 2025",
    responsibilities: [
      "Developed and maintained key user-facing modules for internal dashboards using Angular 13 and JavaScript.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Optimized UI components for better load time and responsiveness across devices.",
    ],
  },

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/navneet____kumar/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "Git Hub",
    url: " https://github.com/Navneet2605",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/navneet-kumar05/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};