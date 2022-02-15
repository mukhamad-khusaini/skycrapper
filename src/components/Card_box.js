import { useEffect, useState } from "react";
import css from "../styles/Card_box.module.css";
import { url } from "../Global_variables";
import Sub_card from "./Sub_card";

const Card_box = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setData(json.blog));
    }, []);

    return (
        <div className={css.card}>
            <div className={css.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={css.box}>
                {data &&
                    data.map((e, i) => {
                        if (i <= 2) {
                            return <Sub_card key={i} img={e.image} />;
                        }
                        return false;
                    })}
            </div>
        </div>
    );
};
export default Card_box;
