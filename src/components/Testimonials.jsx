import { Star } from 'lucide-react';
import { testimonials } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, text, stars, delay }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`bg-white p-8 shadow-md border border-amber-100 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <StarRating count={stars} />
      <p className="text-gray-600 mb-6 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">
          {name.charAt(0)}
        </div>
        <p className="text-amber-900 font-medium">{name}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="depoimentos" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-amber-600 tracking-widest uppercase text-sm mb-2">Depoimentos</p>
          <h2 className="text-4xl text-amber-900 mb-4">O Que Nossas Clientes Dizem</h2>
          <p className="text-gray-500 text-lg">Satisfação que fala por si só</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={t.name}
              {...t}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}