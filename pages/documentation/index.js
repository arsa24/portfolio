"use client";
import { useState } from "react";
import "../../src/app/globals.css";
import { Rubik, Archivo } from "next/font/google";
import MingguanSection from "@/components/MingguanSection";
import HarianSection from "@/components/HarianSection";

const rubikMedium = Rubik({ weight: "500", subsets: ["latin"] });
const archive500 = Archivo({ weight: "500", subsets: ["latin"] });
const archive700 = Archivo({ weight: "700", subsets: ["latin"] });

const Index = () => {
  const [isWeek, setIsWeek] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f5f2] px-8 py-10 md:py-0">
      <div className="max-w-5xl mx-auto">
        <section>
          <div className="grid md:grid-cols-2 justify-between gap-10 min-h-screen items-center">
            <div className="flex flex-col gap-2 items-start">
              <p className={`text-[#292927] ${rubikMedium.className} text-sm`}>
                Dokumentasi kegiatan
              </p>
              <h1 className={`text-5xl font-extrabold text-[#292927] ${archive700.className}`}>
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
              <img src="/source/docs-design.svg" alt="Dokumentasi" />
            </div>
          </div>
          <div id="docs" className="py-10">
  <div className="flex justify-between items-center">
    <h2 className={`md:text-xl text-sm font-semibold text-gray-800 ${archive700.className}`}>
      Daftar Dokumentasi
    </h2>
    <button
      onClick={() => setIsWeek((prev) => !prev)}
      className={`flex items-center md:text-base text-sm gap-2 px-4 py-2 rounded-md ${
        isWeek ? "bg-[#f4d738]" : "bg-gray-200"
      } ${archive500.className} text-[#292927]`}
    >
      {isWeek ? "Mingguan" : "Harian"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#292927"
      >
        <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </button>
  </div>
  <div className="mt-10">{isWeek ? <MingguanSection /> : <HarianSection />}</div>
</div>

        </section>
      </div>
    </div>
  );
};

export default Index;
