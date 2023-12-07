import "./TopNavigation.css";

const TopNavigation = () => {
    return (
        <header>
            <div className="header-content container">
                <p className="logo">
                    Whiter<span>.</span>
                </p>
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
