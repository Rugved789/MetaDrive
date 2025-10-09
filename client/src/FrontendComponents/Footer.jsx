import "../styles/footer.css";

function Foot() {
  return (
    <footer>
      <div className="footContainer">
        <div className="Links">
          <div className="Social">
            {/* Satrt of Social Div*/}
            <div className="webHed">
              <span>MetaDrive</span>
            </div>
            <p>
              The future of file sharing is decentralized, secure, and in your
              control.
            </p>
            <div className="SocialLinks">
              <a href="#Twitter">Twitter</a>
              <a href="#GitHub">GitHub</a>
              <a href="#Discord">Discord</a>
            </div>
          </div>
          {/* End of Social Div*/}
          <div className="product">
            {/* Satrt of product Div*/}
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#Features">Features</a>
              </li>
              <li>
                <a href="#HowItWorks">How It Works</a>
              </li>
              <li>
                <a href="#Pricing">Pricing</a>
              </li>
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
            </ul>
            {/* End of product Div*/}
          </div>
          <div className="resources">
            {/* Satrt of ress Div*/}
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#Documentation">Documentation</a>
              </li>
              <li>
                <a href="#APIReference">API Reference</a>
              </li>
              <li>
                <a href="#SmartContract">Smart Contract</a>
              </li>
              <li>
                <a href="#Support">Support</a>
              </li>
            </ul>
            {/* End of ress Div*/}
          </div>
        </div>

        {/* Satrt of CopyWrite Div*/}
        <div className="copyWrite">
          <p>
            © 2025 MetaDrive. Built with React, IPFS, and Ethereum. Open source
            and decentralized.
          </p>
          <p>Developed by Rugved Gadge</p>
        </div>
      </div>
    </footer>
  );
}
export default Foot;
