import css from "../styles/SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = (props) => {
    const styles = {
        width: "15rem",
        height: "100vh",
        backgroundColor: "var(--blue)",
        position: "fixed",
        top: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "4rem",
        transform: "translateX(" + props.pos + "rem)",
        transition: "0.5s ease",
    };

    return (
        <div className={css.secondNav} style={styles}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default SideBar;
