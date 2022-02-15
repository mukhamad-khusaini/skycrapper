import css from "../styles/Blog.module.css";
import Card_box from "./Card_box";

const Blog = () => {
    return (
        <div className={css.blog}>
            <div className={css.header}>
                <h4>Bakti Sosial</h4>
                <h1>How to Handle Shipping and Delivery During World-wide Pandemic</h1>
                <p>M. Kalingga - 19 Desember 2022</p>
                <span></span>
            </div>
            <div className={css.content}>
                <img src="./img/ship.jpg" alt="ship" />
                <h6>unsplash.com</h6>
                <div className={css.txt}>
                    <p>
                        <span>Yogyakarta, 20 Maret 2021</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci
                        leo, tempor quis odio non, fermentum tempor dolor. Quisque nec tristique velit. Maecenas id sapien mauris. Morbi
                        lacinia nunc ut viverra tempor. Nulla dictum ex quam, at molestie felis egestas vitae. Cras ante eros, porta ac enim
                        in, consequat maximus mauris. Nam viverra fringilla turpis in vestibulum. Vivamus tristique cursus ornare.
                        Suspendisse tempor velit vitae risus elementum porttitor. Aliquam sagittis imperdiet ipsum sed tristique. Ut
                        sagittis ut lectus ut blandit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci leo, tempor quis odio non, fermentum tempor
                        dolor. Quisque nec tristique velit. Maecenas id sapien mauris. Morbi lacinia nunc ut viverra tempor. Nulla dictum ex
                        quam, at molestie felis egestas vitae. Cras ante eros, porta ac enim in, consequat maximus mauris. Nam viverra
                        fringilla turpis in vestibulum. Vivamus tristique cursus ornare. Suspendisse tempor velit vitae risus elementum
                        porttitor. Aliquam sagittis imperdiet ipsum sed tristique. Ut sagittis ut lectus ut blandit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci leo, tempor quis odio non, fermentum tempor
                        dolor. Quisque nec tristique velit. Maecenas id sapien mauris. Morbi lacinia nunc ut viverra tempor. Nulla dictum ex
                        quam, at molestie felis egestas vitae. Cras ante eros, porta ac enim in, consequat maximus mauris. Nam viverra
                        fringilla turpis in vestibulum. Vivamus tristique cursus ornare. Suspendisse tempor velit vitae risus elementum
                        porttitor. Aliquam sagittis imperdiet ipsum sed tristique. Ut sagittis ut lectus ut blandit.
                    </p>
                    <ol>
                        <li>Lorem ipsum dolor sit amet,</li>
                        <li>Cras ante eros, porta ac enim in, consequat maximus mauris</li>
                        <li>Ut sagittis ut lectus ut blandit.</li>
                    </ol>
                </div>
                <div className={css.share}>
                    <h2>Share Article</h2>
                    <div>
                        <img src="./img/twtBlack.png" alt="tweeter" />
                        <img src="./img/fbBlack.png" alt="facebook" />
                        <img src="./img/waBlack.png" alt="whatsapp" />
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
