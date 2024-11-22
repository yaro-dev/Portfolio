import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a target="_blank" href="https://www.linkedin.com/in/yair-colin-592535239/"
                            className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>

                        {/* <a target="_blank" href="https://github.com/y4r0/" className="home__social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a> */}
                    </div>

                    <div className="home__img">
                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className="home__blob-img" x="42" y="0" xlinkHref="/img/yaro.png" />
                            </g>
                        </svg>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">
                            Hi, I'm Yaro
                        </h1>
                        {

                        }
                        <h3 className="home__subtitle">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Software Developer')
                                        .callFunction(() => {
                                            //console.log('String typed out!');
                                        })
                                        .pauseFor(2500)

                                        .callFunction(() => {
                                            //console.log('All strings were deleted');
                                        })
                                        .start();
                                }}
                            />
                        </h3>
                        <p className="home__description">
                            I am passionate about technology and software development with a focus on continuous
                            learning.
                        </p>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }} href="#contact" className="button button--flex">
                            Contact Me<i className="uil uil-message button__icon"></i>
                        </motion.a>
                    </div>
                </div>

                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}