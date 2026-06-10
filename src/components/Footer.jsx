import { navLinks } from '../data/content';

export function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-amber-950 text-amber-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Marca */}
        <div>
          <h3 className="text-2xl tracking-wide text-white mb-4">BelleHair</h3>
          <p className="text-amber-300 leading-relaxed mb-6">
            Especialistas em coloração, cortes e tratamentos capilares de luxo. Seu cabelo merece o melhor.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="px-4 py-2 bg-amber-800 hover:bg-amber-600 transition-colors text-sm rounded-md">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="px-4 py-2 bg-amber-800 hover:bg-amber-600 transition-colors text-sm rounded-md">
              Facebook
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer"
              className="px-4 py-2 bg-amber-800 hover:bg-amber-600 transition-colors text-sm rounded-md">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-lg mb-6 border-b border-amber-800 pb-2">Navegação</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-amber-300 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white text-lg mb-6 border-b border-amber-800 pb-2">Informações</h4>
          <div className="space-y-4 text-amber-300">
            <div>
              <p className="text-white text-sm mb-1">Endereço</p>
              <p>Rua das Flores, 123</p>
              <p>Zona Sul — São Paulo, SP</p>
            </div>
            <div>
              <p className="text-white text-sm mb-1">Telefone</p>
              <p>(11) 99999-9999</p>
            </div>
            <div>
              <p className="text-white text-sm mb-1">Horário</p>
              <p>Seg a Sex: 09h às 19h</p>
              <p>Sábado: 09h às 17h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-900 py-6 text-center text-amber-500 text-sm">
        © {new Date().getFullYear()} BelleHair. Todos os direitos reservados.
      </div>
    </footer>
  );
}