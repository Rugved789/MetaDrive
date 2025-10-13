import Upload from "../abis/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./FileUpload";
import Display from "./Display";
import Modal from "./Modal";
import localContractAddress from "../contractAddress";
import { Link } from "react-router-dom";
import "./backend.css";

const SEPOLIA_NETWORK = {
  chainId: "0xaa36a7",
  chainName: "Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: [process.env.REACT_APP_SEPOLIA_RPC_URL],
};

const TARGET_NETWORK = SEPOLIA_NETWORK;

function Backend() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) {
      console.error("MetaMask not found");
      return;
    }

    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(web3Provider);

    const handleNetwork = async () => {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: TARGET_NETWORK.chainId }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [TARGET_NETWORK],
            });
          } catch (addError) {
            console.warn("User rejected network add:", addError);
          }
        } else {
          console.warn("Error switching network:", switchError);
        }
      }
    };

    handleNetwork();

    window.ethereum.on("chainChanged", () => window.location.reload());
    window.ethereum.on("accountsChanged", () => window.location.reload());
  }, []);

  // Connect wallet with signature request
  const connectWallet = async () => {
    if (!provider) return alert("MetaMask not detected!");
    try {
      // Request account access first - this ensures signer has an account
      try {
        // prefer provider.send when available
        if (provider.send) {
          await provider.send("eth_requestAccounts", []);
        } else if (window.ethereum && window.ethereum.request) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        }
      } catch (reqErr) {
        console.warn("eth_requestAccounts failed:", reqErr);
        // continue - getSigner/getAddress may still work in some wallets
      }

      const signer = provider.getSigner();

      // Now get the address (will throw if signer has no accounts)
      const address = await signer.getAddress();

      // Request signature
      const signature = await signer.signMessage(
        "Sign to authenticate with MetaDrive"
      );
      console.log("Signature:", signature);

      setAccount(address);

      const usedAddress =
        process.env.REACT_APP_CONTRACT_ADDRESS || localContractAddress;
      const uploadContract = new ethers.Contract(usedAddress, Upload.abi, signer);
      setContract(uploadContract);
    } catch (err) {
      console.error("Wallet connection failed:", err);
      // Better user feedback for common issue
      if (err && err.code === "UNSUPPORTED_OPERATION") {
        alert("Wallet connection failed: no unlocked account available. Please unlock your wallet and try again.");
      } else if (err && err.code === 4001) {
        alert("Connection request rejected by user.");
      } else {
        alert("Connection rejected or failed! See console for details.");
      }
    }
  };

  // Disconnect wallet (clear state)
  const disconnectWallet = () => {
    setAccount("");
    setContract(null);
  };

  return (
    <div className="backend-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <div className="back-button">
            <Link to="/" className="back-btn">
              ← Back to Home
            </Link>
            <h2>MetaDrive</h2>
          </div>

        </div>
        <div className="navbar-right">
          {!account ? (
            <button className="nav-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <>
              <button className="nav-btn connected">
                {account.slice(0, 6)}...{account.slice(-4)}
              </button>
              <button className="nav-btn" onClick={() => setModalOpen(true)}>
                Share
              </button>
              <button className="nav-btn" onClick={disconnectWallet}>
                Disconnect
              </button>
            </>
          )}
        </div>
      </div>

      {modalOpen && <Modal setModalOpen={setModalOpen} contract={contract} />}

      <div className="App">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        {!account && (
          <p className="connect-warning">
            ⚠️ Please connect your wallet to use MetaDrive.
          </p>
        )}

        {account && (
          <>
            <FileUpload account={account} provider={provider} contract={contract} />
            <Display contract={contract} account={account} />
          </>
        )}
      </div>
    </div>
  );
}

export default Backend;
