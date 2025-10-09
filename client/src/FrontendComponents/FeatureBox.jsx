import "../styles/FeatureBox.css";
function FeatureBox(props) {
  return (
    <div className="box">
      <div className="boxInfo">
        <div className="Featurelogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-shield"
            viewBox="0 0 16 16"
          >
            <path d={props.logoPath} />
          </svg>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
export default FeatureBox;
