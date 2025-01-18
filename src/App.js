import React, { useState } from "react";
import UploadAndExtract from "./UploadAndExtract";
import { generateICS } from "./generateICS";

const App = () => {
  const [scheduleText, setScheduleText] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Schedule to ICS Converter</h1>
      <UploadAndExtract setScheduleText={setScheduleText} />
      <textarea
        rows={10}
        cols={50}
        placeholder="Or, paste your schedule here (format: YYYY-MM-DD,HH:MM,Event Title)"
        value={scheduleText}
        onChange={(e) => setScheduleText(e.target.value)}
        style={{ marginTop: "20px", width: "100%" }}
      />
      <button
        onClick={() => generateICS(scheduleText)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Download ICS
      </button>
    </div>
  );
};

export default App;
