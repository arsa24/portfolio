import { useState, useEffect } from "react";
import React from "react";
import CardDocs from "./CardDocs";

const HarianSection = () => {
  const [day, setDay] = useState([]);

  useEffect(() => {
    fetch("/api/harian")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setDay(res);
        console.log(res);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {
      day
        .map((e, i) => (
          <CardDocs
            key={i}
            title={i === 0 ? "Hari Pertama" : `Hari ke-${i + 1}`}
            date={e.date}
            img={e.images[0]}
            path={e.images}
          />
        ))}
    </div>
  );
};

export default HarianSection;
