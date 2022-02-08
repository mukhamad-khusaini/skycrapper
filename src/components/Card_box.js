import css from "../styles/Card_box.module.css";

const Card_box = (props) => {
    return (
        <div className={css.card}>
            <div className={css.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={css.box}>
                <div className={css.min}>
                    <div className={css.image}></div>
                    <div className={css.text}>
                        <p>M. Kalingga - 19 Desember 2022</p>
                        <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                        <a href="">Read More &#62;&#62;</a>
                    </div>
                </div>
                <div className={css.min}>
                    <div className={css.image}></div>
                    <div className={css.text}>
                        <p>M. Kalingga - 19 Desember 2022</p>
                        <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                        <a href="">Read More &#62;&#62;</a>
                    </div>
                </div>
                <div className={css.min}>
                    <div className={css.image}></div>
                    <div className={css.text}>
                        <p>M. Kalingga - 19 Desember 2022</p>
                        <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                        <a href="">Read More &#62;&#62;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card_box;
