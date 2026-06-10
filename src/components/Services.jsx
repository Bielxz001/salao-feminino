import { useState } from "react";
import { services } from "../data/content";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ServiceCard({ category, items }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-amber-50 to-white p-6 shadow-lg border border-amber-200 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-2xl mb-6 text-amber-900 border-b-2 border-amber-600 pb-2">
        {category}
      </h3>
      <div className="space-y-3">
        {items.map((service) => (
          <div
            key={service.name}
            className="flex justify-between items-start bg-white p-4 border border-amber-100 hover:shadow-md hover:border-amber-300 transition-all"
          >
            <div>
              <p className="text-amber-900">{service.name}</p>
              <p className="text-sm text-gray-400">{service.duration}</p>
            </div>
            <p className="text-amber-600 font-medium">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryTab({ gallery }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gallery.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden shadow-lg aspect-square border-4 border-white"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <p className="text-white p-4">{item.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Services({ gallery }) {
  const [activeTab, setActiveTab] = useState("servicos");
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl mb-4 text-amber-900">
            Nossos Trabalhos e Preços
          </h2>
          <p className="text-xl text-gray-500">
            Confira nossos serviços e a galeria de trabalhos realizados
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {["servicos", "galeria"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 transition-all capitalize ${
                activeTab === tab
                  ? "bg-amber-600 text-white shadow-lg rounded-md"
                  : "bg-white text-amber-900 border-2 border-amber-600 hover:bg-amber-50 rounded-md"
              }`}
            >
              {tab === "servicos"
                ? "Serviços e Preços"
                : "Galeria de Trabalhos"}
            </button>
          ))}
        </div>

        {activeTab === "servicos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <ServiceCard
                key={s.category}
                category={s.category}
                items={s.items}
              />
            ))}
          </div>
        )}

        {activeTab === "galeria" && <GalleryTab gallery={gallery} />}
      </div>
    </section>
  );
}
