import drippyPic from "../images/drippypic.png";
import drippyGif from "../images/drippygif.gif";
import greenitPic from "../images/geenitPic.png";
import greenitGif from "../images/greenitGif.gif";
import qoPic from "../images/qoPic.png";
import qoGif from "../images/qoGif.gif";
import Javascript from "../images/logos/js.png";
import React from "../images/logos/react.png";
import Redux from "../images/logos/redux.png";
import Three from "../images/logos/three.png";
import Express from "../images/logos/express.png";
import Sequelize from "../images/logos/sequelize.png";
import Mongo from "../images/logos/mongo.png";
import Goose from "../images/logos/mongoose.png";
import Python from "../images/logos/py.png";
import Flask from "../images/logos/flask.png";
import SQLA from "../images/logos/sqla.png";
import SQL from "../images/logos/sql.png";
import Post from "../images/logos/post.png";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import git from "../images/logos/git.png";

export const skills = [
  {
    name: "Javascript",
    logo: Javascript,
    desc: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    link: "https://www.javascript.com",
  },
  {
    name: "React",
    logo: React,
    desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    link: "https://react.dev",
  },
  {
    name: "Redux",
    logo: Redux,
    desc: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    link: "https://redux.js.org",
  },
  {
    name: "Three.js",
    logo: Three,
    desc: "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. ",
    link: "https://threejs.org",
  },
  {
    name: "Express",
    logo: Express,
    desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. ",
    link: "https://expressjs.com",
  },
  {
    name: "Sequelize",
    logo: Sequelize,
    desc: "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.",
    link: "https://sequelize.org",
  },
  {
    name: "MongoDB",
    logo: Mongo,
    desc: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    link: "https://www.mongodb.com",
  },
  {
    name: "Mongoose",
    logo: Goose,
    desc: "Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.",
    link: "https://mongoosejs.com/",
  },
  {
    name: "Python",
    logo: Python,
    desc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.",
    link: "https://www.python.org",
  },
  {
    name: "Flask",
    logo: Flask,
    desc: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
    link: "https://flask.palletsprojects.com",
  },
  {
    name: "SQLAlchemy",
    logo: SQLA,
    desc: "SQLAlchemy is an open-source SQL toolkit and object-relational mapper for the Python programming language released under the MIT License.",
    link: "https://sqlalchemy.org",
  },
  {
    name: "SQL",
    logo: SQL,
    desc: "Structured Query Language, abbreviated as SQL, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
  },
  {
    name: "PostgreSQL",
    logo: Post,
    desc: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
    link: "https://www.postgresql.org",
  },
  {
    name: "HTML",
    logo: html,
    desc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    link: "https://html.com/",
  },
  {
    name: "CSS",
    logo: css,
    desc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    name: "Git",
    logo: git,
    desc: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
    link: "https://git-scm.com/",
  },
];

export const projects = [
  {
    title: "Drippy",
    url: drippyPic,
    gif: drippyGif,
    desc: "Drippy is a website is designed for customers to view their favourite shoes, add them to their cart and leave reviews.",
    tech: [
      "JavaScript",
      "Python",
      "React",
      "Redux",
      "Flask",
      "SQLAlchemy",
      "PosgreSQL",
      "HTML5",
      "CSS3",
    ],
    live: "https://drippy.onrender.com/",
    git: "https://github.com/taddjv/drippy",
  },
  {
    title: "Greenit",
    url: greenitPic,
    gif: greenitGif,
    desc: "Greenit is a clone of Reddit, a social website and forum where people can share content. The site is composed of multiple subreddits where people can share and discuss the same topic.",
    tech: [
      "JavaScript",
      "React",
      "Redux",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "HTML5",
      "CSS3",
    ],
    live: "https://greenit.onrender.com/",
    git: "https://github.com/taddjv/Tadd_reddit",
  },
  {
    title: "Question Overflow",
    url: qoPic,
    gif: qoGif,
    desc: "Question Overflow, a StackOverflow clone, is a website for users to share brief questions, engage in light discussion, where they and users can vote on posted answers.",
    tech: [
      "JavaScript",
      "Python",
      "React",
      "Redux",
      "Flask",
      "SQLAlchemy",
      "PosgreSQL",
      "HTML5",
      "CSS3",
    ],
    live: "https://questionoverflow.onrender.com/",
    git: "https://github.com/taddjv/question_overflow",
  },
];
