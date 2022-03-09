import css from "../styles/Kuliner.module.css";
import Animation from "./Animation";

const Kuliner = () => {
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
        <div className={css.kuliner}>
            <div className={css.card}>
                <div style={image} className={css.img}></div>
                <div className={css.text}>
                    <h2>Macroon Order Gudeg, Kuliner Gudeg Mendunia</h2>
                    <h3>M. Kalingga - 20 April 2022</h3>
                    <hr />
                    <p>
                        Sebelumnya Macroon pergi ke Indonesia untuk melakukan kunjungan kenegaraan. Ia mampir ke Jogja untuk mengicipi gudeg
                        Yu Jum yang mendunia. Ia pun ...
                    </p>
                    <a href="/blog/1">Read more &#62;&#62;</a>
                </div>
            </div>
            <div className={css.card}>
                <div style={image} className={css.img}></div>
                <div className={css.text}>
                    <h2>Macroon Order Gudeg, Kuliner Gudeg Mendunia</h2>
                    <h3>M. Kalingga - 20 April 2022</h3>
                    <hr />
                    <p>
                        Sebelumnya Macroon pergi ke Indonesia untuk melakukan kunjungan kenegaraan. Ia mampir ke Jogja untuk mengicipi gudeg
                        Yu Jum yang mendunia. Ia pun ...
                    </p>
                    <a href="/blog/1">Read more &#62;&#62;</a>
                </div>
            </div>
            <div className={css.card}>
                <div style={image} className={css.img}></div>
                <div className={css.text}>
                    <h2>Macroon Order Gudeg, Kuliner Gudeg Mendunia</h2>
                    <h3>M. Kalingga - 20 April 2022</h3>
                    <hr />
                    <p>
                        Sebelumnya Macroon pergi ke Indonesia untuk melakukan kunjungan kenegaraan. Ia mampir ke Jogja untuk mengicipi gudeg
                        Yu Jum yang mendunia. Ia pun ...
                    </p>
                    <a href="/blog/1">Read more &#62;&#62;</a>
                </div>
            </div>
            <div className={css.card}>
                <div style={image} className={css.img}></div>
                <div className={css.text}>
                    <h2>Macroon Order Gudeg, Kuliner Gudeg Mendunia</h2>
                    <h3>M. Kalingga - 20 April 2022</h3>
                    <hr />
                    <p>
                        Sebelumnya Macroon pergi ke Indonesia untuk melakukan kunjungan kenegaraan. Ia mampir ke Jogja untuk mengicipi gudeg
                        Yu Jum yang mendunia. Ia pun ...
                    </p>
                    <a href="/blog/1">Read more &#62;&#62;</a>
                </div>
            </div>
        </div>
    );
};

export default Kuliner;
