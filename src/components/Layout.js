import css from "../styles/Layout.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = (props) => {
    const [position, setPosition] = useState(20);
    const [toggle, setToggle] = useState(true);

    const [line1, setLine1] = useState([60, "black"]);
    const [line2, setLine2] = useState("black");
    const [line3, setLine3] = useState([100, "black"]);

    const navigate = useNavigate();

    function handleChange() {
        if (toggle) {
            setPosition(0);
            setToggle(false);
            setLine1([100, "white"]);
            setLine2("white");
            setLine3([60, "white"]);
        } else {
            setPosition(20);
            setToggle(true);
            setLine1([60, "black"]);
            setLine2("black");
            setLine3([100, "black"]);
        }
    }

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
                <button
                    className={css.btnNav}
                    onClick={() => {
                        handleChange();
                    }}
                >
                    <ul>
                        <li style={{ width: line1[0] + "%", backgroundColor: line1[1] }}></li>
                        <li style={{ backgroundColor: line2 }}></li>
                        <li style={{ width: line3[0] + "%", backgroundColor: line3[1] }}></li>
                    </ul>
                </button>
                <SideBar pos={position} />
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
