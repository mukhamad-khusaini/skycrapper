import css from "../styles/Not_found.module.css";

const Not_found = () => {
    return (
        <div className={css.not}>
            <img width="300" height="300" src="/img/notFound.svg" alt="404" />
            <h1>Page Not Found</h1>
        </div>
    );
};

export default Not_found;
