import AddHero from "./AddHero";
import GetHero from "./GetHero";
import './app.css';

function App() {
  return (
    <div className="App">
      <h2 style={{textAlign: 'center'}}>React client</h2>
      <p style={{textAlign: 'center'}}>communicating with ASP.NET Core</p>
      <br />
      <GetHero />
      <AddHero />
    </div>
  );
}

export default App;
