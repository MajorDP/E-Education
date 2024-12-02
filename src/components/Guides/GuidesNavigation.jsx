import { useState } from "react";
import styles from "./GuidesNavigation.module.css";

function GuidesNavigation({ guidesData, selectedGuide, setSelectedGuide }) {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className={styles.container}>
      <p>Commonly used methods</p>
      <ul className={styles.guideList}>
        {guidesData.map((guide, index) => (
          <ul key={index}>
            <span
              onClick={() =>
                setSelectedSection(guide.id === selectedSection ? 0 : guide.id)
              }
            >
              {selectedSection === guide.id ? "▼" : "►"}
              {guide.guideName}
            </span>
            {selectedSection === guide.id
              ? guide.guides.map((guideOption, index) => (
                  <li
                    className={
                      index + 1 === selectedGuide?.id
                        ? styles.selectedOption
                        : ""
                    }
                    key={guideOption.index}
                    onClick={() => setSelectedGuide(guideOption)}
                  >
                    {guideOption.guideName}
                  </li>
                ))
              : ""}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default GuidesNavigation;
