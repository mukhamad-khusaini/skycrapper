import css from "../styles/Sub_card.module.css";

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
                <p>
                    {props.author} - {props.date}
                </p>
                <h1>{props.title}</h1>
                <a href={"/blog" + props.href}>Read More &#62;&#62;</a>
            </div>
        </div>
    );
};

export default Sub_card;
