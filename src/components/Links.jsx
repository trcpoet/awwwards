import { TiLocationArrow } from "react-icons/ti";

const links = [
  { name: "Home", href: "#", icon: <TiLocationArrow /> },
  { name: "Products", href: "#" },
  { name: "Nexus", href: "#" },
  { name: "Vault", href: "#" },
  { name: "Prologue", href: "#" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Links = () => {
  return (
    <section className="bg-black py-20 text-white w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-10 font-general uppercase text-sm text-blue-50">
        Site Map
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative flex flex-col items-center justify-center gap-4"
          >
            <div className="text-4xl md:text-6xl font-zentry font-black uppercase text-blue-50 transition-colors duration-300 group-hover:text-yellow-300">
              <span className="glitch" data-text={link.name}>
                {link.name}
              </span>
            </div>
            {link.icon && (
              <div className="text-2xl text-yellow-300">{link.icon}</div>
            )}
          </a>
        ))}
      </div>

      <p className="mt-20 font-circular-web text-xs text-white/50">
        (Hover over links to see the effect)
      </p>
    </section>
  );
};

export default Links;
