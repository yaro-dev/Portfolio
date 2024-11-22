import { useEffect } from 'react';

export default function Header() {

    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
    
    useEffect(() => {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav__link');
        const themeButton = document.getElementById('theme-button');

        const darkTheme = 'dark-theme';
        const iconTheme = 'uil-sun';

        // Obtén el tema e icono previamente seleccionado por el usuario
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        const getCurrentTheme = () =>
            document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () =>
            themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

        // Si hay un tema previamente seleccionado, aplícalo
        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
                darkTheme
            );
            themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
                iconTheme
            );
        }

        // Función para alternar el tema
        const toggleTheme = () => {
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        };

        /*===== MENU SHOW =====*/
        const showMenu = () => navMenu.classList.add('show-menu');

        /*===== MENU HIDDEN =====*/
        const hideMenu = () => navMenu.classList.remove('show-menu');

        /*===== REMOVE MENU MOBILE =====*/
        const linkAction = () => {
            navMenu.classList.remove('show-menu');
        };

        // Agrega los listeners si los elementos existen
        if (navToggle) navToggle.addEventListener('click', showMenu);
        if (navClose) navClose.addEventListener('click', hideMenu);
        navLinks.forEach(link => link.addEventListener('click', linkAction));
        if (themeButton) themeButton.addEventListener('click', toggleTheme);

        // Cleanup event listeners on unmount
        return () => {
            if (navToggle) navToggle.removeEventListener('click', showMenu);
            if (navClose) navClose.removeEventListener('click', hideMenu);
            navLinks.forEach(link => link.removeEventListener('click', linkAction));
            if (themeButton) themeButton.removeEventListener('click', toggleTheme);
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Yaro</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item active-link">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-home nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-info-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact me
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" id="nav-close"></i>
                </div>

                <div className="nav__btns">

                    <i className="uil uil-moon change-theme" id="theme-button">

                    </i>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
