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
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { key: 1, text: 'Ideas', imgPath: '/images/ideas.svg' },
    { key: 2, text: 'Concepts', imgPath: '/images/concepts.svg' },
    { key: 3, text: 'Designs', imgPath: '/images/designs.svg' },
    { key: 4, text: 'Code', imgPath: '/images/code.svg' },
    { key: 5, text: 'Ideas', imgPath: '/images/ideas.svg' },
    { key: 6, text: 'Concepts', imgPath: '/images/concepts.svg' },
    { key: 7, text: 'Designs', imgPath: '/images/designs.svg' },
    { key: 8, text: 'Code', imgPath: '/images/code.svg' },
];


const counterItems = [
    { value: 2, suffix: "+", label: "Years of Learning & Building" },
    { value: 5, suffix: "+", label: "Projects Completed" },
    { value: 7, suffix: "+", label: "Technologies Explored" },
    { value: 100, suffix: "%", label: "Dedication to Growth" },
];


const logoIconsList = [
    {
        name: "company1",
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        name: "company2",
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        name: "company3",
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        name: "company4",
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        name: "company5",
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        name: "company6",
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        name: "company7",
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        name: "company8",
        imgPath: "/images/logos/company-logo-8.png",
    },
];


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
            "I began my journey into tech by exploring the fundamentals of web development. This sparked my interest in building user interfaces and interactive websites.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Started Web Development",
        date: "Early 2023",
        responsibilities: [
            "Learned the basics of HTML and CSS.",
            "Built simple landing pages and static sites.",
            "Started exploring how the web works.",
        ],
    },
    {
        review:
            "I deepened my understanding by taking a structured JavaScript course on Udemy. This helped me build dynamic, functional web applications.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "JavaScript Bootcamp (Udemy)",
        date: "2024",
        responsibilities: [
            "Completed Jonas Schmedtmann’s JavaScript course on Udemy.",
            "Built multiple interactive projects like a weather app, quiz app, and a calculator.",
            "Learned key concepts like DOM manipulation, ES6, and API integration.",
        ],
    },
    {
        review:
            "Motivated by curiosity and the growing impact of AI, I started learning Machine Learning and applying it through hands-on projects.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Machine Learning Journey",
        date: "Late 2024 – Present",
        responsibilities: [
            "Enrolled in the Machine Learning A-Z course by Kirill on Udemy.",
            "Built intermediate projects including gesture recognition and classification tasks.",
            "Worked with libraries like scikit-learn, pandas, and matplotlib.",
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

const testimonials = [
    {
        name: "Shruti Kumari",
        mentions: "jhashrutikumari82003@gmail.com",
        review:
            "Working with Ayush was an amazing experience. He built a sign language detection system that actually worked in real-time — it was way more polished than we expected for a college project.",
        imgPath: "/images/client1.png ",
    },
    {
        name: "Saurav Verma",
        mentions: "@saurav.verma",
        review:
            "Ayush helped me build a website for my portfolio and he nailed every detail. His understanding of both design and functionality is rare to find in student developers.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Raghav Sen",
        mentions: "@Raghav.dev",
        review:
            "Ayush is incredibly dedicated and fast at picking up new tech. His ML projects are genuinely impressive for someone still in college. Looking forward to collaborating again!",
        imgPath: "/images/client2.png",
    },
    {
        name: "Nikhil Joshi",
        mentions: "@nikhil.codes",
        review:
            "We worked together on a chatbot project. Ayush took the lead on the logic and integration — and he absolutely delivered. Reliable, clear communication and high-quality code.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Krish Gupta",
        mentions: "@Krish.uiux",
        review:
            "Ayush brought our concept to life with smooth animations and great UI decisions. He has a strong eye for detail and ensures everything works well under the hood too.",
        imgPath: "/images/client4.png",
    },
    {
        name: "Kunal Mehra",
        mentions: "@kunaltechie",
        review:
            "Ayush's passion for AI and development shows in every project he works on. His voice-enabled assistant was a huge hit in our tech fest demo. Super focused and driven.",
        imgPath: "/images/client6.png",
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/ayush_kar_2005/",
        imgPath: "/images/insta.png",
    },

    {
        name: "linkedin",
        url: "www.linkedin.com/in/ayush-kar-a14523289",
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
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};