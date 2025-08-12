import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-transparent flex justify-center items-center h-full">
      <div
        className="w-full max-w-4xl rounded-2xl overflow-hidden"

        aria-label="Hero"
      >
        {/* dark overlay */}

        <div className="relative z-10 px-6 text-center text-white">
          <h1 className=" hero-title 
          text-7xl font-extrabold tracking-tight mb-6 text-[#FFD700]">
            ¡30% <span className="text-[#FFD700]">EXTRA!</span>
          </h1>

          <h2 className="hero-title 
          !text-3xl font-extrabold tracking-tight mb-6 !text-white">
            CLICK EN WHATSAPP
          </h2>
          <div className="my-8">
            <a
              href="https://api.whatsapp.com/send/?phone=541158406428&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"

            >
              <i className="fab fa-whatsapp text-[#1fa953] text-[180px] inline-block transition-transform duration-300 ease-in-out hover:scale-110"></i>
            </a>

          </div>
          <h2 className="hero-title 
          !text-2xl font-extrabold tracking-tight mb-6 !text-white">
            +54 1158406428
          </h2>

          <div className="flex gap-16 justify-center mt-16">
            <div className=" feature">
              <i className="fas fa-shield-alt text-[#FFD700] text-3xl"></i>
              <span>100% Seguro</span>
            </div>

            <div className="feature">
              <i className="fas fa-clock text-[#FFD700] text-3xl"></i>

              <span>24/7 Soporte</span>
            </div>
          </div>
        </div>

        {/* small footer strip */}
        {/* <div className="absolute bottom-0 left-0 right-0 py-3 text-sm text-white text-center">
          <span className="inline-block px-3">Casino Ganamos</span>
        </div> */}
      </div>
    </div>
  );
}
