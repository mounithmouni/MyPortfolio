import zomatoClone from "../assets/zomato.png";
import taskList from "../assets/TaskList.png";
import weatherImg from "../assets/WeatherAppImg.png";
import bookImg from "../assets/book.png";
import manBook from "../assets/manOnBooks.png";
import manProgramming from "../assets/manProgramming.png";

export const cardData = [
  {
    name: "B.Tech",
    clgName: "Annamacharya Institute of Technology and Sciences",
    yop: 2024,
    stream: "Artificial Intelligence and Data Science",
    imgUrl: manProgramming,
  },
  {
    name: "Intermediate",
    clgName: "Sri Chaitanya Junior College, Bommana Campus",
    yop: 2020,
    stream: "MPC(Mathematic Physics & Chemistry",
    imgUrl: manBook,
  },
  {
    name: "School",
    clgName: "Prathibha Vidyalaya English Medium High School",
    yop: 2018,
    stream: "Maths,Science,English and Social Science",
    imgUrl: bookImg,
  },
];

export const PROJECTSDATA = [
  {
    btn1: "ReactJs",
    btn2: "Tailwind CSS",
    projName: "Zomato Clone",
    imgUrl: zomatoClone,
    liveUrl: "https://github.com/mounithmouni/zomato_clone",
    demoUrl: "https://github.com/mounithmouni/zomato_clone",
  },
  {
    btn1: "ReactJs",
    btn2: "Tailwind CSS",
    projName: "Weather App",
    imgUrl: weatherImg,
    liveUrl: "https://weather-web-app-5.netlify.app/",
    demoUrl: "https://github.com/mounithmouni/Weather-Web-App",
  },
  {
    btn1: "HTML&CSS",
    btn2: "JavaScript",
    projName: "Task List",
    imgUrl: taskList,
    liveUrl: "https://tasklist4.netlify.app/",
    demoUrl: "https://github.com/mounithmouni/TaskList",
  },
];
