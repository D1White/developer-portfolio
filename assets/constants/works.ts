interface IWork {
  title: string;
  tools: string[];
  img: string;
  link?: string;
  gitLink: string;
}

export const works: IWork[] = [
  {
    title: 'Rock band website',
    tools: ['Next', 'TS', 'contentful', 'gsap', 'swiper'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/1AfQH3tFVhe8g7vXW2Q9Yi/e833f097e5749564b7d3064e308b9aaf/screenshot-scyther-band.vercel.app-2022.04.30-18_01_27.png',
    link: 'https://subscription-manaher.netlify.app/',
    gitLink: 'https://github.com/D1White/subscription-manager',
  },
  {
    title: 'Subscription manager',
    tools: ['React', 'MobX', 'react-colorful', 'use-debounce'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/2Fx6Q02KYFrK2VKlrh5PZ7/4ef04ca6412f12fb55b372ace2cfc435/Subscription-manager.png?h=680&q=50',
    link: 'https://subscription-manaher.netlify.app/',
    gitLink: 'https://github.com/D1White/subscription-manager',
  },
  {
    title: 'Terminal website',
    tools: ['HTML5', 'CSS3', 'SCSS', 'Gulp'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/3epdN5nqr99q5gK90PRsKD/43df5df61ae98c07c0b62dc4c0df6557/Screenshot_1.jpg?h=680&q=50',
    link: 'https://dwhite.netlify.app/',
    gitLink: 'https://github.com/D1White/terminal_website',
  },
  {
    title: 'Weather app',
    tools: ['React', 'Redux', 'Leafjet', 'OpenWeatherAPI'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/4OS4cRfMR2pqx9EByOsf51/7bad0c49c5ff45873763630fa9726278/weather-app85ac5fc0fde1a505.png?h=680&q=50',
    link: 'https://1white-weather-app.netlify.app/',
    gitLink: 'https://github.com/D1White/weather-app',
  },
  {
    title: 'ToDo app',
    tools: ['React', 'Redux', 'react-router', 'axios'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/3SkBF0CNmZ6d9izspEJuAa/8010484817df24c9bf7f3f9548ec023e/toDoScreen.png?h=680&q=50',
    link: 'https://white-todo.netlify.app/login',
    gitLink: 'https://github.com/D1White/todo-app',
  },
  {
    title: 'AniList',
    tools: ['React', 'Redux', 'Firebase', 'API'],
    img: 'https://images.ctfassets.net/j2v0fdcyld1e/44XFxXwmXMM3cyfbZFZodR/dbaad353cd086da60928f76d342b2278/Screenshot_393b64b915c91ad0d.png?h=680&q=50',
    link: 'https://quizzical-elion-8c18c1.netlify.app/',
    gitLink: 'https://github.com/D1White/anilist-app',
  },
];
