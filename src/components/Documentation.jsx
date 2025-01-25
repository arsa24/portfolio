const Documentation = () => {
  return (
    <section id="docs" className="bg-[#21241f] w-full pt-20">
      <div className="bg-[#21241f] min-h-screen">
        <div className="relative mx-8 grid gap-6">
          <div className=" w-full z-10 h-screen flex justify-center items-center flex-col gap-20 bg-docs">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-center text-white font-bold text-5xl drop-shadow-lg md:w-[65%]">
                Rekaman Perjalanan Praktik Kerja Lapangan 2025
              </h1>
              <p className="text-white text-center md:w-[30%] drop-shadow-lg">
                Dokumentasi Praktik Kerja Lapangan (PKL) 2025, berisi pengalaman
                dan pembelajaran di dunia industri
              </p>
            </div>
            <div className="w-full px-[30%]">
              <ul className="flex justify-between">
                <li className="bg-white flex justify-center items-center w-8 h-8 rounded-full">
                  <a href="">01</a>
                </li>
                <li className="bg-white flex justify-center items-center w-8 h-8 rounded-full">
                  <a href="">02</a>
                </li>
                <li className="bg-white flex justify-center items-center w-8 h-8 rounded-full">
                  <a href="">03</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center text-white">
            <div>
              <h2>lorem ipsmus</h2>
              <p>Lorem ipsum, dolor sit amet.</p>
            </div>
            <ul className="grid grid-cols-3 gap-3">
              <li>
                <a href="">6 Januari 2025</a>
              </li>
              <li>
                <a href="">6 Januari 2025</a>
              </li>
              <li>
                <a href="">6 Januari 2025</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="row-span-2 bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure,
              inventore sed rem qui iste voluptatum praesentium enim. Quis
              fugiat placeat veritatis. Itaque nostrum molestias exercitationem
              illo non alias odio!
            </div>
            <div className="bg-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure,
              inventore sed rem qui iste voluptatum praesentium enim. Quis
              fugiat placeat veritatis. Itaque nostrum molestias exercitationem
              illo non alias odio!
            </div>
            <div className="bg-white">
              <img
                src="https://drive.google.com/uc?export=view&id=1P2FaV_8nMLWFxuCCGWPYJF9UJCClLOUW"
                alt="lorem ipsum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
