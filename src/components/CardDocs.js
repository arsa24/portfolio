import { useState, useEffect } from "react";
import { Rubik } from "next/font/google";

const rubikMedium = Rubik({
  weight: "500",
  subsets: ["latin"],
});

const rubik400 = Rubik({
  weight: "400",
  subsets: ["latin"],
});

const description = "";

const CardDocs = ({ img, title, date, path }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <>
      <div className="rounded-lg border overflow-hidden border-[#262722] neo-brtl-l">
        <div
          className="relative h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-lg font-bold">{title}</h3>
          </div>
        </div>

        <div className={`p-4 bg-white ${rubik400.className}`}>
          <h4 className="text-gray-800 font-semibold text-[14px]">
            Tanggal: <span className="font-medium">{date}</span>
          </h4>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <ul className="text-gray-700 text-sm">
            <li>🧑‍🎨 UI/UX Designer</li>
            <li>💻 Programmer</li>
          </ul>

          <div className="mt-4 ">
            <button
              className={`text-black text-sm mx-auto w-full bg-[#f4d738] py-2 rounded-sm neo-brtl-s ${rubikMedium.className}`}
              onClick={() => setOpenModal(true)}
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-end justify-center z-50 w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full h-[90%] overflow-y-auto">
            <button onClick={() => setOpenModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <h2 className={`text-xl font-bold mb-4 ${rubikMedium.className}`}>
              Detail Hari ke-{title}
            </h2>
            <p className="text-gray-700 mb-4">
              Tanggal: {date + "-2025"}
              <br />
              Deskripsi: {description || "Deskripsi tidak tersedia."}
            </p>
            <div className="grid gap-4 lg:grid-cols-3">
              {path.map((data, i) => {
                return <img src={data} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDocs;
