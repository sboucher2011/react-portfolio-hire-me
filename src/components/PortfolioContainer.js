import React, { useState } from 'react';

import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import linkedIn from '../assets/linkedIn.png'
import gitHub from '../assets/github.png'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  document.title = currentPage;

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
      <a href="https://github.com/sboucher2011">
        <img src={gitHub} className="footerIcon" />
      </a>

      <a href="https://www.linkedin.com/in/shawna-boucher-a10b9662/">
        <img src={linkedIn} className="footerIcon" />
      </a>

      </footer>
    </div>
    
  );
}