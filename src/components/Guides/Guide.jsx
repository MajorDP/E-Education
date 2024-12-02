import { useState } from "react";
import styles from "./Guide.module.css";
function Guide({ guidesData, selectedGuide }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      {selectedGuide === null && <h3>Select a lesson to being learning</h3>}
      {selectedGuide !== null && (
        <>
          <p>{selectedGuide.guideName}</p>
          <div className={styles.description}>
            <div>{selectedGuide.description}</div>
          </div>
        </>
      )}

      {selectedGuide?.showcase && (
        <section
          id="live"
          className="live"
          style={{
            backgroundColor: "#000000",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
          }}
        >
          <header
            className="output-header border-rounded-top-no-bottom"
            style={{
              backgroundColor: "#6b7177",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <h4
              className="output-heading"
              style={{ margin: 0, fontSize: "1.2em", textAlign: "center" }}
            >
              {selectedGuide.showcase.showcaseName}
            </h4>
          </header>

          <div
            id="editor"
            className="editor"
            style={{
              backgroundColor: "#3a3a3a",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "0 0 8px 8px",
              marginBottom: "20px",
            }}
          >
            <div
              className="cm-editor"
              style={{ fontFamily: "'Courier New', Courier, monospace" }}
            >
              <div
                className="cm-scroller"
                tabIndex="-1"
                style={{ overflowY: "auto", maxHeight: "200px" }}
              >
                <div
                  spellCheck="false"
                  autoCorrect="off"
                  autoCapitalize="off"
                  translate="no"
                  contentEditable="false"
                  style={{
                    tabSize: "4",
                    padding: "10px",
                    backgroundColor: "#000000",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  className="cm-content"
                  role="textbox"
                  aria-multiline="true"
                  data-language="javascript"
                >
                  {selectedGuide.showcase.showcaseCodeLines.map((line, index) =>
                    line.startsWith("//") ? (
                      <div>{line}</div>
                    ) : selectedGuide.showcase.showcaseCodeLines[
                        index + 1
                      ].startsWith("//") ? (
                      <div>{line}</div>
                    ) : (
                      <>
                        <div>{line}</div>
                        <br />
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="output-container" style={{ textAlign: "center" }}>
            <div className="buttons-container" style={{ marginBottom: "10px" }}>
              <button
                id="execute"
                className="button run"
                type="button"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#042f63",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={() => setIsVisible(!isVisible)}
              >
                Run ›
              </button>
            </div>

            <div
              id="console"
              className="output"
              style={{
                backgroundColor: "#000000",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <div style={{ visibility: !isVisible ? "hidden" : "" }}>
                {selectedGuide.showcase.result.map((el) => (
                  <>
                    <span>&gt; {el}</span>
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {selectedGuide?.parameters !== undefined && (
        <div className={styles.parameters}>
          <p style={{ color: "white" }}>Parameters</p>
          <ul>
            {selectedGuide?.parameters.map((param) => (
              <li>
                <span style={{ color: "white" }}>{param.name}</span>
                <p>{param.description}</p>
                {param.extras !== undefined && (
                  <ul>
                    {param.extras.map((extra) => (
                      <li>
                        <span style={{ color: "white" }}>{extra.name}</span>
                        <p>{extra.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Guide;
