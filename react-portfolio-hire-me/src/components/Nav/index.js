import React, { useEffect } from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

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
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio" onClick={() => setContactSelected(false)}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => setContactSelected(false)}>
                            Resume
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href="#contact" onClick={() => setContactSelected(true)}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;