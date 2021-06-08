const projects = [
  {
    id: 1,
    title: "Look me up",
    type: "Search Engine",
    link: "https://lookkmeup.web.app/",
    image: "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137489/Portfolio/lookmeup_le7lcj.png",
    details: {
      breif: "A google-like mini search engine application with 5k crawled and indexed pages. Worked with 4 other members on both the backend and frontend.",
      techs: ["ReactJS", "Spring Boot", "MongoDB"],
      git: {
        client: "https://github.com/mohammedgrey/Search-Engine",
        server: "https://github.com/mohammedgrey/Search-Engine",
      },
      API: "https://lookme-up.herokuapp.com/",
    },
  },
  {
    id: 2,
    title: "IzI Handmade",
    type: "Online Store",
    link: "https://izihandmade.web.app/",
    image: "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137468/Portfolio/izi_eywaks.png",
    details: {
      breif:
        "An online store project. Worked on this project solo. Firebase was used for authentication (With Facebook and Google.) There are user roles and permissions implemented on both the server and client side, as there is an admin who can add new products and change prices…etc. ",
      techs: ["ReactJS", "NodeJS", "Express", "MongoDB", "Firebase"],
      git: {
        client: "https://github.com/mohammedgrey/izi",
        server: "https://github.com/mohammedgrey/iziserver",
      },
      API: null,
    },
  },
  {
    id: 3,
    title: "Create and Share",
    type: "Social Platform",
    link: "https://createandshare.netlify.app/",
    image: "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137467/Portfolio/cands_mfrs3m.png",
    details: {
      breif:
        "A typical social platform. Worked on this project solo. All the basic CRUD operations are included like showing the user profile, adding and changing pictures and videos, following other users...etc on both the frontend and backend. As well as authentication and authorization implemented from scratch from the server side.",
      techs: ["NodeJS", "Express", "ReactJS", "MongoDB"],
      git: {
        client: "https://github.com/mohammedgrey/createandshare",
        server: "https://github.com/mohammedgrey/createandshareserver",
      },
      API: null,
    },
  },
  {
    id: 4,
    title: "Spotify Clone",
    type: "Music App",
    link: null,
    image: "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137461/Portfolio/spotify_o0hq4e.png",
    details: {
      breif: "A Spotify clone project. Worked on the client side of this project along with 4 other members. My tasks included things like redux management, search page, user page, help page…etc.",
      techs: ["ReactJS", "Redux", "React Router"],
      git: {
        client: "https://github.com/FatemaFawzy/Frontend-Team",
        server: null,
      },
      API: null,
    },
  },
];
export default projects;
