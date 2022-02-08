import css from "../styles/Main_post.module.css";

const Main_post = () => {
    return (
        <div className={css.main}>
            <div className={css.image}></div>
            <div className={css.text}>
                <p>M. Kalingga - 19 Desember 2022</p>
                <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                <a href="">Read More &#62;&#62;</a>
            </div>
        </div>
    );
};

export default Main_post;
