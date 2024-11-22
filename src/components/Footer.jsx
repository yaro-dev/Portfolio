export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Yaro</h1>
                        <span className="footer__subtitle">Software developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="footer__social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a target="_blank" href="#" className="footer__social">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">Happy Coding! &#128187;☕</p>

            </div>
        </footer>
    )

}