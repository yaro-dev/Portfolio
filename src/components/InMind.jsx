import { motion } from "framer-motion"

export default function InMynd() {

    return (
        <section className="project section">
            <div className="project__bg">
                <div id="root" className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">
                            You have a new project
                        </h2>
                        <p className="project__description">
                            Contact me now and get a 30% discount on your new project.
                        </p>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }} href="#contact" className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project__icon button_icon"></i>
                        </motion.a>
                    </div>

                    {/* <!-- <img src="assets/img/project2.png" alt="" className="project__img">  --> */}

                </div>
            </div>

        </section>
    )
}