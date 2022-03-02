import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../styles/Blog.module.css";
import Card_box from "./Card_box";
import { url } from "../Global_variables";

const Blog = () => {
    const [data, setData] = useState("");
    const [text, setText] = useState("");
    const { id } = useParams();

    const style = {
        width: "5rem",
        height: "5rem",
        backgroundImage: "url(" + (data && data.profile) + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "50%",
    };

    useEffect(() => {
        fetch(url + "/" + id)
            .then((res) => res.json())
            .then((res) => {
                setData(res[0]);
                setText(JSON.parse(res[0].body));
            });
    }, []);

    return (
        <div className={css.blog}>
            <div className={css.header}>
                <h4>{data && data.type}</h4>
                <h1>{data && data.title}</h1>
                <p>
                    {data && data.author} - {data && data.date}
                </p>
                <span></span>
            </div>
            <div className={css.content}>
                <img src={data && data.image} alt={data && data.alt} />
                <h6>{data && data.imgSrc}</h6>
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
                    <div style={style}></div>
                    <div className={css.text}>
                        <p>Written by</p>
                        <p>{data && data.author}</p>
                        <p>{data && data.desc}</p>
                    </div>
                </div>
            </div>
            <Card_box title="Relate Article" />
        </div>
    );
};

export default Blog;
