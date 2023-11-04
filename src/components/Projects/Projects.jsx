import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import Button from '../../ui/button/Button';
import Github from '../../assets/github.png';
import Link_icon from '../../assets/link-icon.png';
import Project1 from '../../assets/Project1.jpg';
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';
import Project4 from '../../assets/Project4.png';
import Project5 from '../../assets/Project5.png';
import Project6 from '../../assets/Project6.png';
import Project7 from '../../assets/Project7.png';
import Project8 from '../../assets/Project8.png';
import Project9 from '../../assets/Project9.png';
import Project10 from '../../assets/Project10.png';
import Project11 from '../../assets/Project11.png';
import Project12 from '../../assets/Project12.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const projects = [
    {
      id: 1,
      title: 'PlaynChill',
      category: 'React.js',
      description: "This website is for people who are going to buy online games with a discount but don't know where to buy.",
      technology: 'React.js',
      github: 'https://github.com/SultanKent/ecommerce',
      demo: 'https://sultankent.github.io/ecommerce',
      image: Project1,
    },
    {
      id: 2,
      title: 'Books',
      category: 'React.js',
      description: "If you don't know where to find good books, you should try this website.",
      technology: 'React.js',
      github: 'https://github.com/SultanKent/books-app',
      demo: 'https://sultankent.github.io/books-app',
      image: Project2,
    },
    {
      id: 3,
      title: 'Player',
      category: 'React.js',
      description: 'This website is about listening to music from Spotify. If you have a Spotify account, you should visit this website.',
      technology: 'React.js',
      github: 'https://github.com/SultanKent/music-player',
      demo: 'https://sultankent.github.io/music-player',
      image: Project3,
    },
    {
      id: 4,
      title: 'Coffee page',
      category: 'React.js',
      description: 'The page where you can buy everything for your coffee and enjoy.',
      technology: 'React.js',
      github: 'https://github.com/SultanKent/diplom-react',
      demo: 'https://sultankent.github.io/diplom-react',
      image: Project4,
    },
    {
      id: 5,
      title: 'Party Station',
      category: 'React.js',
      description: 'This website is for people who are going to buy online games with a discount but don\'t know where to buy.',
      technology: 'React.js',
      github: 'https://github.com/SultanKent/website',
      demo: 'https://sultankent.github.io/website',
      image: Project5,
    },
    {
      id: 6,
      title: 'Weather',
      category: 'React.js',
      description: "It's a useful website where you can know the weather in your city. It was done by using an API.",
      technology: 'React.js',
      github: 'https://github.com/SultanKent/weather-app',
      demo: 'https://sultankent.github.io/weather-app',
      image: Project6,
    },
    {
      id: 7,
      title: 'Editor',
      category: 'Vue.js',
      description: "It's a useful tool where you can edit everything that you want and copy HTML code",
      technology: 'Vue.js',
      github: 'https://github.com/SultanKent/editor-page',
      demo: 'https://sultankent.github.io/editor-page/',
      image: Project7,
    },
    {
      id: 8,
      title: 'Koondoor',
      category: 'Vue.js',
      description: "It's the best furniture's website where you can find the trend furniture ever.",
      technology: 'Vue.js',
      github: 'https://github.com/SultanKent/vue-website',
      demo: 'https://sultankent.github.io/vue-website/',
      image: Project8,
    },
    {
      id: 9,
      title: 'Papra',
      category: 'Vue.js',
      description: "It's a cool website where you can buy trendy clothes.",
      technology: 'Vue.js',
      github: 'https://github.com/SultanKent/vite-test',
      demo: 'https://sultankent.github.io/vite-test/',
      image: Project9,
    },
    {
      id: 10,
      title: 'NanoCard',
      category: 'React.js',
      description: "Just a simple and beautiful one-page landing to relax.",
      technology: 'React.js',
      github: 'https://github.com/SultanKent/vite-app',
      demo: 'https://sultankent.github.io/vite-app/',
      image: Project10,
    },
    {
      id: 11,
      title: 'Calendar',
      category: 'React.js',
      description: "It's the best to-do list website with a calendar where you can put the time and do anything you want while watching the time.",
      technology: 'React.js',
      github: 'https://github.com/SultanKent/new-calendar',
      demo: 'https://sultankent.github.io/new-calendar/',
      image: Project11,
    },
    {
      id: 12,
      title: 'Dino Quiz',
      category: 'JavaScript',
      description: "you should check your knowledges about js with this dino game",
      technology: 'JavaScript',
      github: 'https://github.com/SultanKent/Game_quiz',
      demo: 'https://sultankent.github.io/Game_quiz/',
      image: Project12,
    },
  ];

  const filteredProjects = selectedCategory === '' ? [] : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="Projects" id="Projects">
      <div className="Projects_main">
        <h1>Each Project is a unique piece of development</h1>
        <div className="category-buttons">
          <Button onClick={() => setSelectedCategory('Vue.js')} buttonText="Vue.js"/>
          <Button onClick={() => setSelectedCategory('React.js')} buttonText="React.js"/>
          <Button onClick={() => setSelectedCategory('JavaScript')} buttonText="JavaScript"/>
        </div>
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="Project1"
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="Project1_img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="Project1_main">
                <p>{project.title}</p>
                <h2>{project.category}</h2>
                <p>{project.description}</p>
                <div className="tech">
                  <span>{project.technology}</span>
                </div>
                <div className="Link">
                  <button className="source_code">
                    Code <a href={project.github} target="_blank"><img src={Github} alt="Github_logo" /></a>
                  </button>
                  <button className="source_code">
                    Live Demo <a href={project.demo} target="_blank"><img src={Link_icon} alt="Link_icon" /></a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;