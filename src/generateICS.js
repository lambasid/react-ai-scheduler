import { createEvents } from "ics";
import { saveAs } from "file-saver";

export const generateICS = (text) => {
  const events = text
    .split("\n") // Split by lines
    .filter((line) => line.trim()) // Remove empty lines
    .map((line) => {
      const [date, time, title] = line.split(","); // Format: YYYY-MM-DD,HH:MM,Event Title
      if (!date || !time || !title) return null;

      const [year, month, day] = date.split("-").map(Number);
      const [hour, minute] = time.split(":").map(Number);
      return {
        start: [year, month, day, hour, minute],
        title: title.trim(),
      };
    })
    .filter(Boolean); // Remove null entries

  createEvents(events, (error, value) => {
    if (error) {
      console.error("Error generating ICS:", error);
      return;
    }
    const blob = new Blob([value], { type: "text/calendar" });
    saveAs(blob, "schedule.ics");
  });
};
