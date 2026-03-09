import { motion } from 'framer-motion';

// Datos convertidos a objetos con sus respectivos íconos (Devicon + Unicons)
const coreFrontend = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain' },
    { name: 'HTML5 / CSS3', icon: 'devicon-html5-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
    { name: 'SASS / PostCSS', icon: 'devicon-sass-original' },
    { name: 'Vite', icon: 'devicon-vitejs-plain' },
    { name: 'Framer Motion', icon: 'devicon-framermotion-original' },
    { name: 'jQuery', icon: 'devicon-jquery-plain' }
];

const creativeUI = [
    { name: 'Three.js', icon: 'devicon-threejs-original' },
    { name: 'GSAP', icon: 'uil uil-asterisk' },
    { name: 'Canvas', icon: 'uil uil-layer-group' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'Adobe Illustrator', icon: 'devicon-illustrator-plain' },
    { name: 'UI Design', icon: 'uil uil-swatchbook' }
];

const backendEng = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'Laravel / AsgardCMS', icon: 'devicon-laravel-original' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'RESTful APIs', icon: 'uil uil-exchange' }
];

const aiAutomation = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Gemini API', icon: 'uil uil-brain' },
    { name: 'Prompt Engineering', icon: 'uil uil-comment-alt-lines' },
    { name: 'Puppeteer', icon: 'devicon-puppeteer-plain' },
    { name: 'Playwright', icon: 'devicon-playwright-plain' },
    { name: 'Scrapy', icon: 'uil uil-spider-web' },
    { name: 'Streamlit', icon: 'devicon-streamlit-plain' },
    { name: 'FPDF', icon: 'uil uil-file-alt' }
];

const cmsEcosystem = [
    { name: 'WordPress', icon: 'devicon-wordpress-plain' },
    { name: 'WooCommerce', icon: 'devicon-woocommerce-plain' },
    { name: 'Prismic.io', icon: 'uil uil-database' },
    { name: 'Git / Bitbucket', icon: 'devicon-git-plain' },
    { name: 'Webpack / Mix', icon: 'devicon-webpack-plain' },
    { name: 'Vercel / Netlify', icon: 'devicon-vercel-plain' },
    { name: 'cPanel', icon: 'uil uil-server' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Tech Arsenal</h2>
            <span className="section__subtitle">My current ecosystem</span>

            <motion.div 
                className="skills__bento-grid container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* CAJA 1: CORE FRONTEND */}
                <motion.div variants={itemVariants} className="skills__bento-card bento-frontend">
                    <div className="bento-header">
                        <i className="uil uil-brackets-curly skills__icon"></i>
                        <h3 className="bento-title">Core Frontend</h3>
                    </div>
                    <div className="bento-tags">
                        {coreFrontend.map((skill) => (
                            <motion.span key={skill.name} whileHover={{ scale: 1.05, y: -2 }} className="bento-tag">
                                <i className={`${skill.icon} bento-tag-icon`}></i>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CAJA 2: CREATIVE & UI */}
                <motion.div variants={itemVariants} className="skills__bento-card bento-creative">
                    <div className="bento-header">
                        <i className="uil uil-pen skills__icon"></i>
                        <h3 className="bento-title">Creative & UI</h3>
                    </div>
                    <div className="bento-tags">
                        {creativeUI.map((skill) => (
                            <motion.span key={skill.name} whileHover={{ scale: 1.05, y: -2 }} className="bento-tag">
                                <i className={`${skill.icon} bento-tag-icon`}></i>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CAJA 3: BACKEND ENGINEERING */}
                <motion.div variants={itemVariants} className="skills__bento-card bento-backend">
                    <div className="bento-header">
                        <i className="uil uil-server-network skills__icon"></i>
                        <h3 className="bento-title">Backend</h3>
                    </div>
                    <div className="bento-tags">
                        {backendEng.map((skill) => (
                            <motion.span key={skill.name} whileHover={{ scale: 1.05, y: -2 }} className="bento-tag">
                                <i className={`${skill.icon} bento-tag-icon`}></i>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CAJA 4: AI & AUTOMATION */}
                <motion.div variants={itemVariants} className="skills__bento-card bento-ai">
                    <div className="bento-header">
                        <i className="uil uil-robot skills__icon"></i>
                        <h3 className="bento-title">AI & Automation</h3>
                    </div>
                    <div className="bento-tags">
                        {aiAutomation.map((skill) => (
                            <motion.span key={skill.name} whileHover={{ scale: 1.05, y: -2 }} className="bento-tag">
                                <i className={`${skill.icon} bento-tag-icon`}></i>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CAJA 5: CMS & ECOSYSTEM */}
                <motion.div variants={itemVariants} className="skills__bento-card bento-cms">
                    <div className="bento-header">
                        <i className="uil uil-layer-group skills__icon"></i>
                        <h3 className="bento-title">CMS & Ecosystem</h3>
                    </div>
                    <div className="bento-tags">
                        {cmsEcosystem.map((skill) => (
                            <motion.span key={skill.name} whileHover={{ scale: 1.05, y: -2 }} className="bento-tag">
                                <i className={`${skill.icon} bento-tag-icon`}></i>
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}