import "./styles/global.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";

const App = () => {
    return (
        <Layout>
            <Blog></Blog>
        </Layout>
    );
};

export default App;
