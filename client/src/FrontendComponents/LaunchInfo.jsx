import "../styles/LaunchInfo.css";
import { Link } from "react-router-dom";
function LaunchInfo() {
  return (
    <section className="LaunchContainer">
      <div className="Launch">
        <h2>Ready to Take Control of Your Files?</h2>
        <p>
          Join the decentralized revolution. Start sharing files the secure,
          private, and permanent way.
        </p>
        <Link to="/backend" className="button">
          Launch MetaDrive
        </Link>
      </div>
    </section>
  );
}
export default LaunchInfo;
