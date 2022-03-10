import css from "../styles/CardSecond.module.css";

const CardSecond = (props) => {
    const image = {
        width: "19rem",
        height: "10rem",
        backgroundImage: "url('/img/ft.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "0.5rem",
    };

    return (
        <div key={props.data.id} className={css.card}>
            <div style={image} className={css.img}></div>
            <div className={css.text}>
                <h2>{props.data.title}</h2>
                <h3>
                    {props.data.author} - {props.data.date}
                </h3>
                <hr />
                <p>{props.data.meta}</p>
                <a href={"/blog" + props.data.href}>Read more &#62;&#62;</a>
            </div>
        </div>
    );
};

export default CardSecond;
