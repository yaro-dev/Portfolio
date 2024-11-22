import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
            )
            .then(
                (result) => {
                    setStatusMessage("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    setStatusMessage("Failed to send the message. Please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                {/* contact info */}
                <div>
                    <div className="contact__information">
                        <i className="uil uil-whatsapp contact__icon"></i>
                        <div>
                            <h3 className="contact__title">WA me</h3>
                            <span className="contact__subtitle">+51 2212103024</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">underscoreyair@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <form ref={form} onSubmit={sendEmail} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="text" name="from_name" className="contact__input" required />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" name="from_email" className="contact__input" required />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="project" className="contact__label">Project</label>
                            <input type="text" name="from_project" className="contact__input" required />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea name="message" cols="0" rows="7" className="contact__input" required></textarea>
                        </div>

                        <div>
                            <button type="submit" className="button button--flex">
                                Send Message
                                <i className="uil uil-message button__icon"></i>
                            </button>
                        </div>
                    </div>

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </section>
    );
}
