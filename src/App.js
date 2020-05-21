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
  const [currentTab, setCurrentTab] = useState(navBar.HOME);
  const [isSmallNav, setSmallNav] = useState(false);
  const components = {
    HOME: <Home changeTab={() => setCurrentTab(navBar.CONTACT)} />, SKILLS: <Skills />,
    WORK: <Work />, EDUCATION: <Education />,
    FEEDBACKS: <Feedbacks />, CONTACT: <Contact />
  }

  return (
    <div className="App fillheight fillwidth">
      <nav className="flex navbar">
        <ul className={"navbar-ul " + (isSmallNav ? "visible" : "")}>
          <li className={(currentTab === navBar.HOME ? "active" : '')}
            onClick={() => { setCurrentTab(navBar.HOME); setSmallNav(false) }}>
            Home
          </li>
          <li className={(currentTab === navBar.SKILLS ? "active" : '')}
            onClick={() => { setCurrentTab(navBar.SKILLS); setSmallNav(false) }}>
            Skills
          </li>
          <li className={(currentTab === navBar.WORK ? "active" : '')}
            onClick={() => { setCurrentTab(navBar.WORK); setSmallNav(false) }}>
            Work
          </li>
          <li className={(currentTab === navBar.FEEDBACKS ? "active" : '')}
            onClick={() => { setCurrentTab(navBar.FEEDBACKS); setSmallNav(false) }}>
            Feedbacks
          </li>
          <li className={(currentTab === navBar.CONTACT ? "active" : '')}
            onClick={() => { setCurrentTab(navBar.CONTACT); setSmallNav(false) }}>
            Contact
          </li>
        </ul>
        <span onClick={(e) => { setSmallNav(!isSmallNav) }}>
          <i className="glyphicon glyphicon-align-justify di di-menu"></i>
        </span>
      </nav>
      <div className="container-body fillwidth">
        {components[currentTab]}
      </div>
    </div>
  );
}

export default App;
