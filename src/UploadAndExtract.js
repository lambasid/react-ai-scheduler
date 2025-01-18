import React from "react";
import Tesseract from "tesseract.js";

const UploadAndExtract = ({ setScheduleText }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Tesseract.recognize(URL.createObjectURL(file), "eng")
        .then(({ data: { text } }) => setScheduleText(text))
        .catch((err) => console.error("Error during OCR:", err));
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Upload an Image of Your Schedule</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default UploadAndExtract;
