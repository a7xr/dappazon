import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";

// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const [dappazon, setDappazon] = useState(null);

  const loadBlockchainData = async () => {
    // Connect to Blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();

    // Connect to Smart Contracts
    const dappazon = new ethers.Contract(
      config[network.chainId].dappazon.address,
      Dappazon,
      provider
    );
    setDappazon(dappazon);

    // Load products
    const items = [];

    for (var i = 0; i < 9; i++) {
      const item = await dappazon.items(i + 1);
      items.push(item);
    }
    // console.log(items);
    const electronics = items.filter((item) => item.category === "electronics");
    console.log(electronics);
  };
  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <h2>Welcome to Dappazon !</h2>
    </div>
  );
}

export default App;
