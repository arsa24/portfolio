"use client";
import { useState, useEffect } from "react";
import CardDocs from "@/components/CardDocs";
import "../../src/app/globals.css";
import { Rubik, Archivo } from "next/font/google";

const rubikMedium = Rubik({
  weight: "500",
});

const archive500 = Archivo({
  weight: "500",
});

const archive700 = Archivo({
  weight: "700",
});

const index = () => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setDate(res.documentation);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f5f2] px-8 my-10 md:my-0">
      <div className="max-w-5xl mx-auto">
        <section className="">
          <div className="grid md:grid-cols-2 justify-between gap-10 min-h-screen items-center">
            <div className="flex flex-col gap-2 items-start">
              <p className={`text-[#292927] ${rubikMedium.className} text-sm`}>
                Dokumentasi kegiatan
              </p>
              <h1
                className={`text-5xl font-extrabold text-[#292927] ${archive700.className}`}
              >
                PRAKTIK KERJA LAPANG
              </h1>
              <p className={`text-gray-600 ${archive500.className}`}>
                Temukan informasi tentang kegiatan Praktek Kerja
                <br /> Lapang (PKL) yang telah didokumentasikan.
              </p>
              <button className="mt-8">
                <a
                  href="#docs"
                  className={`bg-[#f4d738] px-6 py-4 rounded-md ${rubikMedium.className} font-medium neo-brtl`}
                >
                  Lihat dokumentasi
                </a>
              </button>
            </div>
            <div>
              <img src="/source/docs-design.svg" />
            </div>
          </div>
          <div id="docs" className="py-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Daftar Dokumentasi
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {date
                .sort((a, b) => {
                  const numA = parseInt(a.subfolder.split("-")[1], 10);
                  const numB = parseInt(b.subfolder.split("-")[1], 10);
                  return numA - numB;
                })
                .map((date, i) => {
                  return (
                    <CardDocs
                      key={i}
                      title={i == 0 ? "Hari Pertama" : `Hari ke-${i + 1}`}
                      date={date.subfolder}
                      img={date.preview}
                      path={date.images}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
