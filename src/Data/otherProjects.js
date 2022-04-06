const otherProjects = [
  {
    id: 7,
    title: "Santa Game",
    type: "Game Engine",
    image: require("../images/santa.jpg"),
    link: "https://drive.google.com/file/d/1RSvIiQUV_hW8EbJwNwemhZwKQCLNBjBw/view?usp=sharing",
    details: {
      breif:
        "Developed a santa clause simple game with 3 other members following the ECS framework where I was responsible for the game logic and the colliding component.",
      techs: ["OpenGL", "C++"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/mohammedgrey/GameEngine",
      },
      API: null,
      carousel: null,
      PDF: null,
    },
  },
  {
    id: 10,
    title: "Grades Autofiller",
    type: "Image Processing",
    image: require("../images/Grader.jpg"),
    link: "https://sheetgrader.web.app/",
    details: {
      breif: "Image Processing project to fill out grades or grade bubble sheets automatically.",
      techs: ["Python", "OpenCV", "Flask", "React.JS"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/MoaazZaki/grade_auto_filler",
      },
      API: null,
      carousel: null,
      PDF: "ImageProcessing.pdf",
    },
  },
  {
    id: 8,
    title: "Harvard Processor",
    type: "Processor",
    image: require("../images/hardware.jpg"),
    containImage: true,
    link: null,
    details: {
      breif:
        "Designed and implemented a harvard-like processor that follows the RISC architecture with 3 other members.",
      techs: ["VHDL"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/MoaazZaki/HarvardProcessor",
      },
      API: null,
      carousel: null,
      PDF: "Processor.pdf",
    },
  },
  {
    id: 11,
    title: "Handwritten Font Classifier",
    type: "Machine Learning",
    image: require("../images/FontClassifier.png"),
    containImage: true,
    link: "https://drive.google.com/file/d/1D5ahomRW4M7fShPb3K_HgJEOPcoD0TtX/view?usp=sharing",
    details: {
      breif: "Worked with 3 other members on training a model to classify handwritten fonts.",
      techs: ["Python", "Scikit-learn", "OpenCV"],
      git: {
        client: null,
        server: null,
        both: null,
      },
      API: null,
      carousel: null,
      PDF: "FontClassifier.pdf",
    },
  },
  {
    id: 9,
    title: "Selective Repeat Protocol",
    type: "Networks",
    image: require("../images/Networks.png"),
    containImage: true,
    link: null,
    details: {
      breif: "Selective repeat protocol using omnet++",
      techs: ["omnet++", "C++"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/mohammedgrey/SelectiveRepeatProtocol",
      },
      API: null,
      carousel: null,
      PDF: null,
    },
  },
];
export default otherProjects;
