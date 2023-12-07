import "./Newsletter.css";
import lockImg from "../../../../assets/images/lock.svg";

const Newsletter = () => {
    return (
        <section id="newsletter">
            <div className="container">
                <div className="newsletter-content">
                    <h3>
                        Subscribe to our <br />
                        newsletter to get updated
                    </h3>
                    <p>
                        Get our latest update on your inbox. With lots of unique
                        blocks, you can easily build a page without coding.
                        Build your next consultancy website within few minutes.
                    </p>
                    <div className="email-wrapper">
                        <input type="email" placeholder="Enter email address" />
                        <button type="submit">Subscribe</button>
                    </div>
                    <div className="note-wrapper">
                        <img src={lockImg} alt="" />
                        <p>We don't spam at all, our promise!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Newsletter };
