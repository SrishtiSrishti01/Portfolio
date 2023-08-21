import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
