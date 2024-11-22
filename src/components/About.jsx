import { motion } from "framer-motion"
export default function About() {

    return (
        <section className="about section" id="about">

            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">
                My introduction
            </span>

            <div className="about__container container grid">
                <img src="/img/me.jpg" alt="" className="about__img"></img>

                <div className="about__data">
                    <p className="about__description">
                        I am someone curious by nature who likes to discover and learn new things, I like challenges, I am passionate about creating awesome stuff, technology is a great tool for this. My hobbies include music, reading, video games and chess  &#9822;.
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">06</span>
                            <span className="about__info-name">Years <br></br> experience </span>
                        </div>

                        <div>
                            <span className="about__info-title">20</span>
                            <span className="about__info-name">Completed <br></br> projects </span>
                        </div>

                        <div>
                            <span className="about__info-title">04</span>
                            <span className="about__info-name">Companies <br></br> worked </span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }} download="" href="assets/pdf/Yaro-Cv.pdf" className="button button--flex">
                            Download CV<i className="uil uil-download-alt"></i>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}