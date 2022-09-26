import AddHero from "./AddHero";
import GetHero from "./GetHero";
import './app.css';

function App() {
  return (
    <div className="App">
      <h2>React client</h2>
      <p>communicating with ASP.NET Core</p>
      <br />
      <GetHero />
      <AddHero />
    </div>
  );
}

export default App;
