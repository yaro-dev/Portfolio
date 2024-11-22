import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};


export default function Skills() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <div>
                    {/* ==================== SKILL 1==================== */}
                    <div className="skills__content skills__open">
                        <motion.div whileTap={{ scale: 0.9 }} className="skills__header" onClick={() => setVisibleIndex(visibleIndex === 0 ? null : 0)}>
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                {/* <span className="skills__subtitle">More than 4 years</span> */}
                            </div>

                            <motion.i
                                className="uil uil-angle-down skills__arrow"
                                animate={{
                                    rotate: visibleIndex === 0 ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div className="skills__list grid" animate={visibleIndex === 0 ? show : hide}>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">98%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__javascript">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SASS</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Post CSS</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Tailwind</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    85%
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Vite</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__vite">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Next</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__next">

                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* ==================== SKILL 2==================== */}
                    <div className="skills__content">
                        <motion.div whileTap={{ scale: 0.9 }} className="skills__header" onClick={() => setVisibleIndex(visibleIndex === 1 ? null : 1)}>
                            <i className="uil uil-server-network skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Backend developer</h1>

                            </div>

                            <motion.i
                                className="uil uil-angle-down skills__arrow"
                                animate={{
                                    rotate: visibleIndex === 1 ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div className="skills__list grid" animate={visibleIndex === 1 ? show : hide}>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MySQL</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mysql">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">NODE JS</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">EXPRESS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__express">

                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>

                <div>
                    {/* ==================== SKILL 3==================== */}
                    <div className="skills__content">
                        <motion.div whileTap={{ scale: 0.9 }} className="skills__header" onClick={() => setVisibleIndex(visibleIndex === 2 ? null : 2)}>
                            <i className="uil uil-keyboard skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Other technologies</h1>

                            </div>

                            <motion.i
                                className="uil uil-angle-down skills__arrow"
                                animate={{
                                    rotate: visibleIndex === 2 ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div className="skills__list grid" animate={visibleIndex === 2 ? show : hide}>
                        <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Wordpress</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__git">

                                    </span>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Git & Github</h3>
                                    <span className="skills__number">100%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__git">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">RESTful APIs</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__api">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Webpack</h3>
                                    <span className="skills__number">95%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__webpack">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Laravel Mix</h3>
                                    <span className="skills__number">95%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mix">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Docker</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__docker">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__figma">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python">

                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

            <span>Note: This diagram is only a guideline. Knowledge of all of these
                tecnologies update daily with experience.</span>
        </section>
    );
}
