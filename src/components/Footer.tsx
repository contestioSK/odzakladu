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
    <footer className="bg-construction-dark text-secondary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="#domov" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">OZ</span>
              </div>
              <span className="font-heading font-bold text-xl text-secondary-foreground">
                od<span className="text-primary">základu</span>.sk
              </span>
            </a>
            <p className="text-secondary-foreground/60 mb-4 leading-relaxed">
              Profesionálna stavebná spoločnosť s 15-ročnou tradíciou. 
              Ekologické stavby s prémiovými materiálmi.
            </p>
            <p className="text-secondary-foreground/40 text-sm mb-4">
              Prevádzkovateľ: <strong className="text-secondary-foreground/60">MMS Stav s.r.o.</strong>
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100039209113730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Sledujte nás na Facebooku</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Služby</h4>
            <ul className="space-y-3">
              {footerLinks.sluzby.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Spoločnosť</h4>
            <ul className="space-y-3">
              {footerLinks.spolocnost.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Doplňte adresu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+421908867350" className="hover:text-primary transition-colors">
                  +421 908 867 350
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@odzakladu.sk" className="hover:text-primary transition-colors">
                  info@odzakladu.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-secondary-foreground/10 pt-8 mb-8">
          <p className="text-center text-secondary-foreground/40 text-sm mb-4">Spolupracujeme s prémiovými dodávateľmi:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="text-secondary-foreground/60 font-medium">SIKA SLOVENSKO</span>
            <span className="text-secondary-foreground/40">•</span>
            <span className="text-secondary-foreground/60 font-medium">ATRO Banská Bystrica</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} odzakladu.sk | MMS Stav s.r.o. Všetky práva vyhradené.
            </p>
            <div className="flex gap-6 text-sm">
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
