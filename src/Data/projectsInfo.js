const projects = [
  {
    id: 6,
    title: "Dummy Online Store",
    type: "Online Store",
    link: "https://dummyonlinestore.herokuapp.com/",
    image:
      "https://res.cloudinary.com/dxome9kh1/image/upload/v1625888559/Portfolio/dummyOnlineStore_mmnrbr.png",
    details: {
      breif:
        "A website that uses a dummy REST API to load products and add products to a shopping cart.",
      techs: ["ReactJS", "NextJS", "sass"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/mohammedgrey/dummy-online-store",
      },
      API: "https://dummyonlinestore.herokuapp.com/api/products",
      carousel: null,
      PDF: null,
    },
  },
  {
    id: 1,
    title: "Look me up",
    type: "Search Engine",
    link: "https://lookkmeup.web.app/",
    image:
      "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137489/Portfolio/lookmeup_le7lcj.png",
    details: {
      breif:
        "A google-like mini search engine application with 5k crawled and indexed pages. Worked with 3 other members on both the backend and frontend.",
      techs: ["ReactJS", "Spring Boot", "MongoDB"],
      git: {
        client: null,
        server: null,
        both: "https://github.com/mohammedgrey/Search-Engine",
      },
      API: "https://lookme-up.herokuapp.com/",
      carousel: null,
      PDF: "SearchEngine.pdf",
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
      carousel: null,
      PDF: null,
    },
  },
  {
    id: 3,
    title: "EgySchools",
    type: "Schools System",
    image:
      "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331280/Portfolio/EgySchoolsCarousel%20/1_hysikz.png",
    details: {
      breif:
        "This is the project I worked on during my internship period with Datatec last summer. The project is mainly about creating a system that notifies students about their bus arrival time, upcoming exams and assignments due dates. It is also for parents to be able to track down their children’s progress in the school. And there is an admin panel for the staff and teachers to add bus schedules, due dates, and pretty much manage any interaction done with the system like doing the basic CRUD operations to the users/students/stations/routes/trips/drivers…etc. I have personally taken part in developing both the UI of the student-parent/driver application and the admin panel using Flutter and react.JS respectively. I no longer have access to the repository, as my internship period is over but I am providing a carousel for the pages I have worked on.",
      techs: ["ReactJS", "Flutter"],
      git: {
        client: null,
        server: null,
      },
      API: null,
      carousel: [
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331280/Portfolio/EgySchoolsCarousel%20/1_hysikz.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331281/Portfolio/EgySchoolsCarousel%20/2_taecgt.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331278/Portfolio/EgySchoolsCarousel%20/3_w5kg12.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623331286/Portfolio/EgySchoolsCarousel%20/4_lresdt.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623334296/Portfolio/EgySchoolsCarousel%20/5_exwbhs.png",
        "https://res.cloudinary.com/dxome9kh1/image/upload/v1623334296/Portfolio/EgySchoolsCarousel%20/6_nmnqcl.png",
      ],
      PDF: "Datatec.pdf",
    },
  },
  {
    id: 4,
    title: "Create and Share",
    type: "Social Platform",
    link: "https://createandshare.netlify.app/",
    image:
      "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137467/Portfolio/cands_mfrs3m.png",
    details: {
      breif:
        "A typical social platform. Worked on this project solo. It has a web version made with React.JS and Mobile version with React Native. All the basic CRUD operations are included like showing the user profile, adding and changing pictures and videos, following other users...etc on both the frontend and backend. As well as authentication and authorization implemented from scratch from the server side.",
      techs: ["NodeJS", "Express", "ReactJS", "React Native", "MongoDB"],
      git: {
        client: "https://github.com/mohammedgrey/createandshare",
        server: "https://github.com/mohammedgrey/createandshareserver",
      },
      API: null,
      carousel: null,
      PDF: null,
    },
  },
  {
    id: 5,
    title: "Spotify Clone",
    type: "Music App",
    link: null,
    image:
      "https://res.cloudinary.com/dxome9kh1/image/upload/v1623137461/Portfolio/spotify_o0hq4e.png",
    details: {
      breif:
        "A Spotify clone project. Worked on the client side of this project along with 4 other members. My tasks included things like redux management, search page, user page, help page…etc.",
      techs: ["ReactJS", "Redux", "React Router"],
      git: {
        client: "https://github.com/FatemaFawzy/Frontend-Team",
        server: null,
      },
      API: null,
      carousel: null,
      PDF: null,
    },
  },
];

export default projects;
