/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mihajlo's Portfolio",
  description:
    "I am a motivated and organized software developer recently graduated of college with Bachelor's in Electrical And Computer Engineering whos is eager to start a fulfulling career in technology.",
  og: {
    title: "Mihajlo Mitić Portfolio",
    type: "website",
    url: "https://mmitic99.github.io",
  },
};

//Home Page
const greeting = {
  title: "Mihajlo Mitić",
  logo_name: "MihajloMitic",
  nickname: "mmitic99",
  subTitle:
    "I am a motivated and organized software developer recently graduated of college with Bachelor's in Electrical And Computer Engineering whos is eager to start a fulfulling career in technology.",
  resumeLink:
    "https://drive.google.com/file/d/1zhiMr-GPu18EJm3eHaXAdG7WWxq73sQv/view?usp=sharing",
  portfolio_repository: "https://github.com/mmitic99/mmitic99.github.io",
  githubProfile: "https://github.com/mmitic99",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mmitic99",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mihajlomitic/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mihajlomiticmiki@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Creating application backend in Java SpringBoot, C# ASP.Net",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "devicon:spring",
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
        },
        {
          skillName: ".Net",
          fontAwesomeClassname: "logos:dotnet",
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "devicon:html5",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "devicon:css3",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "vscode-icons:file-type-js-official",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon:angular",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4ba74b",
          },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "logos:neo4j",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "skill-icons:heroku",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/mmitic99/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mmitic99",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mmitic99",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@mmitic99",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mmitic99",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculty of Technical Sciences",
      subtitle: "Bachelor with Honours in Electrical and Computer Engineering (B.Elec.Comp.Eng.)",
      logo_path: "ftn.png",
      alt_name: "FTN",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Study field: Computing and Control Engineering, Study modules: Applied Computer Science and Informatics",
        "⚡ I have studied basic software engineering subjects like Object oriented programming, Software Specification and Modeling, Software Desing, Internet Software Architecture, Databases etc.",
        "⚡ Apart from this, I have done courses on Data Science, Full Stack Development.",
      ],
      website_link: "http://www.ftn.uns.ac.rs",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I have no work experience, but I have done one internship. I have a solid background in engineering principles and problem-solving thanks to my education and internship, which makes me a natural fit for sofware development. I have become known for having a strong work ethic, adaptability, and the capacity to pick up new ideas quickly, making me a quick learner in challenging professional settings.",
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",l
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Java Student Internship",
          company: "Levi9 Technology Services",
          company_url: "https://www.levi9.com",
          logo_path: "levi9.png",
          duration: "Mart 2022 - April 2022",
          location: "Novi Sad, Serbia",
          description:
            "The topic of the internship was creating a web application for vehicle booking and displaying the booking history. It was necessary to implement a microservice architecture where microservices communicated with each other via the RESTful API protocol. All microservices were placed on the AWS platform (EC2 instances) where a database (PostgreSQL) was also places. Additional AWS services used were SES (Simple Email Service) and SNS (Simple Notification Service) for sending notification to application users. The Google Maps API was used to display vehicles on the map. Web sockets are used for the purpose of displaying the current state of free vechile. Used tehnologies: Java, Spring Boot, AWS (EC2, RDS), Google Maps API, Feign Client, PostgreSQL, Hibernate ORM, Eureka service discovery, Websockets, Mockito, JUnit, Angular",
          color: "#000000",
        },
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I utilize a wide range of cutting-edge technology tools in my projects. My expertise lies in developing full-stack projects and deploying them as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myPicture.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Email",
    subtitle:
      "mihajlomiticmiki@gmail.com",
    locality: "",
    country: "Serbia",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "(+381)063692919",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
