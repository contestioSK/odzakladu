import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const footerLinks = {
  sluzby: [
    { label: "Rodinné domy", href: "#sluzby" },
    { label: "Komerčné budovy", href: "#sluzby" },
    { label: "Rekonštrukcie", href: "#sluzby" },
    { label: "Vodojemy", href: "#sluzby" },
    { label: "Vodovodné prípojky", href: "#sluzby" },
  ],
  spolocnost: [
    { label: "O nás", href: "#o-nas" },
    { label: "Ako pracujeme", href: "#proces" },
    { label: "Realizácie", href: "#projekty" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-dark text-secondary-foreground/80 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <a href="#domov" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-base sm:text-lg">OZ</span>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl text-secondary-foreground">
                od<span className="text-primary">základu</span>.sk
              </span>
            </a>
            <p className="text-secondary-foreground/60 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Profesionálna stavebná spoločnosť s 15-ročnou tradíciou. 
              Ekologické stavby s prémiovými materiálmi.
            </p>
            <p className="text-secondary-foreground/40 text-xs sm:text-sm mb-3 sm:mb-4">
              Prevádzkovateľ: <strong className="text-secondary-foreground/60">MMS Stav s.r.o.</strong>
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100039209113730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Sledujte nás na Facebooku</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-4 sm:mb-6 text-sm sm:text-base">Služby</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.sluzby.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-4 sm:mb-6 text-sm sm:text-base">Spoločnosť</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.spolocnost.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading font-bold text-secondary-foreground mb-4 sm:mb-6 text-sm sm:text-base">Kontakt</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">Lúčna 1765, 962 05 Hriňová</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+421908867350" className="hover:text-primary transition-colors text-xs sm:text-sm">
                  +421 908 867 350
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@odzakladu.sk" className="hover:text-primary transition-colors text-xs sm:text-sm">
                  info@odzakladu.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-secondary-foreground/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <p className="text-center text-secondary-foreground/40 text-xs sm:text-sm mb-3 sm:mb-4">Spolupracujeme s prémiovými dodávateľmi:</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="text-secondary-foreground/60 font-medium text-xs sm:text-sm">SIKA SLOVENSKO</span>
            <span className="text-secondary-foreground/40">•</span>
            <span className="text-secondary-foreground/60 font-medium text-xs sm:text-sm">ATRO Banská Bystrica</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-secondary-foreground/50 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} odzakladu.sk | MMS Stav s.r.o. Všetky práva vyhradené.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
                Ochrana súkromia
              </a>
              <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
                Obchodné podmienky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
