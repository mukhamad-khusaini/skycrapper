import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../styles/Blog.module.css";
import Card_box from "./Card_box";
import { url } from "../Global_variables";

const Blog = () => {
    const [data, setData] = useState(false);
    const [text, setText] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(url + "/" + id)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setText(JSON.parse(res[0].body));
            });
    }, []);

    return (
        <div className={css.blog}>
            <div className={css.header}>
                <h4>Bakti Sosial</h4>
                <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                <p>M. Kalingga - 19 Desember 2022</p>
                <span></span>
            </div>
            <div className={css.content}>
                <img src="/img/ship.jpg" alt="ship" />
                <h6>unsplash.com</h6>
                <div className={css.txt}>
                    {text &&
                        text.map((e, i) => {
                            return <p key={i}>{e}</p>;
                        })}
                </div>
                <div className={css.share}>
                    <h2>Share Article</h2>
                    <div>
                        <img src="/img/twtBlack.png" alt="tweeter" />
                        <img src="/img/fbBlack.png" alt="facebook" />
                        <img src="/img/waBlack.png" alt="whatsapp" />
                    </div>
                </div>
                <div className={css.author}>
                    <div className={css.profile}></div>
                    <div className={css.text}>
                        <p>Written by</p>
                        <p>Mukhamad Khusaini</p>
                        <p>Hey, i am a senior engineer at harvard university</p>
                    </div>
                </div>
            </div>
            <Card_box title="Relate Article" />
        </div>
    );
};

export default Blog;
