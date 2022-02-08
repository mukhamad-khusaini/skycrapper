import css from "../styles/Layout.module.css";

const Layout = (props) => {
    return (
        <div className={css.layout}>
            <nav>
                <img src="./img/logo.png" alt="Skycrapper" />
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>
            </nav>
            <div>{props.children}</div>
            <footer>
                <div>
                    <img src="./img/logo-white.png" alt="logo" />
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <img src="./img/fb.png" alt="FB" />
                        <img src="./img/twt.png" alt="tweeter" />
                        <img src="./img/in.png" alt="linkedin" />
                    </div>
                    <p>
                        &copy; 2022 All Right Reserved. <span>Skycrepper</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
