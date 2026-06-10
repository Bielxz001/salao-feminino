import { Star, Scissors, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    icon: Star,
    title: "Profissionais Experientes",
    description:
      "Equipe altamente qualificada e especializada em técnicas modernas",
  },
  {
    icon: Scissors,
    title: "Produtos Premium",
    description:
      "Utilizamos apenas produtos de alta qualidade para o melhor resultado",
  },
  {
    icon: Clock,
    title: "Atendimento Exclusivo",
    description: "Horário marcado com toda atenção dedicada a você",
  },
];

function FeatureCard({ icon: Icon, title, description, delay }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`text-center p-8 bg-white shadow-md border border-amber-100 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl mb-2 text-amber-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={`${index * 150}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
