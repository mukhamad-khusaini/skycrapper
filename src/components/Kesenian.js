import css from "../styles/Kesenian.module.css";
import { useState, useEffect } from "react";
import CardSecond from "./CardSecond";
import { url } from "../Global_variables";

const Kesenian = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url + "/kesenian")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);
    return (
        <div className={css.kesenian}>
            {data &&
                data.map((e) => {
                    return <CardSecond key={e.id} data={e} />;
                })}
        </div>
    );
};

export default Kesenian;
