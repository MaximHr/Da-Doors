import { Mail, Phone } from "lucide-react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";

const Contact = () => {
  return (
    <div className="pt-16" id="contact">
      <div className="relative overflow-hidden rounded-[5px] blue-bc max-w-7xl mx-8 flex gap-7 flex-col lg:flex-row lg:items-stretch mb-16">
        <div className="contact-circle right-[-350px] absolute w-[600px] h-[600px] rounded-full"></div>
        <div className="blue-bc right-[-420px] top-[50%] translate-y-[-50%] absolute w-[600px] h-[600px] rounded-full"></div>

        <div className="z-10 w-full p-7 items-start info flex flex-col gap-6 sm:py-12 sm:px-14 ">
          <div>
            <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-4">
              Свържете се с нас
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none">
              Все още имате въпроси?
            </h2>
            <h2 className="mt-4 md:mt-0 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none">
              Ние сме на среща.
            </h2>
          </div>
          <div className="flex xs:flex-row xs:gap-14 gap-6 flex-col-reverse mt-4">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img src={instagram} className="w-7 h-7 md:w-8 md:h-8" alt="instagram icon" />
                <a
                  href="#"
                  className="text-base md:text-lg text-primary hover:opacity-80 transition"
                >
                  @dadoors
                </a>
              </div>
              <div className="flex items-center gap-3">
                <img src={facebook} className="w-7 h-7 md:w-8 md:h-8" alt="facebook icon" />
                <a
                  href="#"
                  className="text-base md:text-lg text-primary hover:opacity-80 transition"
                >
                  @insta
                </a>
              </div>

              <div className="flex items-center gap-3 translate-x-[-6px] md:translate-x-[-8px] translate-y-[-6px] md:translate-y-[-8px]">
                <img src={tiktok} className="w-10 h-10 md:w-12 md:h-12" alt="tiktok icon" />
                <a
                  href="#"
                  className="translate-x-[-3px] md:translate-x-[-5px] text-base md:text-lg text-primary hover:opacity-80 transition"
                >
                  dadoors
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <Mail size={28} className="hidden md:block text-primary flex-shrink-0" />
                <Mail size={24} className="md:hidden text-primary flex-shrink-0" />
                <a
                  href="mailto:info@doors.com"
                  className="text-base md:text-lg text-primary hover:opacity-80 transition"
                >
                  info@doors.com
                </a>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Phone size={26} className="hidden md:block text-primary flex-shrink-0" />
                <Phone size={22} className="md:hidden text-primary flex-shrink-0" />
                <a
                  href="tel:+359888123456"
                  className="text-base md:text-lg text-primary hover:opacity-80 transition"
                >
                  +359 888 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
