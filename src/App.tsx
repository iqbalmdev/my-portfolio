import React from "react";
import "./app.css";
import { Navbar, Header, Footer } from "./components";
import { About, Experience, Projects, Contacts } from "./pages";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
