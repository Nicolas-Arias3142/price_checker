import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="App">
      <h1>Nicolas Arias</h1>
      <ProfileCard
        name="Nicolas Arias"
        bio="Frontend developer and React enthusiast."
        imageSrc={logo}
      />
      <div style={{ height: 12 }} />
      <ProfileCard
        name="Guest User"
        bio="This is a short bio without an image."
      />
    </div>
  );
}

export default App;
