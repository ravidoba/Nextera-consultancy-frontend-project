import img1 from '../assets/assets/Home/CaseStudy1.png';
import img2 from '../assets/assets/Home/image 27.png';
import img3 from '../assets/assets/Home/image 28.png';
import img4 from '../assets/assets/Home/image 29.png';
import img5 from '../assets/assets/Home/image 30.png';
import img6 from '../assets/assets/Home/image 31.png';

export const projects = [
  {
    title: "Renoveta Works",
    image: img1,
    background: "bg-pink",
    link: `/portfolio/renoveta-works`,
    list: [
      "UI/UX",
      "IOS",
      "Android"
    ]
  },
  {
    title: "Final Shere",
    image: img2,
    background: "bg-lavender",
    link: `/portfolio/final-shere`,
    list: [
      "Web",
      "IOS",
      "Android"
    ]
  },
  {
    title: "Crypto Edge",
    image: img3,
    background: "bg-lightblue",
    link: `/portfolio/crypto-edge`,
    list: [
      "UI/UX",
      "IOS",
      "Android"
    ]
  },
  {
    title: "Track Fusion",
    image: img4,
    background: "bg-lightpink",
    link: `/portfolio/track-fusion`,
    list: [
      "IOS",
      "Android"
    ]
  },
  {
    title: "Block Vault",
    image: img5,
    background: "bg-lightblue",
    link: `/portfolio/block-vault`,
    list: [
      "IOS",
      "Android"
    ]
  },
  {
    title: "Screen Scrae",
    image: img6,
    background: "bg-lavender",
    link: `/portfolio/screen-scrae`,
    list: [
      "Web",
      "IOS",
      "Android"
    ]
  }
];
export const services1 = [
  {
    id: "01",
    title: "Product Design",
    description:
      "Our product design services transform your ideas into reality with striking logo design, cohesive branding, and seamless UI/UX for mobile and web applications.",
    logo: [
      { name: "Adobe Illustrator", src: new URL('../assets/Icons/Logos/Property 1=adobe-illustrator logo.svg', import.meta.url).href },
      { name: "Adobe XD", src: new URL('../assets/Icons/Logos/Property 1=adobe-xd logo.svg', import.meta.url).href },
      { name: "Figma", src: new URL('../assets/Icons/Logos/Property 1=figma logo.svg', import.meta.url).href },
      { name: "Sketch", src: new URL('../assets/Icons/Logos/Property 1=sketch logo.svg', import.meta.url).href },
      { name: "Photoshop", src: new URL('../assets/Icons/Logos/Property 1=photoshop-original logo.svg', import.meta.url).href },
    ],
    link : `/product-design`
  },
  {
    id: "02",
    title: "Mobile Development",
    description:
      "We excel in creating high-performance mobile applications designed to meet your unique needs. Whether native or cross-platform, our apps deliver seamless user experiences.",
    logo: [
      { name: "Android", src: new URL('../assets/Icons/Logos/Property 1=android logo.svg', import.meta.url).href },
      { name: "Flutter", src: new URL('../assets/Icons/Logos/Property 1=Flutter.svg', import.meta.url).href },
      { name: "iOS", src: new URL('../assets/Icons/Logos/Property 1=IOS_logo logo.svg', import.meta.url).href },
      { name: "React", src: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href },
    ],
    link : `/mobile-development`
  },
  {
    id: "03",
    title: "Web Development",
    description:
      "Our web app development services deliver robust, scalable, and responsive solutions. We create interactive applications with exceptional performance and engagement.",
    logo: [
      // { name: "Photoshop", src: new URL('../assets/Icons/Logos/Property 1=photoshop-original logo.svg', import.meta.url).href },
      { name: "Angular", src: new URL('../assets/Icons/Logos/Property 1=Angular.svg', import.meta.url).href },
      { name: "Shopify", src: new URL('../assets/Icons/Logos/Property 1=Shopify.svg', import.meta.url).href },
      { name: "VueJS", src: new URL('../assets/Icons/Logos/Property 1=Vuejs.svg', import.meta.url).href },
      { name: "WordPress", src: new URL('../assets/Icons/Logos/Property 1=Wordpress.svg', import.meta.url).href },
      { name: "React", src: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href },
    ],
    link : `/web-development`
  },
  {
    id: "04",
    title: "Backend Development",
    description:
      "Our backend development services deliver secure, efficient, and scalable server-side solutions. From data management to API integration, we ensure your application operates seamlessly.",
    logo: [
      { name: "AWS", src: new URL('../assets/Icons/Logos/Property 1=aws logo.svg', import.meta.url).href },
      { name: "Azure", src: new URL('../assets/Icons/Logos/Property 1=azure logo.svg', import.meta.url).href },
      { name: "Google Cloud", src: new URL('../assets/Icons/Logos/Property 1=google-cloud logo.svg', import.meta.url).href },
      { name: "Spring", src: new URL('../assets/Icons/Logos/Property 1=Spring.svg', import.meta.url).href },
      { name: "Node", src: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href },
      { name: "Python", src: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href },
    ],
    link : `/backend-development`
  },
  {
    id: "05",
    title: "AI Development",
    description:
      "We partner with businesses to design efficient digital products, focusing on user-centered UX and interaction design to ensure seamless experiences that drive success.",
    logo: [
      { name: "ChatGPT", src: new URL('../assets/Icons/Logos/Property 1=ChatGPT_logo_Square logo.svg', import.meta.url).href },
      { name: "Claude AI", src: new URL('../assets/Icons/Logos/Property 1=Claude ai.svg', import.meta.url).href },
      { name: "Gemini", src: new URL('../assets/Icons/Logos/Property 1=Gemini.svg', import.meta.url).href },
      { name: "MidJourney", src: new URL('../assets/Icons/Logos/Property 1=midjourney logo.svg', import.meta.url).href },
    ],
    link : `/ai-development`
  },
];
export const features = [
  {
    title: "Expertise and Experience",
    description:
      "With a track record of successful projects across various domains, we bring a wealth of knowledge and skills to the table, making us the best software development company.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that every project is unique, with its own set of requirements and challenges. We are more of an IT solution provider company.",
  },
  {
    title: "Transparent Communication",
    description:
      "From project inception to delivery and beyond, we keep our clients informed every step of the way, ensuring alignment and satisfaction.",
  },
  {
    title: "Cutting-Edge Technologies",
    description:
      "From AI to blockchain and cloud computing, we leverage the most advanced tools and technologies to develop innovative solutions that drive business growth and success.",
  },
  {
    title: "Scalability & Security",
    description:
      "Whether you’re a small startup or a large enterprise, we build robust, scalable & secure applications that can grow with your business at every stage of the development process.",
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and strive to deliver projects on time, every time, without compromising on quality. Our ultimate goal is client satisfaction.",
  },
];
export const aboutbento = [
  {
    id: 1,
    title: "Curiousity",
    description: "We constantly seek new knowledge and approaches to improve our software development process, resulting in cutting-edge solutions that meet the clients needs",
    gridArea: "1 / 1 / 2 / 2"
  },
  {
    id: 2,
    title: "Transparency",
    description: "We believe in transparency, and we strive to maintain open communication channels with our clients throughout the software development process.",
    gridArea: "1 / 2 / 2 / 3"
  },
  {
    id: 3,
    title: "Investigation",
    description: "We perform thorough investigations into our clients' business processes, challenges, and goals to understand their specific needs.",
    gridArea: "1 / 3 / 2 / 4"
  },
  {
    id: 4,
    title: "Gut Feeling",
    description: "Our team's passion and intuition fuel our work, ensuring that we deliver high-quality solutions that exceed our clients' expectations.",
    gridArea: "2 / 1 / 3 / 3"
  },
  {
    id: 5,
    title: "Ideation",
    description: "We encourage ideation and collaboration within our team, fostering an environment that promotes creativity, innovation, and problem-solving.",
    gridArea: "2 / 3 / 3 / 4"
  },
  {
    id: 6,
    title: "Follow up",
    description: "We are committed to our clients' success, and we provide ongoing support and maintenance to ensure their systems remain up-to-date and continue to provide values.",
    gridArea: "3 / 1 / 4 / 4"
  }
];
export const icons = [
  {
    name: "Aviation",
    img1: new URL('../assets/Icons/h/Aviation.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Aviation.svg', import.meta.url).href,
  },
  {
    name: "Business App",
    img1: new URL('../assets/Icons/h/business app.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Business app.svg', import.meta.url).href,
  },
  {
    name: "E-commerce",
    img1: new URL('../assets/Icons/h/ecommerce.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Ecommerce.svg', import.meta.url).href,
  },
  {
    name: "Education",
    img1: new URL('../assets/Icons/h/Education.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Education.svg', import.meta.url).href,
  },
  {
    name: "Entertainment",
    img1: new URL('../assets/Icons/h/Entertainment.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Entertainment.svg', import.meta.url).href,
  },
  {
    name: "E-vehicle",
    img1: new URL('../assets/Icons/h/Evehicle.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/E-vehicle.svg', import.meta.url).href,
  },
  {
    name: "Fintech",
    img1: new URL('../assets/Icons/h/fintech.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Fintech.svg', import.meta.url).href,
  },
  {
    name: "Fitness",
    img1: new URL('../assets/Icons/h/Fitness.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Fitness.svg', import.meta.url).href,
  },
  {
    name: "Healthcare",
    img1: new URL('../assets/Icons/h/health care.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Healthcare.svg', import.meta.url).href,
  },
  {
    name: "IoT",
    img1: new URL('../assets/Icons/h/IoT.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/IoT.svg', import.meta.url).href,
  },
  {
    name: "Logistics",
    img1: new URL('../assets/Icons/h/Logistics.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Logistics.svg', import.meta.url).href,
  },
  {
    name: "Real Estate",
    img1: new URL('../assets/Icons/h/real estate.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Real Estate.svg', import.meta.url).href,
  },
  {
    name: "Social Networking",
    img1: new URL('../assets/Icons/h/Social networking.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Social Networking.svg', import.meta.url).href,
  },
  {
    name: "Sports",
    img1: new URL('../assets/Icons/h/sports.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Sports.svg', import.meta.url).href,
  },
  {
    name: "Travel",
    img1: new URL('../assets/Icons/h/travel.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/hi/Travel.svg', import.meta.url).href,
  }
];
export const ProductIcons = [
  {
    name: "Adobe Illustrator", 
    img1: new URL('../assets/Icons/Logos/Property 1=adobe-illustrator logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=adobe-illustrator logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Adobe XD", 
    img1: new URL('../assets/Icons/Logos/Property 1=adobe-xd logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=adobe-xd logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "After Effects", 
    img1: new URL('../assets/Icons/Logos/Property 1=After effects.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=After effects.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Balsamiq", 
    img1: new URL('../assets/Icons/Logos/Property 1=Balsamiq logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Balsamiq logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "InVision", 
    img1: new URL('../assets/Icons/Logos/Property 1=invision-icon logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=invision-icon logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Miro", 
    img1: new URL('../assets/Icons/Logos/Property 1=miro-icon logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=miro-icon logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Sketch", 
    img1: new URL('../assets/Icons/Logos/Property 1=sketch logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=sketch logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Zeplin", 
    img1: new URL('../assets/Icons/Logos/Property 1=zeplin logo.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/Logos/Property 1=zeplin logo.svg', import.meta.url).href,
     size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Figma", 
    img1: new URL('../assets/Icons/Logos/Property 1=figma logo.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/Logos/Property 1=figma logo.svg', import.meta.url).href,
     size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Photoshop", 
    img1: new URL('../assets/Icons/Logos/Property 1=photoshop-original logo.svg', import.meta.url).href,
        img2: new URL('../assets/Icons/Logos/Property 1=photoshop-original logo.svg', import.meta.url).href,
     size: '14px',
    height: '130px',
    gap: '1rem'
  },

]
export const logos = [
  { name: "Adobe Illustrator", src: new URL('../assets/Icons/Logos/Property 1=adobe-illustrator logo.svg', import.meta.url).href },
  { name: "Adobe XD", src: new URL('../assets/Icons/Logos/Property 1=adobe-xd logo.svg', import.meta.url).href },
  { name: "After Effects", src: new URL('../assets/Icons/Logos/Property 1=After effects.svg', import.meta.url).href },
  { name: "Android", src: new URL('../assets/Icons/Logos/Property 1=android logo.svg', import.meta.url).href },
  { name: "Angular", src: new URL('../assets/Icons/Logos/Property 1=Angular.svg', import.meta.url).href },
  { name: "AWS", src: new URL('../assets/Icons/Logos/Property 1=aws logo.svg', import.meta.url).href },
  { name: "Azure", src: new URL('../assets/Icons/Logos/Property 1=azure logo.svg', import.meta.url).href },
  { name: "Balsamiq", src: new URL('../assets/Icons/Logos/Property 1=Balsamiq logo.svg', import.meta.url).href },
  { name: "ChatGPT", src: new URL('../assets/Icons/Logos/Property 1=ChatGPT_logo_Square logo.svg', import.meta.url).href },
  { name: "Claude AI", src: new URL('../assets/Icons/Logos/Property 1=Claude ai.svg', import.meta.url).href },
  { name: "Flutter", src: new URL('../assets/Icons/Logos/Property 1=Flutter.svg', import.meta.url).href },
  { name: "Gemini", src: new URL('../assets/Icons/Logos/Property 1=Gemini.svg', import.meta.url).href },
  { name: "Google Cloud", src: new URL('../assets/Icons/Logos/Property 1=google-cloud logo.svg', import.meta.url).href },
  { name: "InVision", src: new URL('../assets/Icons/Logos/Property 1=invision-icon logo.svg', import.meta.url).href },
  { name: "iOS", src: new URL('../assets/Icons/Logos/Property 1=IOS_logo logo.svg', import.meta.url).href },
  { name: "Java", src: new URL('../assets/Icons/Logos/Property 1=Java.svg', import.meta.url).href },
  { name: "JavaScript", src: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href },
  { name: "Kotlin", src: new URL('../assets/Icons/Logos/Property 1=Kotlin.svg', import.meta.url).href },
  { name: "Laravel", src: new URL('../assets/Icons/Logos/Property 1=laravel logo.svg', import.meta.url).href },
  { name: "MidJourney", src: new URL('../assets/Icons/Logos/Property 1=midjourney logo.svg', import.meta.url).href },
  { name: "Miro", src: new URL('../assets/Icons/Logos/Property 1=miro-icon logo.svg', import.meta.url).href },
  { name: "NestJS", src: new URL('../assets/Icons/Logos/Property 1=NestJS 1.svg', import.meta.url).href },
  { name: "Redux", src: new URL('../assets/Icons/Logos/Property 1=redux.svg', import.meta.url).href },
  { name: "Shopify", src: new URL('../assets/Icons/Logos/Property 1=Shopify.svg', import.meta.url).href },
  { name: "Sketch", src: new URL('../assets/Icons/Logos/Property 1=sketch logo.svg', import.meta.url).href },
  { name: "Spring", src: new URL('../assets/Icons/Logos/Property 1=Spring.svg', import.meta.url).href },
  { name: "Swift", src: new URL('../assets/Icons/Logos/Property 1=swift.svg', import.meta.url).href },
  { name: "Terraform", src: new URL('../assets/Icons/Logos/Property 1=terraform logo.svg', import.meta.url).href },
  { name: "TypeScript", src: new URL('../assets/Icons/Logos/Property 1=Typescript.svg', import.meta.url).href },
  { name: "VueJS", src: new URL('../assets/Icons/Logos/Property 1=Vuejs.svg', import.meta.url).href },
  { name: "Webflow", src: new URL('../assets/Icons/Logos/Property 1=Webflow logo.svg', import.meta.url).href },
  { name: "WordPress", src: new URL('../assets/Icons/Logos/Property 1=Wordpress.svg', import.meta.url).href },
  { name: "Zeplin", src: new URL('../assets/Icons/Logos/Property 1=zeplin logo.svg', import.meta.url).href },
  { name: "Flutter Flow 1", src: new URL('../assets/Icons/Logos/Flutter flow logo 1.png', import.meta.url).href },
  { name: "Flutter Flow", src: new URL('../assets/Icons/Logos/Flutter flow.png', import.meta.url).href },
  { name: "Docker", src: new URL('../assets/Icons/Logos/Property 1=Docker.svg', import.meta.url).href },
  { name: "Dart", src: new URL('../assets/Icons/Logos/Property 1=dart logo.svg', import.meta.url).href },
  { name: "Figma", src: new URL('../assets/Icons/Logos/Property 1=figma logo.svg', import.meta.url).href },
  { name: "Firebase", src: new URL('../assets/Icons/Logos/Property 1=firebase logo.svg', import.meta.url).href },
  { name: "Node", src: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href },
  { name: "Photoshop", src: new URL('../assets/Icons/Logos/Property 1=photoshop-original logo.svg', import.meta.url).href },
  { name: "Python", src: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href },
  { name: "React", src: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href },
];

export const Productfeatures = [
  {
    id: 1,
    title: "World class team",
    description: "With our end-to-end design expertise, we can handle every aspect of your project from start to finish, ensuring a cohesive and user-friendly design."
  },
  {
    id: 2,
    title: "Lean UX approach",
    description: "Our lean UX approach prioritizes user needs and feedback, resulting in a streamlined design process that delivers maximum value with minimal waste."
  },
  {
    id: 3,
    title: "Curiosity",
    description: "Our curiosity drives us to ask the right questions, identify opportunities, and create solutions that meet your unique business needs."
  },
  {
    id: 4,
    title: "Rapid Results",
    description: "We deliver rapid results without sacrificing quality, using agile methodologies and efficient design processes to ensure timely delivery of high-quality designs."
  },
  {
    id: 5,
    title: "Collaborative",
    description: "We believe in working closely with our clients throughout the design process, from ideation to implementation."
  },
  {
    id: 6,
    title: "User centric",
    description: "Our user-centric approach ensures that your users can easily navigate your website or application, resulting in increased engagement and conversions"
  }
];

export const producttFixedGrid = [

  {
    title: "Track Fusion",
    image: img4,
    background: "bg-lightpink",
    list: [
      "IOS",
      "Android"
    ],
    link: `/portfolio/track-fusion`
  },
  {
    title: "Block Vault",
    image: img5,
    background: "bg-lightblue",
    list: [
      "IOS",
      "Android"
    ],
    link: `/portfolio/block-vault`
  },
  {
    title: "Screen Scrae",
    image: img6,
    background: "bg-lavender",
    list: [
      "Web",
      "IOS",
      "Android"
    ],
    link: `/portfolio/screen-scrae`

  }
];

export const MobileLogoDev = [
  {
    name: "Android", 
    img1: new URL('../assets/Icons/Logos/Property 1=android logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=android logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Flutter", 
    img1: new URL('../assets/Icons/Logos/Property 1=Flutter.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Flutter.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "iOS", 
    img1: new URL('../assets/Icons/Logos/Property 1=IOS_logo logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=IOS_logo logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Java", 
    img1: new URL('../assets/Icons/Logos/Property 1=Java.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Java.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "JavaScript", 
    img1: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Kotlin", 
    img1: new URL('../assets/Icons/Logos/Property 1=Kotlin.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Kotlin.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Swift", 
    img1: new URL('../assets/Icons/Logos/Property 1=swift.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=swift.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Flutter Flow", 
    img1: new URL('../assets/Icons/Logos/Flutter flow.png', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Flutter flow.png', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Dart", 
    img1: new URL('../assets/Icons/Logos/Property 1=dart logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=dart logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "React", 
    img1: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },

]
export const AiLogoDev = [
  {
    name: "ChatGPT", 
    img1: new URL('../assets/Icons/Logos/Property 1=ChatGPT_logo_Square logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=ChatGPT_logo_Square logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Claude AI", 
    img1: new URL('../assets/Icons/Logos/Property 1=Claude ai.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Claude ai.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Gemini", 
    img1: new URL('../assets/Icons/Logos/Property 1=Gemini.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Gemini.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Java", 
    img1: new URL('../assets/Icons/Logos/Property 1=Java.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Java.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "JavaScript", 
    img1: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "MidJourney", 
    img1: new URL('../assets/Icons/Logos/Property 1=midjourney logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=midjourney logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Node", 
    img1: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Python", 
    img1: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
]
export const BackendLogo = [
  {
    name: "AWS", 
    img1: new URL('../assets/Icons/Logos/Property 1=aws logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=aws logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Azure", 
    img1: new URL('../assets/Icons/Logos/Property 1=azure logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=azure logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Google Cloud", 
    img1: new URL('../assets/Icons/Logos/Property 1=google-cloud logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=google-cloud logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Laravel", 
    img1: new URL('../assets/Icons/Logos/Property 1=laravel logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=laravel logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Spring", 
    img1: new URL('../assets/Icons/Logos/Property 1=Spring.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Spring.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Terraform", 
    img1: new URL('../assets/Icons/Logos/Property 1=terraform logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=terraform logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Docker", 
    img1: new URL('../assets/Icons/Logos/Property 1=Docker.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Docker.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Firebase", 
    img1: new URL('../assets/Icons/Logos/Property 1=firebase logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=firebase logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Node", 
    img1: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Node.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },
  {
    name: "Python", 
    img1: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=python logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'
  },

]
export const Mobiledevfeatures = [
  {
    id: 1,
    title: "Highly-skilled developers",
    description: `Our experienced developers create high-quality, scalable apps that meet your business needs and use the latest technologies to stay competitive.`
  },
  {
    id: 2,
    title: "Agile project management",
    description: `We use an agile approach to work collaboratively with our clients, adapt to changing requirements, and deliver your app on time and within budget.`
  },
  {
    id: 3,
    title: "Fast communication",
    description: `We provide fast communication and updates to keep you informed and involved throughout the development process.`
  },
  {
    id: 4,
    title: "Modern technologies",
    description: `We use the latest technologies and development practices to create apps that are optimized for performance, user experience, and security.`
  },
  {
    id: 5,
    title: "High security",
    description: `We follow industry-standard security practices and protocols to ensure that your app is secure and protected against cyber threats.`
  },
  {
    id: 6,
    title: "Robust security",
    description: `We ensure compliance with leading security standards, including NIST CSF, ISO 27001, HIPAA, and GDPR, to keep your data and your users’ data safe and secure.`
  }
];

export const aiFeaturesdev = [
  {
    id: "specialized",
    title: "Specialized Expertise",
    description: "Our engineers are among the top 1% of tech talent, with specialized AI expertise and skills across various niches, languages, and tools, ensuring excellence in every project."
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    description: "We are a custom software development company delivering tailored solutions across 50+ industries, with AI models designed to meet your unique business goals."
  },
  {
    id: "result-driven",
    title: "Result-driven",
    description: "Our result-driven strategies focus on purposeful actions to deliver impactful outcomes that drive your business forward."
  },
  {
    id: "security",
    title: "Security",
    description: "We prioritize top-level security in every AI project, with our developers implementing strong safety protocols to ensure reliable AI software solutions."
  },
  {
    id: "error-free",
    title: "Error-free",
    description: "Achieve flawless results with our error-free AI services, where we design and conduct rigorous testing to ensure precision and accuracy at every stage."
  },
  {
    id: "tailor-made",
    title: "Tailor-made",
    description: "Our custom AI services are carefully designed to address your specific needs, offering a personalized experience that exceeds expectations."
  }
];


export const WebLogoDev = [
  {
    name: "Angular", 
    img1: new URL('../assets/Icons/Logos/Property 1=Angular.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Angular.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "JavaScript", 
    img1: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Javascript.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "NestJS", 
    img1: new URL('../assets/Icons/Logos/Property 1=NestJS 1.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=NestJS 1.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "Redux", 
    img1: new URL('../assets/Icons/Logos/Property 1=redux.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=redux.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "Shopify", 
    img1: new URL('../assets/Icons/Logos/Property 1=Shopify.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Shopify.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "TypeScript", 
    img1: new URL('../assets/Icons/Logos/Property 1=Typescript.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Typescript.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "VueJS", 
    img1: new URL('../assets/Icons/Logos/Property 1=Vuejs.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Vuejs.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "Webflow", 
    img1: new URL('../assets/Icons/Logos/Property 1=Webflow logo.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Webflow logo.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "WordPress", 
    img1: new URL('../assets/Icons/Logos/Property 1=Wordpress.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=Wordpress.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },
  {
    name: "React", 
    img1: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href, 
        img2: new URL('../assets/Icons/Logos/Property 1=React.svg', import.meta.url).href, 
    size: '14px',
    height: '130px',
    gap: '1rem'

  },

]

export const whyChooseUs = {
  title: "Why We're the Right Choice",
  description: "We craft tailored solutions that align with your goals. With innovation and excellence, we deliver seamless experiences. Your success is our priority.",
  features: [
    {
      title: "Proven Expertise",
      description: "Our seasoned backend developers deliver exceptional results through their extensive experience and industry-specific knowledge."
    },
    {
      title: "Agile Development Process",
      description: "Our flexible and adaptable approach ensures seamless collaboration and efficient project execution, meeting your unique requirements."
    },
    {
      title: "Tailored Solutions",
      description: "We create customized backend solutions that perfectly align with your business objectives and enhance your overall operational efficiency."
    },
    {
      title: "Modern technologies",
      description: "Our proficiency in the latest technology stacks ensures cutting-edge and future-ready solutions for your backend development needs."
    },
    {
      title: "High security",
      description: "We prioritize the protection of your data and systems by incorporating advanced security measures and best practices in our backend solutions."
    },
    {
      title: "Robust security",
      description: "We ensure compliance with leading security standards, including NIST CSF, ISO 27001, HIPAA, and GDPR, to keep your data and your users' data safe and secure."
    }
  ]
}

export const Backenddevfeatures = [
  {
    number: "01",
    title: "Proven Expertise",
    description: "Our seasoned backend developers deliver exceptional results through their extensive experience and industry-specific knowledge."
  },
  {
    number: "02",
    title: "Agile Development Process",
    description: "Our flexible and adaptable approach ensures seamless collaboration and efficient project execution, meeting your unique requirements."
  },
  {
    number: "03",
    title: "Tailored Solutions",
    description: "We create customized backend solutions that perfectly align with your business objectives and enhance your overall operational efficiency."
  },
  {
    number: "04",
    title: "Modern technologies",
    description: "Our proficiency in the latest technology stacks ensures cutting-edge and future-ready solutions for your backend development needs."
  },
  {
    number: "05",
    title: "High security",
    description: "We prioritize the protection of your data and systems by incorporating advanced security measures and best practices in our backend solutions."
  },
  {
    number: "06",
    title: "Robust security",
    description: "We ensure compliance with leading security standards, including NIST CSF, ISO 27001, HIPAA, and GDPR, to keep your data and your users’ data safe and secure."
  }
]

