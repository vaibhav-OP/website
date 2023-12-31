import Avatar from "@/public/avatar.webp";

import {
  Vuejs,
  Figma,
  Nextjs,
  Vscode,
  Nodejs,
  Reactjs,
  Mongodb,
  Firebase,
  Tailwind,
  Javascript,
  Typescript,
} from "@/public/icons";

const RESUME_DATA = {
  name: "Vaibhav Dwivedi",
  origin: "India",
  about: "Self taught Full-stack web developer",
  avatarUrl: Avatar,
  shortFrameworks: [
    {
      name: "React.js",
      link: "https://reactjs.org",
    },
    {
      name: "Next.js",
      link: "https://nextjs.org",
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com",
    },
  ],
  frameworks: [
    {
      icon: Vuejs,
      name: "Vue Js",
    },
    {
      icon: Javascript,
      name: "Javascript",
    },
    {
      icon: Typescript,
      name: "Typescript",
    },
    {
      icon: Nextjs,
      name: "Next Js",
    },
    {
      icon: Reactjs,
      name: "React Js",
    },
    {
      icon: Nodejs,
      name: "Node Js",
    },
    {
      icon: Tailwind,
      name: "Tailwind CSS",
    },
  ],

  applications: [
    {
      icon: Figma,
      name: "Figma",
    },
    {
      icon: Vscode,
      name: "VS code",
    },
  ],

  databases: [
    {
      icon: Firebase,
      name: "Firebase",
    },
    {
      icon: Mongodb,
      name: "Mongodb",
    },
  ],
};

RESUME_DATA.summary = `Hi there, my name is ${RESUME_DATA.name}, I am from ${RESUME_DATA.origin} and I am a self taught web developer. I build complex web apps using frameworks such as `;

export default RESUME_DATA;
