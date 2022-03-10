import css from "../styles/BaktiSosial.module.css";
import { useState, useEffect } from "react";
import CardSecond from "./CardSecond";
import { url } from "../Global_variables";

const BaktiSosial = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url + "/baktisosial")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);
    return (
        <div className={css.baktiSosial}>
            {data &&
                data.map((e) => {
                    return <CardSecond key={e.id} data={e} />;
                })}
        </div>
    );
};

export default BaktiSosial;
