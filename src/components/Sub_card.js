import css from "../styles/Sub_card.module.css";
import { Link } from "react-router-dom";

const Sub_card = (props) => {
    const image = {
        width: "100%",
        height: "11rem",
        backgroundImage: "url(" + props.img + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "0.5rem",
    };

    return (
        <div key={props.id} className={css.min}>
            <div style={image}></div>
            <div className={css.text}>
                <p>M. Kalingga - 19 Desember 2022</p>
                <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                <Link to={"/blog" + props.href}>Read More &#62;&#62;</Link>
            </div>
        </div>
    );
};

export default Sub_card;
