import CardDocs from "./CardDocs";
import { useState, useEffect } from "react";

const MingguanSection = () => {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    fetch("/api/mingguan")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setWeek(res);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="space-y-10">
      {week.map((e, i) => (
        <div key={i}>
          <h3 className="font-bold text-gray-800 mb-4 md:text-lg text-base">
            Minggu {Number(e.minggu) === 1 ? "pertama" : `ke-${e.minggu}`}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {e.path.map((day, j) => (
              <CardDocs
                key={`${i}-${j}`}
                title={j === 0 ? "Hari Pertama" : `Hari ke-${j + 1}`}
                date={day.tanggal}
                img={day.img[0]}
                path={day.img}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MingguanSection;
