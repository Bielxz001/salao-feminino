import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
  const { ref, visible } = useScrollAnimation(0);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1400"
          alt="Salão BelleHair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/75 to-amber-900/40" />
      </div>

      <div
        ref={ref}
        className={`relative h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-amber-300 tracking-[0.3em] uppercase text-sm mb-4">
          Salão de Beleza
        </p>
        <h1 className="text-6xl md:text-7xl text-white mb-6 tracking-wide">
          BelleHair
        </h1>
        <p className="text-xl text-amber-100 mb-10 max-w-xl">
          Especialistas em coloração, cortes e tratamentos capilares de luxo
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#servicos")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-lg rounded-md"
          >
            Ver Serviços
          </a>
          <a
            href="#agendamento"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#agendamento")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-900 transition-colors rounded-md shadow-lg"
          >
            Agendar Horário
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
