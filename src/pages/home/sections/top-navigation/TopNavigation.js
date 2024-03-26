import Logo from "../../../../design-system/Logo";
import "./TopNavigation.css";

const links = [
    { text: "Products", link: "" },
    { text: "Rooms", link: "" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" },
    { text: "Sign in", link: "" }
];

const TopNavigation = () => {
    return (
        <header>
            <div className="header-content container">
                <Logo />
                <nav>
                    <ul>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Rooms</a>
                        </li>
                        <li>
                            <a href="#">Inspiration</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </nav>
                <span>
                    <a className="sign-in" href="#">
                        Sign in
                    </a>
                </span>
            </div>
        </header>
    );
};

export { TopNavigation };
