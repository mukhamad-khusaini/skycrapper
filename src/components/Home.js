import { useState } from "react";
import css from "../styles/Home.module.css";
import Latest from "./Latest";
import Kuliner from "./Kuliner";

function Home() {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    function activate(is1, is2, is3, is4) {
        setIsActive1(is1);
        setIsActive2(is2);
        setIsActive3(is3);
        setIsActive4(is4);
    }
    return (
        <div className={css.home}>
            <div className={css.option}>
                <p data="terbaru" onClick={() => activate(true, false, false, false)} className={isActive1 ? css.active : ""}>
                    Terbaru
                </p>
                <p onClick={() => activate(false, true, false, false)} className={isActive2 ? css.active : ""}>
                    Kuliner
                </p>
                <p onClick={() => activate(false, false, true, false)} className={isActive3 ? css.active : ""}>
                    Kesenian
                </p>
                <p onClick={() => activate(false, false, false, true)} className={isActive4 ? css.active : ""}>
                    Bakti Sosial
                </p>
            </div>
            <div className={css.container}>
                {isActive1 && <Latest />}
                {isActive2 && <Kuliner />}
                {isActive3 && <Latest />}
                {isActive4 && <Latest />}
            </div>
        </div>
    );
}

export default Home;
