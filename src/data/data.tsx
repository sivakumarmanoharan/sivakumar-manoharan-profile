import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/pexels-raulling-30030950.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic2 from '../images/20241224_114854.jpg'
import testimonialImage from '../images/testimonial.webp';
import shreyasImage from '../images/1516824683222.webp'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Sivakumar's Profile",
  description: "Sivakumar's profile site with expertise",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sivakumar Manoharan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm from Windsor. <strong className="text-stone-100">Backend Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Consuy Inc.</strong>, contributing to build a contemporary AI platform supported by Generative AI.
        A master's graduate from <strong className=' text-stone-100'> University of Windsor</strong> in <strong className='text-stone-100'> Applied Computing. </strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Reading books, Practicing new languages and software skills</strong>.
        I am a fitness enthusiast too and love to hit the gym almost everyday. Eager to collaborate with people for innovative projects. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic2,
  description: `Are you looking for a software development professional who is collaborative, team-spirited, a continuous learner, data-driven, and tech-loving? You’ve come to the right place! 🚀\n \n


I’m Sivakumar Manoharan, a polyglot software enthusiast and a master's graduate in Applied Computing at the University of Windsor. Ever since I discovered my love for numbers and computers, I’ve been on an exciting journey to solve problems, build efficient systems, and create value for organizations.


My technical expertise spans Python, JavaScript, and various frameworks, with a strong foundation in software development, system design, and machine learning. My key highlights include:


Developed a human resource management automation tool that benefited 6000+ employees.
Optimized API response times from 1600 ms to 32 ms using in-memory caching.


I am passionate about using technology to create meaningful and innovative solutions while fostering collaboration and empathy in every project I undertake.


Feel free to explore my portfolio to learn more about my work and projects. Let’s connect and create something remarkable together!`,
  aboutItems: [
    {label: 'Location', text: 'Windsor, ON', Icon: MapIcon},
    {label: 'Age', text: `${new Date().getFullYear() - new Date("2000-02-03").getFullYear() - (new Date().setFullYear(0) < new Date("2000-02-03").setFullYear(0) ? 1 : 0)}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Gym, Languages', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Windsor', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Consuy Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 8,
      },
      {
        name: 'Java',
        level: 7
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'FastAPI',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'Springboot',
        level: 5,
      }
    ],
  },
  
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 10
      },
      {
        name :'CSS',
        level: 9
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Other Tools',
    skills: [
      {
        name: 'GitHub',
        level: 10,
      },
      {
        name: 'Postman',
        level: 10,
      },
      {
        name: 'Axios',
        level: 9
      },
      {
        name: 'Microsoft Azure',
        level: 9,
      },
      {
        name: 'JIRA',
        level: 9
      }
    ],
  },
  {
    name:'Spoken Languages',
    skills:[
      {
        name:'English',
        level: 9
      },
      {
        name:'Tamil',
        level: 10
      },
      {
        name:'Hindi',
        level: 7
      },
      {
        name:'Telugu',
        level: 6
      }
    ]
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2023 - December 2024',
    location: 'University of Windsor, Windsor, ON, Canada',
    title: 'Master of Applied Computing',
    content: <p></p>,
  },
  {
    date: 'August 2017 - June 2021',
    location: 'Anna University, Chennai, TN, India',
    title: 'Bachelor of Engineering ( Comp. Sci and Engineering)',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024 - Present',
    location: 'Consuy Inc., Calgary, AB, Canada(Remote) ',
    title: 'Senior Software Engineer Intern',
    content: (
      <p>
    At Consuy, an innovative startup in stealth mode, I have played a pivotal role in developing cutting-edge software solutions, contributing to the team’s vision of delivering transformative products. My accomplishments include: <br/> <br />

    <strong>Optimizing API Performance:</strong> Spearheaded the implementation of Redis Caching, reducing API response times dramatically from 1600 ms to just 32 ms, ensuring a seamless user experience.<br />
    <strong>Efficient Data Management:</strong> Designed and structured 10+ relational database tables with over 30 data attributes, enabling organized and efficient data storage for the application.<br />
    <strong>Context Middleware Integration:</strong> Empowered the AI service to store and process 10+ diverse data items independently, enhancing modularity and scalability.<br />
    <strong>Securing APIs:</strong> Strengthened application security by incorporating JWT token authentication, safeguarding against 10+ types of potential vulnerabilities.<br />
    <strong>Automation for Efficiency:</strong> Automated the core summary update process using AI libraries, reducing manual effort by 50%, streamlining workflows and increasing productivity.<br />

<br />
    My role also involved leading a team of three talented back-end engineers, ensuring high-quality development of REST APIs, and driving collaboration to achieve timely project deliverables.
</p>
    ),
  },
  {
    date: 'June 2021 - June 2023',
    location: 'Brillio Technologies, Bengaluru, KA, India',
    title: 'Software Development Engineer',
    content: (
      <p>
        At Brillio, a full-service digital transformation firm specializing in Product and Platform Engineering, Data Analytics, and Customer Experience, I contributed to building innovative solutions that streamlined processes and enhanced decision-making for the organization. My responsibilities included:
        <br /><br />

<strong>REST API Development:</strong> Designed and optimized APIs to support 6000+ users, ensuring efficient data handling and reducing database query times.<br />
<strong>Data Visualization:</strong> Developed interactive charts and graphs using the Charts.js library, enabling management to make informed decisions based on visual data insights.<br />
<strong>Module Leadership:</strong> Led a team in creating seamless data interchange modules, integrating 25+ data items with third-party APIs for improved efficiency.<br />
<br />
At Brillio, I honed my skills in back-end development, data visualization, and API integration, contributing to impactful solutions that aligned with organizational goals.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Shreyas Rajagopal',
      text: 'Siva is a prime example of how having the right attitude and a desire to better yourself everyday can take you newer professional heights. At Brillio, I had a chance to work with Siva as a developer and was mighty impressed with the way he approaches to solve a problem. He is very thorough and demands absolute clarity in the requirements given to him for development, and his output accordingly reflects high quality of work. Apart from his professional skills, Siva is also adept at interpersonal relationships with his team which allowed for better synergy and made it a joy for his team to work with him. He is a person who is not afraid of stepping outside his comfort zone and in fact prefers to take on new challenges everyday. Quick to learn new languages to communicate better with his team and does not hold back to reach out to multiple teams to get the job done. Siva would be a great assest to any team and earns my highest recommendation!',
      image: shreyasImage
    },
    {
      name: 'Vishnu Asokan',
      text: `I'm pleased to recommend Sivakumar, who quickly transitioned from Python to NodeJS as a fresher. He has a remarkable mindset for problem-solving and consistently delivered high-quality work in a timely manner. He was always eager to explore new technical skills and technologies. These qualities made him an invaluable asset to the FUEL team. He brings a positive attitude and friendly demeanor to the team. I highly endorse him for any development role. He's sure to excel and contribute positively to any team.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Bhanu Sailesh Kappera',
      text: 'I have had the privilege of working alongside Siva Kumar, and I highly recommend him. Siva’s dedication, communication skills, and problem-solving abilities make him an invaluable colleague. His positive attitude and professionalism truly set him apart. Any team would be fortunate to have him onboard.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please feel free to ping me for more opportunities and to connect with me. I am open to connect on the social media handles given below. ',
  items: [
    {
      type: ContactType.Email,
      text: 'siva.ms2000@gmail.com',
      href: 'mailto:siva.ms2000@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Windsor, ON, Canada',
      href: 'https://maps.app.goo.gl/i5oFxaU6xaTuKoKa7',
    },
    {
      type: ContactType.Instagram,
      text: '@dev_in_disguise',
      href: 'https://www.instagram.com/dev_in_disguise/',
    },
    {
      type: ContactType.Github,
      text: 'sivakumarmanoharan',
      href: 'https://github.com/sivakumarmanoharan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sivakumarmanoharan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sivakumarmano/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dev_in_disguise/'},
];
