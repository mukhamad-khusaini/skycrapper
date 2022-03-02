import css from "../styles/Latest.module.css";
import Main_post from "./Main_post";
import Card_box from "./Card_box";

const Latest = () => {
    return (
        <div className={css.latest}>
            <Main_post />
            <Card_box title="Trending" />
            <Card_box title="Most Liked" />
            <Card_box title="Oldest" />
        </div>
    );
};

export default Latest;
