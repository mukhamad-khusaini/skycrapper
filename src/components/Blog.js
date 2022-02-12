import css from "../styles/Blog.module.css";

const Blog = () => {
    return (
        <div className={css.blog}>
            <div className={css.header}>
                <h4>Bakti Sosial</h4>
                <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                <p>M. Kalingga - 19 Desember 2022</p>
                <span></span>
            </div>
            <div className={css.content}></div>
        </div>
    );
};

export default Blog;
