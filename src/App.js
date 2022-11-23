import logo from "./logo.svg";
import "./App.css";
import { HomePageComponents } from "./components/Home/Home";
function App() {
  return (
    <div className="homepage">
      <button className="btn-connect">Connect Wallet</button>
      <h1 className="title">Funding the contract</h1>
      <HomePageComponents />
    </div>
  );
}

export default App;
