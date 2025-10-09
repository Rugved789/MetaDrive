import Upload from "../abis/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./FileUpload";
import Display from "./Display";
import Modal from "./Modal";
import localContractAddress from "../contractAddress";
import "./backend.css";

// Target network config
// By default this is set to Sepolia (for public deployment).
// To use the local Hardhat network for development, replace TARGET_NETWORK
// with HARDHAT_NETWORK below (or switch the object to the hardhat values).
  const SEPOLIA_NETWORK = {
    chainId: "0xaa36a7", // 11155111 in hex
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [process.env.REACT_APP_SEPOLIA_RPC_URL], // not required here but informative
  };

  // Hardhat local (example). Uncomment to use local instead of Sepolia.
  // const HARDHAT_NETWORK = {
  //   chainId: "0x539", // 1337 in hex
  //   chainName: "Hardhat Localhost",
  //   nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  //   rpcUrls: ["http://127.0.0.1:8545"],
  // };

  const TARGET_NETWORK = SEPOLIA_NETWORK;

  function Backend() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      // Only run in browser with MetaMask available
      if (typeof window === "undefined" || !window.ethereum) {
        console.error("MetaMask (window.ethereum) not found");
        return;
      }

      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);

      const loadProvider = async () => {
        try {
          // Try to switch the user's wallet to the target network
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: TARGET_NETWORK.chainId }],
            });
          } catch (switchError) {
            // If the chain is not added, add it
            if (switchError && switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [TARGET_NETWORK],
                });
              } catch (addError) {
                // user likely rejected adding the network
                console.warn("User rejected adding the network:", addError);
              }
            } else {
              // other switch errors are ignored here
              console.warn("Error switching network:", switchError);
            }
          }

          // Event listeners for reload on account/network change
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          // Request accounts
          await web3Provider.send("eth_requestAccounts", []);
          const signer = web3Provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);

          // Use imported contractAddress (this should have been written by deploy script)
          const usedAddress = process.env.REACT_APP_CONTRACT_ADDRESS || localContractAddress;

          const uploadContract = new ethers.Contract(usedAddress, Upload.abi, signer);

          setContract(uploadContract);
          setProvider(web3Provider);
        } catch (err) {
          console.error("Failed to load provider or contract:", err);
        }
      };

      loadProvider();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        {!modalOpen && (
          <button className="share" onClick={() => setModalOpen(true)}>
            Share
          </button>
        )}
        {modalOpen && <Modal setModalOpen={setModalOpen} contract={contract} />}

        <div className="App">
          <h1 style={{ color: "white" }}>MetaDrive</h1>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>

          <p style={{ color: "white" }}>
            Account : {account ? account : "Not connected"}
          </p>

          <FileUpload account={account} provider={provider} contract={contract} />
          <Display contract={contract} account={account} />
        </div>
      </>
    );
  }

export default Backend;