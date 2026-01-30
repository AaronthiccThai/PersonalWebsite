import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import ContactForm from "./pages/ContactForm";
import { Routes, Route } from "react-router-dom";
import Tech from "./pages/Tech";
 
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </Layout>
  );
}

export default App;
