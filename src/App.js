import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Not_found from "./components/Not_found";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="*" element={<Not_found />} />
            </Routes>
        </Layout>
    );
};

export default App;
