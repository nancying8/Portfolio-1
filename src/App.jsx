import React from "react"; // Import React to use JSX
import { Route, Routes, BrowserRouter } from "react-router-dom"; // Importing React Router for page navigation
import "./App.css"; // Importing the external CSS file for styling

// pages
import Home from "./pages/Home"; // Importing the Home page component
import Projects from "./pages/Projects"; // Importing the Projects page component
import About from "./pages/About"; // Importing the About page component

// components
import Layout from './components/Layout'; // Importing Layout component which wraps the pages

// <BrowserRouter> is the router to the navigation
// <Routes> define routes for the application 
// <Layout> is used to wrap the pages for consistent structure across routes

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path="/Projects" element={ <Projects />} />
          <Route path="/About" element={ <About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
