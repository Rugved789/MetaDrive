import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    let dataArray;
    const otherAddress = document.querySelector(".address-input").value;

    try {
      dataArray = otherAddress
        ? await contract.display(otherAddress)
        : await contract.display(account);
    } catch (err) {
      alert("❌ You don't have access to view these images.");
      return;
    }

    if (!dataArray || dataArray.length === 0) {
      alert("⚠️ No image to display");
      return;
    }

    const gateways = [
      "https://ipfs.io/ipfs/",
      "https://cloudflare-ipfs.com/ipfs/",
      "https://gateway.pinata.cloud/ipfs/",
    ];

    const images = dataArray.map((item, index) => {
      let cid = item.startsWith("ipfs://") ? item.slice(7) : item;
      const srcCandidates = gateways.map((g) => `${g}${cid}`);

      const handleError = (e) => {
        const img = e.target;
        const current = srcCandidates.indexOf(img.src);
        const next = current + 1;
        if (next < srcCandidates.length) {
          img.src = srcCandidates[next];
        } else {
          img.alt = "Image unavailable";
        }
      };

      return (
        <a
          href={`https://ipfs.io/ipfs/${cid}`}
          key={index}
          target="_blank"
          rel="noreferrer"
          className="image-wrapper"
        >
          <img
            src={srcCandidates[0]}
            alt="Uploaded"
            className="image-item"
            onError={handleError}
          />
        </a>
      );
    });

    setData(images);
  };

  return (
    <>
      {/* Address + Button Container */}
      <div className="address-container">
        <input
          type="text"
          placeholder="Enter Address"
          className="address-input"
        />
        <button className="get-data-btn" onClick={getdata}>
          Get Data
        </button>
      </div>

      {/* Image Grid */}
      {data.length > 0 && <div className="image-list">{data}</div>}
    </>
  );
};

export default Display;
