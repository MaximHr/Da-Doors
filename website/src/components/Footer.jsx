import { Phone } from "lucide-react";
import tiktok from "../assets/tiktok2.svg";
import facebook from "../assets/facebook2.svg";
import instagram from "../assets/instagram2.svg";

const Footer = () => {
  return (
    <div className="max-w-7xl m-auto text-center flex-col md:flex-row gap-7 footer px-8 py-7 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Phone className="opacity-80" size={20} style={{ stroke: "white" }} />
        <p className="text-sm sm:text-[16px] text-white opacity-85">
          088 454 7575
        </p>
      </div>
      <p className="text-sm sm:text-[16px] text-white opacity-85">
        {new Date().getFullYear()} DA Doors | Всички права запазени.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://www.instagram.com/dadoors.bg/">
          <img className="transition-opacity hover:opacity-100 w-5 h-5 opacity-85" src={instagram} alt="instagram icon" />
        </a>
        <a href="https://www.facebook.com/share/1CRuMKcDMM/?mibextid=wwXIfr">
          <img className="transition-opacity hover:opacity-100 w-5 h-5 opacity-85" src={facebook} alt="facebook icon" />
        </a>
        <a href="https://www.tiktok.com/@da_doors">
          <img className=" transition-opacity hover:opacity-100 w-5 h-5 opacity-85" src={tiktok} alt="tiktok icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
