import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Feedbacks from './components/Feedbacks';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';
import { navBar } from './constants';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState(navBar.HOME)
  const components = {
    HOME: <Home />, SKILLS: <Skills />, WORK: <Work />, EDUCATION: <Education />,
    FEEDBACKS: <Feedbacks />, CONTACT: <Contact />
  }

  return (
    <div className="App fillheight fillwidth">
      <nav className="flex navbar">
        <ul className="navbar-ul">
          <li className={(currentTab === navBar.HOME ? "active" : '')}
            onClick={() => setCurrentTab(navBar.HOME)}>
            Home
          </li>
          <li className={(currentTab === navBar.SKILLS ? "active" : '')}
            onClick={() => setCurrentTab(navBar.SKILLS)}>
            Skills
          </li>
          <li className={(currentTab === navBar.WORK ? "active" : '')}
            onClick={() => setCurrentTab(navBar.WORK)}>
            Work
          </li>
          {/* <li className={(currentTab === navBar.EDUCATION ? "active" : '')}
            onClick={() => setCurrentTab(navBar.EDUCATION)}>
            Education
          </li> */}
          <li className={(currentTab === navBar.FEEDBACKS ? "active" : '')}
            onClick={() => setCurrentTab(navBar.FEEDBACKS)}>
            Feedbacks
          </li>
          <li className={(currentTab === navBar.CONTACT ? "active" : '')}
            onClick={() => setCurrentTab(navBar.CONTACT)}>
            Contact
          </li>
        </ul>
      </nav>
      <div className="container-body fillwidth">
        {components[currentTab]}
      </div>
    </div>
  );
}

export default App;
