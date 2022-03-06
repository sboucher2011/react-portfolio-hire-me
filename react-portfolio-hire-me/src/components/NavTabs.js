import React, { useEffect } from 'react';

function NavTabs({currentPage, handlePageChange}) {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="computer"> 💻</span> Shawna Boucher
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </a>
                    </li>
                    <li >
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavTabs;