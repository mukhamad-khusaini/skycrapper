import { useEffect, useState } from "react";
import css from "../styles/Main_post.module.css";
import { Link } from "react-router-dom";

const Main_post = () => {
    const [title, setTitle] = useState(false);
    const [author, setAuthor] = useState(false);
    const [date, setDate] = useState(false);
    const [image, setImage] = useState(false);
    const [url, setUrl] = useState(false);

    const img = {
        width: "45%",
        height: "100%",
        borderRadius: "0.5rem",
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    function handleChange(json) {
        setTitle(json.title);
        setAuthor(json.author);
        setDate(json.date);
        setImage(json.image);
        setUrl(json.href);
    }

    useEffect(() => {
        fetch("http://localhost:5000", {
            "Content-Type": "application/json; charset=utf-8",
        })
            .then((res) => res.json())
            .then((res) => handleChange(res.blog[0]));
    }, []);

    return (
        <div className={css.main}>
            <div style={img}></div>
            <div className={css.text}>
                <p>
                    {author} - {date}
                </p>
                <h1>{title}</h1>
                <Link to={"/blog" + url}>Read More &#62;&#62;</Link>
            </div>
        </div>
    );
};

export default Main_post;
