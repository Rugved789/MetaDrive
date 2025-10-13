import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      const select = document.querySelector("#selectNumber");
      select.innerHTML = "<option>People With Access</option>"; // Reset options

      addressList.forEach((addr) => {
        const option = document.createElement("option");
        option.textContent = addr;
        option.value = addr;
        select.appendChild(option);
      });
    };
    contract && accessList();
  }, [contract]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2>Share with</h2>
        </div>
        <div className="modalBody">
          <input
            type="text"
            className="address"
            placeholder="Enter Address"
          />
          <select id="selectNumber" className="accessList">
            <option>People With Access</option>
          </select>
        </div>
        <div className="modalFooter">
          <button id="cancelBtn" onClick={() => setModalOpen(false)}>
            Cancel
          </button>
          <button onClick={sharing}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
