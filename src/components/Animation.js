import css from "../styles/Animation.module.css";

const Animation = () => {
    return (
        <svg width="10rem" height="100%" className={css.svg}>
            <circle className={css.shape} />
            <circle className={css.shape} />
            <circle className={css.shape} />
            <circle className={css.shape} />
            <circle className={css.shape} />
        </svg>
    );
};

export default Animation;
