export default function Project({ project }) {

    return (
        <>
            <img src={`/img/${project.image}.png`} alt="" className="Project__Screenshot" />

            <div className="portfolio__data">
                <h3 className="portfolio__title">
                    {project.name}
                </h3>
                <strong className="tech">{project.tech}</strong><br></br>
                <span className="collab">In colaboration with: {project.collab}</span>
                <p className="portfolio__description">
                    {project.description}
                </p>
                <a target="_blank" href={project.link}
                    className="button button--flex button--small portfolio__button">
                    Visit
                    <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </>
    )
}