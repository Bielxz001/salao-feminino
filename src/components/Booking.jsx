import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const whatsappNumber = "5500000000000";
const whatsappMessage = "Olá! Gostaria de agendar um horário.";

export function Booking() {
  const { ref, visible } = useScrollAnimation();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <section id="agendamento" className="py-20 bg-amber-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 tracking-widest uppercase text-sm mb-2">
            Agendamento
          </p>
          <h2 className="text-4xl text-amber-900 mb-4">Agende seu Horário</h2>
          <p className="text-gray-500 text-lg mb-10">
            Entre em contato pelo WhatsApp e nossa equipe vai te atender com
            prazer.
          </p>

          {/* Infos rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-amber-100 p-6 shadow-sm">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-900 font-medium mb-1">Horário</p>
              <p className="text-gray-500 text-sm">Seg–Sex: 09h às 19h</p>
              <p className="text-gray-500 text-sm">Sáb: 09h às 17h</p>
            </div>
            <div className="bg-white border border-amber-100 p-6 shadow-sm">
              <Phone className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-900 font-medium mb-1">Telefone</p>
              <p className="text-gray-500 text-sm">(11) 99999-9999</p>
            </div>
            <div className="bg-white border border-amber-100 p-6 shadow-sm">
              <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-900 font-medium mb-1">Endereço</p>
              <p className="text-gray-500 text-sm">Rua das Flores, 123</p>
              <p className="text-gray-500 text-sm">Zona Sul — SP</p>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 text-white text-lg transition-colors shadow-lg rounded-md"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </button>

          <p className="text-gray-400 text-sm mt-4">
            Respondemos em poucos minutos durante o horário de atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}
