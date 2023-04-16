/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lakshmi Ramesh",
  title: "Hi, I'm Lakshmi",
  subTitle: emoji(
    "A passionate Machine Learning Engineer specializing in deep learning, computer vision and multi-modal ML."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15RM7CuBe9hHLj7Rn1R_Kx-Ln9Ox035si/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rlaxmi024",
  linkedin: "https://www.linkedin.com/in/rlakshmi24/",
  gmail: "lakshmi.ramesh.jobs@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me 👩‍💻",
  subTitle: [
    "As a Machine Learning engineer, I have extensive experience in designing and",
    " implementing deep learning models, including CNNs, transformers, and GNNs.",
    " In addition, I have expertise in 3D segmentation, multi-modal navigation, depth estimation,",
    " and image de-warping. My understanding of deep learning also covers advanced topics such as",
    " optimization algorithms, domain generalization techniques, and attention mechanisms.",
    " I am proficient in both PyTorch and TensorFlow and can quickly adapt to new development environments as needed.",
    " I have successfully implemented various ML projects, ranging from image classification and natural language processing to time series forecasting and reinforcement learning.",
    " I am also comfortable working with large datasets and using data processing and augmentation techniques to improve model performance."
  ],

  skills: [
    emoji("⚡ Programming Languages: Python, C/C++, Embedded C, MATLAB, Bash, Shell, Java, HTML, Javascript" ),
    emoji("⚡ Libraries: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SciPy, NLTK, OpenCV, Flask, Hugging Face"),
    emoji("⚡ Tools and Frameworks: PyTorch, TensorFlow, Keras, MONAI, Git, GitHub, Jira, Docker, Tensorboard, GCP")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  title: "Education 🎓",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Purdue University",
      logo: require("./assets/images/purdue.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "August 2021 - August 2023",
      desc: "Participated in the research of Machine Learning and Computer Vision and worked towards publishing 2 papers.",
      descBullets: [
        "Coursework: Algorithms, Artificial Intelligence, Neural Networks, Social Networks with ML",
        "Awarded USD 15,500 scholarship (top 2% among 8000 students)",
        "Held one Research Assistantship and 2 Teaching Assistantship positions in Machine Learning"
      ]
    },
    {
      schoolName: "Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor of Technology in Electronics and Telecommunication",
      duration: "Aug 2016 - May 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Bachelor of Technology, Electronics and Telecommunication with a GPA: 8.8/10 ",
        "Coursework: Artificial Intelligence, Image Processing, Machine Learning"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title:"Experience 🏢",
  experience: [
    {
      role: "CV/ML Research Assistant",
      company: "UbiEi Lab, Purdue University",
      companylogo: require("./assets/images/UbiEi_Lab.png"),
      date: "Sep 2021 – Present",
      desc: "Brain Tumor Segmentation from 3D MRI Scans",
      descBullets: [
        "Developed a multimodal strategy with 4 MRI scan types for 3D segmentation of 3 brain tumor regions",
        "Utilized feature fusion to select 2 modalities that reduced training time by 60% and model size by 40",
        "Devised shifted-window cross-attention in PyTorch to attain a 91% dice score for a transformer model"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Cummins Inc.",
      companylogo: require("./assets/images/cummins.png"),
      date: "May 2022 – Aug 2022",
      desc: "ULD for ECU Verification",
      descBullets: [
        "Used NI hardware with integrated FPGA to improve the design of ULD for ECU verification in LabView",
        "Impact: Reduced human intervention by 70% and improved fault detection using the automated system",
        "Evaluated the results of 20 simulations and documented a 4-month software proposal for a team of 8"
      ]    
    },

    {
      role: "Machine Learning and Control Intern",
      company: "KPIT",
      companylogo: require("./assets/images/kpit.jpg"),
      date: "Jan 2020 – Jan 2021",
      desc: "AI based Pedestrian Avoidance System with intelligent Automated Braking",
      descBullets: [
        "Collaborated with the ADAS team to simulate 3 automotive systems in Simulink with CNN-guided control",
        "Impact: Achieved a 40% faster response time than the human reaction time in the previous subsystem",
        "Employed YOLOv4 and data augmentation for pedestrian and crosswalk detection with an mAP of 87%"
      ]
    },

    {
      role: "Machine Learning Intern",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.jpg"),
      date: "Sep 2020 – Dec 2020",
      desc: "NLP-based Emotion Detection Pipeline for Analyzing Reviews at Scale",
      descBullets: [
        "Designed an end-to-end NLP pipeline to enable large-scale emotion recognition for an in-house CRM tool",
        "Impact: Improved platform efficiency by ~50% and reduced inference latency to 2.5 sec/1000 requests",
        "Achieved an AUC score of 0.89 by creating an ensemble of 3 models composed of SVM, KNN and BERT"
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Research Projects 🧠"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Morphology Classification of Gravitationally Lensed Galaxies",
      subtitle:
        "Implemented an EfficientNet and U-Net pipeline for dewarping galaxies that have been distorted by the strong gravitational lensing effect",
      image: require("./assets/images/galaxy_dewarping.jpg"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rlaxmi024/AI-Galaxy_Dewarping"
        },
      ]
    },
    {
      title: "Spatiotemporal Demand Forecasting of e-Scooter Rides",
      subtitle:
        "Employed an sparse LSTM-autoencoder to forecast the hourly demand for e-scooters in a 16000-node lattice graph.",
      image: require("./assets/images/escooter.png"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rlaxmi024/Spatiotemporal-demand-prediction"
        }
      ]
    },

    {
      title: "Personalized Book Search",
      subtitle: "Developed a search and recommendation engine that tailors book search results based on individual preferences.",
      image: require("./assets/images/book_search.jpeg"),
      footerLink: [
        {
          name: "GitHub", 
          url: "https://github.com/rlaxmi024/Personlized-book-search"},
      ]
    },

    {
      title: "Soundspaces, Embodied AI challenge, CVPR 2022",
      subtitle: "Designed a multimodal ML algorithm capable of navigating unseen 3D environments to locate an unknown sound source",
      image: require("./assets/images/soundpsaces.jpg"),
      footerLink: [
        {
          name: "GitHub", 
          url: "https://github.com/rlaxmi024/audio-visual-navigation"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research Papers",
  projects: [
    {
      image: require("./assets/images/IEEE.png"),
      projectName: "Deep Multimodal Cross-Attention Learning of Medical Images for Brain Tumor Segmentation",
      projectDesc: "In IEEE review",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/IEEE.png"),
      projectName: "Shifted-Window Cross-Attention in Hierarchical Hourglass Networks",
      projectDesc: "In Progress",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-317-772-8022",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
