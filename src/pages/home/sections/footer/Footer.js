import "./Footer.css";

const FooterCard = (props) => {
    return (
        <div className="footer-content-card">
            <h4>{props.title}</h4>
            <ul>
                <li>{props.info1}</li>
                <li>{props.info2}</li>
                <li>{props.info3}</li>
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="logo-about footer-content-card">
                        <h4>
                            Whiter<span>.</span>
                        </h4>
                        <p>
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p>© TuranTech Inc.</p>
                    </div>
                    <FooterCard
                        title="Contact"
                        info1="62 Orp St, Seattle, USA"
                        info2="sales@furnatur.com"
                        info3="+ 1 800 726 915273"
                    />
                    <FooterCard
                        title="Product"
                        info1="Living Room"
                        info2="Bed Room"
                        info3="Office Room"
                    />
                    <FooterCard
                        title="Our Company"
                        info1="About Us"
                        info2="Services"
                        info3="Products"
                    />
                </div>
            </div>
        </footer>
    );
};

export { Footer };
