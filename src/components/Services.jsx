import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
        const modalViews = document.querySelectorAll('.services__modal'),
            modalBtns = document.querySelectorAll('.services__button'),
            modalCloses = document.querySelectorAll('.services__modal-close')

        let modal = function (modalClick) {
            modalViews[modalClick].classList.add('active-modal')
        }

        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener('click', () => {
                modal(i)
            })
        })

        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener('click', () => {
                modalViews.forEach((modalView) => {
                    modalView.classList.remove('active-modal')
                })
            })
        })
    })

    return (

        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Frontend <br></br> Developer </h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Frontend <br></br>Developer </h4>
                            <i className="uil uil-times services__modal-close"></i>

                            <ul className="serices__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web Site Development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Usability Testing and Optimization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Responsive Design </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>SEO-Friendly Development </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Backend<br></br> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend <br></br>Developer </h4>
                            <i className="uil uil-times services__modal-close"></i>

                            <ul className="serices__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>API Integration</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Database Design and Optimization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Security and Performance Optimization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>SEO Strategy Integration</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <div>
                        <i className="uil uil-robot services__icon"></i>
                        <h3 className="services__title">Tech Solutions<br></br>Architect</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Technical Solutions<br></br>Architect</h4>
                            <i className="uil uil-times services__modal-close"></i>

                            <ul className="serices__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Tech Stack Evaluation and Recommendation</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Code Quality and Best Practices</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Performance and Optimization Strategies</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Troubleshooting and Debugging Expertise</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}