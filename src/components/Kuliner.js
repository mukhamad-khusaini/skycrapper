import { useState, useEffect } from "react";
import css from "../styles/Kuliner.module.css";
import CardSecond from "./CardSecond";
import { url } from "../Global_variables";

const Kuliner = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url + "/kuliner")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    return (
        <div className={css.kuliner}>
            {data &&
                data.map((e, i) => {
                    return <CardSecond key={e.id} data={e} />;
                })}
        </div>
    );
};

export default Kuliner;
