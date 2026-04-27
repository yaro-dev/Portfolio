import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Hero() {
    // Variantes para la entrada escalonada del texto
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const textItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 100, damping: 10 } 
        }
    };

    // Variante para el efecto de levitación continua del blob
    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    
                    {/* REDES SOCIALES (Con una leve entrada) */}
                    <motion.div 
                        className="home__social"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a target="_blank" href="https://www.linkedin.com/in/yair-colin-592535239/"
                            className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </motion.div>

                    {/* IMAGEN DEL BLOB (Con efecto de levitación) */}
                    <motion.div className="home__img" animate={floatAnimation}>
                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0">
                                <path fill="white" d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
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
                    </motion.div>

                    {/* TEXTO Y BOTÓN (Entrada escalonada) */}
                    <motion.div 
                        className="home__data"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={textItemVariants} className="home__title">
                            Hi, I'm Yaro
                        </motion.h1>
                        
                        <motion.h3 variants={textItemVariants} className="home__subtitle">
                            <Typewriter
                                options={{
                                    strings: ['Software Developer', 'Creative Coder', 'Solutions Architect','Digital Alchemist' ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30
                                }}
                            />
                        </motion.h3>
                        
                        <motion.p variants={textItemVariants} className="home__description">
                            I am passionate about technology and software development with a focus on continuous learning.
                        </motion.p>
                        
                        <motion.a 
                            variants={textItemVariants}
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            href="#contact" 
                            className="button button--flex"
                        >
                            Contact Me<i className="uil uil-message button__icon"></i>
                        </motion.a>
                    </motion.div>
                </div>

                {/* BOTÓN SCROLL DOWN */}
                <motion.div 
                    className="home__scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}