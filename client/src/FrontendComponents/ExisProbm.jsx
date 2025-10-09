import "../styles/ExisProbm.css";

function ExisProbm() {
  return (
    <section className="problem">
      <div className="problemContainer">
        <div className="title">
          <h2>The Problem with Traditional File Sharing</h2>
          <p>
            Current file sharing solutions are centralized, vulnerable, and give
            you no real control over your data.
          </p>
        </div>
        <div className="issues">
          <div className="issueBox">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="red"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <h3>Single Point of Failure</h3>
            <p>
              When centralized servers go down, your files become inaccessible.
              Companies can shut down overnight.
            </p>
          </div>
          <div className="issueBox">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="rgb(254, 231, 232)" />
                <g
                  transform="translate(14, 14) scale(1.4)"
                  fill="red"
                  stroke="red"
                  strokeWidth="1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </g>
              </svg>
            </div>
            <h3>No Real Ownership</h3>
            <p>
              Your files are stored on someone else's servers. They control
              access, can delete files, or change terms.
            </p>
          </div>
          <div className="issueBox">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <circle cx="25" cy="25" r="25" fill="rgb(250, 210, 212)" />

                <g
                  transform="translate(14, 14) scale(1.4)"
                  fill="#b71c1c"
                  stroke="#b71c1c"
                  strokeWidth="1.5"
                >
                  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                </g>
              </svg>
            </div>
            <h3>Privacy Concerns</h3>
            <p>
              Centralized platforms can access, analyze, and monetize your
              personal files without your knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExisProbm;
