const navLinks = [
  {
    name: "Projects",
    link: "#projects",
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
  { value: 17, suffix: " ", label: "Tech Courses Completed" },
  { value: 3, suffix: " ", label: "Frontend Projects Built" },
  { value: 2, suffix: " ", label: "Cloud Platforms Explored (AWS, Azure)" },
  { value: 100, suffix: "% ", label: "Commitment to Learning" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Project-Based Learning",
    desc: "Built responsive apps using React, JavaScript, and APIs to turn theory into working solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Quick Learner",
    desc: "Transitioned from marketing to cloud/web dev by self-learning, certifications, and real-world practice.",
  },
  {
    imgPath: "/images/cloud.png",
    title: "Cloud & DevOps Ready",
    desc: "Familiar with AWS, Azure basics, CI/CD concepts, and version control using GitHub.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    fallbackIcon: "/images/logos/react.png",
    scale: 0.8,
    rotation: [0, Math.PI / 4, 0]
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    fallbackIcon: "/images/logos/python.svg",
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    fallbackIcon: "/images/logos/node.png",
    scale: 4.5,
    rotation: [0, -Math.PI / 6, 0]
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    fallbackIcon: "/images/logos/three.png",
    scale: 0.04,
    rotation: [0, Math.PI / 3, 0]
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    fallbackIcon: "/images/logos/git.svg",
    scale: 0.04,
    rotation: [0, 0, 0]
  }
];

const expCards = [
  {
    review: "Being part of the RWS vendor network has introduced me to professional skill assessments and project invitation processes. I've learned how large-scale AI data and localization projects are structured and managed.",
    logoPath: "/images/rws-group.svg",
    title: "Data Service Specialist (Vendor Network)",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Joined RWS vendor network as a freelance Data Service Specialist.",
      "Participated in project invitations aligned with language and data expertise.",
      "Completed skill assessments in language and data-related tasks."
    ],
  },
  {
    review: "The Associate Data Analyst in SQL course enhanced my ability to analyze and query data. I learned how to structure efficient queries, manipulate large datasets, and apply SQL to real-world business scenarios.",
    logoPath: "/images/datacamp.svg",
    title: "Associate Data Analyst in SQL",
    date: "Issued by DataCamp",
    responsibilities: [
      "Developed skills in writing SQL queries for data extraction and analysis.",
      "Learned to manage, join, and transform relational datasets.",
      "Gained practical insights into applying SQL for analytics tasks."
    ],
  },
  {
    review: "The AWS Cloud Practitioner certification gave me foundational knowledge of cloud concepts, AWS services, and cloud security. I learned how to apply cloud technologies to solve business challenges and gained confidence in cloud computing fundamentals.",
    logoPath: "/images/datacamp.svg",
    title: "AWS Cloud Practitioner",
    date: "Issued by DataCamp",
    responsibilities: [
      "Understood AWS global infrastructure and core cloud concepts.",
      "Explored cloud security, compliance, and cost management principles.",
      "Applied cloud computing fundamentals to practical business use cases."
    ],
  },
  {
    review: "Through the Advanced React certification, I deepened my knowledge of React hooks, context API, and performance optimization. I learned how to design more efficient, scalable, and maintainable React applications.",
    logoPath: "/images/meta.png",
    title: "Advanced React",
    date: "Issued by Meta",
    responsibilities: [
      "Mastered advanced state management using hooks and context.",
      "Improved application performance with best practices and optimization.",
      "Learned techniques to build scalable, maintainable React apps."
    ],
  },
  {
    review: "Completing the Full-Stack Web Development with React specialization helped me gain hands-on experience in building modern web applications. I learned to use React, Node.js, and REST APIs effectively, improving my frontend and backend development skills.",
    logoPath: "/images/full-stack.png",
    title: "Full-Stack Web Development with React",
    date: "Issued by The Hong Kong University of Science and Technology (Coursera)",
    responsibilities: [
      "Built reusable components and applied advanced React concepts.",
      "Integrated Node.js and backend services with frontend applications.",
      "Strengthened understanding of full-stack development workflows."
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    imgLink: "https://www.instagram.com/parvej.neshan/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    imgLink: "https://www.facebook.com/parvej.neshan",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    imgLink: "https://x.com/NeshanParvej",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    imgLink: "https://www.linkedin.com/in/neshan-parvej/",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
