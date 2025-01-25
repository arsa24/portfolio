import Card from "../../components/Card";
import h1 from "./source/edited/h-1.jpg";
import design from "./source/design.svg";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f5f2] px-8">
      <div className="max-w-5xl mx-auto">
        <section className="grid gap-8">
          <div className="grid grid-cols-2 justify-between gap-10 min-h-screen items-center">
            <div className="flex flex-col gap-4">
              <p className="text-[#292927] font-rubik text-sm">
                Dokumentasi kegiatan
              </p>
              <h1 className="text-5xl font-extrabold text-[#292927] font-archivo">
                PRAKTIK KERJA LAPANG
              </h1>
              <p className="text-gray-600 font-archivo">
                Temukan informasi tentang kegiatan Praktek Kerja
                <br /> Lapang (PKL) yang telah didokumentasikan.
              </p>
            </div>
            <div>
              <img src={design} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Daftar Dokumentasi
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
              <Card date="6 Januari 2024" title="Hari pertama" img={h1} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
