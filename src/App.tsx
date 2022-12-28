import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Store from "../src/pages/Store"
import About from "../src/pages/About";
import { Container } from "react-bootstrap"
import Navbar from "./components/Navbar/index";

function App() {

  return (
      <>
          <Navbar />
          <Container className="mb-4">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/about" element={<About />} />
              </Routes>
          </Container>
      </>
  )
}

export default App
