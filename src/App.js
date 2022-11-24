import "./App.css";
import { HomePageComponents } from "./components/Home/Home";
import { useState } from "react";
function App() {
  const [connected, isConnected] = useState(false);
  const connect = async () => {
    if (window.ethereum) {
      console.log(`Metamask detected`);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      isConnected(true);
      console.log(`Metamask connected!`);
    } else {
      console.log(`Metamask not detected`);
    }
  };

  return (
    <div className="homepage">
      <button className="btn-connect" onClick={connect}>
        {connected ? `Connected` : `Connect Wallet`}
      </button>
      <h1 className="title">Funding the contract</h1>
      <HomePageComponents />
    </div>
  );
}

export default App;
