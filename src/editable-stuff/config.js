// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kedar",
  middleName: "",
  lastName: "Labde",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kedar-labde",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kedar.labde/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/me.kedar/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kedar-labde-64931ab4/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kedar.jpg"),
  imageSize: 375,
  message:
    "My name is Kedar labde and I am an experienced Android developer with over 9.5 years in the industry, I specialize in crafting high-performance mobile applications using Kotlin and MVVM architecture. My expertise includes working with Dagger for dependency injection, leveraging Jetpack components, and implementing Clean Architecture for scalable and maintainable code. I am proficient in Coroutines, Retrofit, Firebase, and have experience with Flutter and Jetpack Compose for modern UI development. With a strong focus on UI/UX design, performance optimization, and adherence to SOLID principles, I am dedicated to delivering exceptional user experiences. Additionally, I have a deep understanding of Agile methodologies, CI/CD pipelines, and comprehensive testing practices, including unit and integration testing.",
  resume: "https://drive.google.com/file/d/1Yz3Y3EhDmK2n4tCV1HhbN_0t_pdZMyhV/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kedar-labde", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Android", value: 90 },
    { name: "Kotlin", value: 85 },
    { name: "Data Structures", value: 75 },
    { name: "Java", value: 85 },
    { name: "Flutter", value: 75 },
    { name: "Git", value: 90 },
    { name: "Coroutines", value: 90 },
    { name: "MVVM", value: 90 },
    { name: "System Design", value: 90 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true, // Set to false to hide this section
  heading: "Get In Touch", // The heading of the section
  message: "I'm currently looking for full-time opportunities in Mobile Application Development, particularly in Android Development. With over 9.5 years of experience in crafting high-performance mobile applications using Kotlin, MVVM, and Jetpack Compose, I am eager to bring my skills to a new challenge. If you have any positions available, questions, or just want to connect, please feel free to email me at",
  email: "me.kedarlabde@gmail.com", // Your email address
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Lead Android Engineer',// Here Add Company Name
      companylogo: require('../assets/img/onourem_logo.png'),
      date: 'June 2020 – Present',
    },
    {
      role: 'Senior Software Engineer',
      companylogo: require('../assets/img/fulcrum.png'),
      date: 'Mar 2019 – Mar 2020',
    },
    {
      role: 'Senior Software Engineer',
      companylogo: require('../assets/img/benchmark.png'),
      date: 'Dec 2014 – Mar 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
