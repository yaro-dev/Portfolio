import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import gsap from "gsap";

// Importación de tus assets (Asegúrate de que las rutas coincidan con tu árbol)
import yo from "../assets/Hero/yo.png";
import audifonos from "../assets/Hero/audifonos.png";
import libroEstrella from "../assets/Hero/libro-estrella.png";
import libro2 from "../assets/Hero/libro-2.png";
import reyBlanco from "../assets/Hero/rey-blanco.png";
import rey from "../assets/Hero/rey.png";
import caballo from "../assets/Hero/caballo.png";
import torre from "../assets/Hero/torre.png";
import peon from "../assets/Hero/peon.png";

export default function Hero() {
    const sceneRef = useRef(null);

    // Animaciones de entrada (Framer Motion)
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

    // Secuencia del blob (SVG Nativo)
    const organicPlasmaMorph = `
        M443.3,301.5Q392,353,352.4,396.5Q312.4,440,254.4,428.5Q196.4,417,143.3,391.5Q90.3,366,77.3,308Q64.2,250,62.5,197Q60.8,144,118.5,112.9Q176.1,81.9,250.8,54.4Q325.5,26.9,366.5,77Q407.5,127,451.1,192.5Q494.8,258,443.3,301.5Z;
        M423.3,320.5Q444,391,373.5,402.5Q302.8,414,251.4,412.5Q200,411,161.5,373Q123,335,83.5,292.5Q44,250,62.5,197Q81,144,144.5,112.9Q208,81.9,250,62.5Q292,43,361.5,68.5Q431,94,430.5,172Q430,250,423.3,320.5Z;
        M404.2,297.5Q381,345,347.5,381.5Q314,418,256,419.5Q198,421,144.5,391.5Q91,362,81,306Q71,250,91,197Q111,144,152,119Q193,94,250.5,91.5Q308,89,363.5,108.5Q419,128,454,189Q489,250,404.2,297.5Z;
        M443.3,301.5Q392,353,352.4,396.5Q312.4,440,254.4,428.5Q196.4,417,143.3,391.5Q90.3,366,77.3,308Q64.2,250,62.5,197Q60.8,144,118.5,112.9Q176.1,81.9,250.8,54.4Q325.5,26.9,366.5,77Q407.5,127,451.1,192.5Q494.8,258,443.3,301.5Z
    `;

    // Ecosistema de levitación (GSAP)
    useEffect(() => {
        // gsap.context limpia las animaciones cuando el componente se desmonta (vital en React)
        let ctx = gsap.context(() => {

            // 1. El Avatar levita lentamente y en un rango corto (respiración pesada)
            gsap.to(".avatar-main", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // 2. Los libros flotan más alto, giran un poco y están desfasados (stagger)
            gsap.to(".prop-book", {
                y: -25,
                rotation: 4,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.8 // Retraso entre cada libro para que no se muevan igual
            });

            // 3. Las piezas de ajedrez levitan rápido y giran en sentido contrario
            gsap.to(".prop-chess", {
                y: -20,
                rotation: -6,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.4
            });

            // 4. Los audífonos tienen su propio ritmo independiente
            gsap.to(".prop-audio", {
                y: -18,
                rotation: 8,
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sceneRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">

                    {/* REDES SOCIALES */}
                    <motion.div
                        className="home__social"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a target="_blank" href="https://www.linkedin.com/in/yair-colin-592535239/" className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </motion.div>

                    {/* ZONA DE ARTE: Blob + Ecosistema GSAP */}
                    {/* Usamos el ref aquí para que GSAP solo busque elementos dentro de este div */}
                    <motion.div
                        className="home__img"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        ref={sceneRef}
                        style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1/1', margin: '0 auto' }}
                    >
                        {/* El Fondo Mutante */}
                        {/* El Fondo Mutante (Ahora con Easing Orgánico) */}
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, fill: "var(--first-color)" }}>
                            <path>
                                <animate
                                    attributeName="d"
                                    dur="14s"
                                    repeatCount="indefinite"
                                    values={organicPlasmaMorph}
                                    calcMode="spline"
                                    keyTimes="0; 0.333; 0.666; 1"
                                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                                />
                            </path>
                        </svg>

                        {/* El Avatar Principal */}
                        <img src={yo} alt="Yaro Avatar" className="avatar-main" style={{ position: 'absolute', width: '70%', top: '15%', left: '15%', zIndex: 5 }} />

                        {/* PROPS: Libros */}
                        <img src={libroEstrella} alt="Libro" className="prop-book" style={{ position: 'absolute', width: '22%', top: '30%', left: '-5%', zIndex: 6 }} />
                        <img src={libro2} alt="Libro Antiguo" className="prop-book" style={{ position: 'absolute', width: '20%', top: '10%', right: '5%', zIndex: 4 }} />

                        {/* PROPS: Ajedrez */}
                        <img src={reyBlanco} alt="Rey Blanco" className="prop-chess" style={{ position: 'absolute', width: '12%', top: '45%', left: '8%', zIndex: 6 }} />
                        <img src={rey} alt="Rey Negro" className="prop-chess" style={{ position: 'absolute', width: '12%', bottom: '25%', right: '2%', zIndex: 6 }} />
                        <img src={caballo} alt="Caballo" className="prop-chess" style={{ position: 'absolute', width: '10%', bottom: '15%', left: '15%', zIndex: 6 }} />
                        <img src={torre} alt="Torre" className="prop-chess" style={{ position: 'absolute', width: '10%', top: '20%', left: '25%', zIndex: 4 }} />
                        <img src={peon} alt="Peon" className="prop-chess" style={{ position: 'absolute', width: '8%', bottom: '10%', right: '25%', zIndex: 7 }} />

                        {/* PROPS: Audífonos */}
                        <img src={audifonos} alt="Audífonos" className="prop-audio" style={{ position: 'absolute', width: '25%', top: '55%', right: '-8%', zIndex: 6 }} />
                    </motion.div>

                    {/* TEXTO Y BOTÓN */}
                    <motion.div className="home__data" variants={textContainerVariants} initial="hidden" animate="visible">
                        <motion.h1 variants={textItemVariants} className="home__title">
                            Hi, I'm Yaro
                        </motion.h1>
                        <motion.h3 variants={textItemVariants} className="home__subtitle">
                            <Typewriter options={{ strings: ['Software Developer', 'Creative Coder', 'Solutions Architect', 'Digital Alchemist'], autoStart: true, loop: true, delay: 50, deleteSpeed: 30 }} />
                        </motion.h3>
                        <motion.p variants={textItemVariants} className="home__description">
                            I am passionate about technology and software development with a focus on continuous learning.
                        </motion.p>
                        <motion.a variants={textItemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="button button--flex">
                            Contact Me<i className="uil uil-message button__icon"></i>
                        </motion.a>
                    </motion.div>
                </div>

                {/* SCROLL DOWN */}
                <motion.div className="home__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}