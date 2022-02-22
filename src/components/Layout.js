import css from "../styles/Layout.module.css";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
    const navigate = useNavigate();
    return (
        <div className={css.layout}>
            <nav>
                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    src="./img/logo.png"
                    alt="Skycrapper"
                />
                <div className={css.mainNav}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>
                <button className={css.btnNav}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </button>
                <div className={css.secondNav}>
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
