import { Link } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Врати", href: "/doors" },
    { label: "За нас", href: "/#about" },
  ];

  return (
    <header className="relative w-[100%] bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="bg-primary w-7 h-7 rounded-sm flex items-center justify-center">
            <span className="text-white font-display font-black text-xs tracking-tight">
              DA
            </span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            DA Doors
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-primary text-sm font-semibold text-foreground/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 bg-secondary rounded-[5px] px-4 py-2.5 border border-border">
            <Search size={13} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Потърси врата..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none w-34 text-foreground placeholder:text-muted-foreground font-body"
            />
          </div>
          <Link
            to="/doors"
            className="btn-hover px-5 py-2.5 rounded-[5px] bg-primary text-white text-sm font-semibold transition-colors"
          >
            Свържи се с нас
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="z-10 absolute left-0 w-full top-full md:hidden bg-white border-t border-border px-8 py-5 space-y-4">
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2.5 border border-border">
            <Search size={13} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Потърси врата"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground font-body"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-accent transition-colors py-1 font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 rounded-[5px] bg-primary text-white text-sm font-semibold btn-hover transition-colors"
          >
            Свържи се с нас
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
